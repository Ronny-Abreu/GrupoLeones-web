import {
  doc,
  query,
  where,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  increment,
  deleteDoc,
  collection,
} from "firebase/firestore"
import nodemailer from "nodemailer"
import type { APIRoute } from "astro"
import { db } from "../../lib/firebase"

interface SubscriptionData {
  email: string
  date: string
  id: string
}

interface VisitorData {
  ip: string
  userAgent: string
  firstVisit: string
  lastVisit: string
  visitCount: number
}

interface StatsData {
  totalEmails: number
  monthlyVisits: number
  lastVisitReset: string
  currentMonth: string
}

const EMAIL_USER = process.env.EMAIL_USER || import.meta.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS || import.meta.env.EMAIL_PASS

const transporter =
  EMAIL_USER && EMAIL_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      })
    : null

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")
  const cfConnectingIP = request.headers.get("cf-connecting-ip")

  if (forwarded) return forwarded.split(",")[0].trim()
  if (realIP) return realIP
  if (cfConnectingIP) return cfConnectingIP
  return "unknown"
}

function getCurrentMonth(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function sendConfirmationEmail(email: string): Promise<boolean> {
  if (!transporter) {
    return false
  }

  const mailOptions = {
    from: `"Grupo Leones" <${EMAIL_USER}>`,
    to: email,
    subject: "¡Bienvenido a Grupo Leones! - Suscripción Confirmada",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc2626; margin: 0; font-size: 28px;">¡Bienvenido a Grupo Leones!</h1>
            <div style="width: 50px; height: 3px; background-color: #dc2626; margin: 15px auto;"></div>
          </div>
          
          <div style="color: #333; line-height: 1.6; font-size: 16px;">
            <p>¡Hola!</p>
            
            <p>Te damos la más cordial bienvenida a la familia de <strong>Grupo Leones</strong>. Tu suscripción ha sido confirmada exitosamente.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #dc2626; margin-top: 0;">¿Qué puedes esperar?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Promociones exclusivas de nuestras filiales</li>
                <li>Noticias y actualizaciones importantes</li>
                <li>Información sobre nuevas acciones y proyectos</li>
                <li>Contenido de valor para nuestros suscriptores</li>
              </ul>
            </div>
            
            <p>Nos comprometemos a enviarte contenido relevante y de calidad.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background-color: #dc2626; color: white; padding: 15px 25px; border-radius: 5px; display: inline-block;">
                <strong>¡Gracias por confiar en nosotros!</strong>
              </div>
            </div>
            
            <p style="font-size: 14px; color: #666; border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
              Si tienes alguna pregunta, contáctanos.<br>
              <strong>Equipo Grupo Leones</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error("❌ Error enviando email:", error)
    return false
  }
}

async function updateStats(isNewSubscription = false): Promise<StatsData> {
  const statsRef = doc(db, "stats", "general")

  try {
    const statsDoc = await getDoc(statsRef)
    const now = new Date()
    const currentMonth = getCurrentMonth()

    if (!statsDoc.exists()) {

      const initialStats: StatsData = {
        totalEmails: isNewSubscription ? 1 : 0,
        monthlyVisits: 0,
        lastVisitReset: now.toISOString(),
        currentMonth: currentMonth,
      }
      await setDoc(statsRef, initialStats)
      return initialStats
    }

    const currentStats = statsDoc.data() as StatsData
    const updates: any = {}

    if (isNewSubscription) {
      updates.totalEmails = increment(1)
    }

    // Resetear visitas si es un nuevo mes
    if (currentStats.currentMonth !== currentMonth) {
      console.log(`🗓️ Nuevo mes detectado: ${currentMonth}. Reseteando contadores de visitas.`)
      updates.monthlyVisits = 0
      updates.lastVisitReset = now.toISOString()
      updates.currentMonth = currentMonth

      await cleanupOldVisitors(currentStats.currentMonth)
    }

    if (Object.keys(updates).length > 0) {
      await updateDoc(statsRef, updates)
    }

    // Obtener datos actualizados
    const updatedDoc = await getDoc(statsRef)
    return updatedDoc.data() as StatsData
  } catch (error) {
    console.error("❌ Error actualizando estadísticas:", error)
    throw error
  }
}

async function trackVisitor(clientIP: string, userAgent: string): Promise<boolean> {
  const currentMonth = getCurrentMonth()
  const visitorId = `${clientIP}-${currentMonth}`
  const visitorRef = doc(db, "visitors", visitorId)

  try {
    const visitorDoc = await getDoc(visitorRef)
    const now = new Date().toISOString()

    if (!visitorDoc.exists()) {
      // Nuevo visitante único este mes
      const newVisitor: VisitorData = {
        ip: clientIP,
        userAgent: userAgent,
        firstVisit: now,
        lastVisit: now,
        visitCount: 1,
      }

      await setDoc(visitorRef, newVisitor)

      // Incrementar contador de visitas mensuales
      const statsRef = doc(db, "stats", "general")
      await updateDoc(statsRef, {
        monthlyVisits: increment(1),
      })

      return true
    } else {

      await updateDoc(visitorRef, {
        lastVisit: now,
        visitCount: increment(1),
      })

      return false
    }
  } catch (error) {
    return false
  }
}

async function cleanupOldVisitors(oldMonth: string): Promise<void> {
  try {

    const visitorsRef = collection(db, "visitors")
    const snapshot = await getDocs(visitorsRef)

    const deletePromises: Promise<void>[] = []

    snapshot.forEach((docSnapshot) => {
      const visitorId = docSnapshot.id
      if (visitorId.endsWith(`-${oldMonth}`)) {
        deletePromises.push(deleteDoc(docSnapshot.ref))
      }
    })

    await Promise.all(deletePromises)
  } catch (error) {
    console.error("❌ Error limpiando visitantes:", error)
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, termsAccepted } = await request.json()

    if (!transporter) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error de configuración del servidor. Contacta al administrador.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validaciones
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email inválido",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    if (!termsAccepted) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Debes aceptar los términos y condiciones",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Verificar si el email ya existe en Firestore
    const subscriptionsRef = collection(db, "subscriptions")
    const emailQuery = query(subscriptionsRef, where("email", "==", email.toLowerCase()))
    const existingEmails = await getDocs(emailQuery)

    if (!existingEmails.empty) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Este email ya está suscrito",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Enviar email de confirmación
    const emailSent = await sendConfirmationEmail(email)
    if (!emailSent) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error al enviar el email de confirmación",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Agregar nueva suscripción a Firestore
    const newSubscription: SubscriptionData = {
      email: email.toLowerCase(),
      date: new Date().toISOString(),
      id: Date.now().toString(),
    }

    await addDoc(subscriptionsRef, newSubscription)

    // Actualizar estadísticas
    const updatedStats = await updateStats(true)


    return new Response(
      JSON.stringify({
        success: true,
        message: "Suscripción exitosa",
        totalEmails: updatedStats.totalEmails,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    // console.error("❌ Error en la API de suscripción:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export const GET: APIRoute = async ({ request }) => {
  try {

    const clientIP = getClientIP(request)
    const userAgent = request.headers.get("user-agent") || "unknown"

    await trackVisitor(clientIP, userAgent)

    const updatedStats = await updateStats(false)

    return new Response(
      JSON.stringify({
        success: true,
        totalEmails: updatedStats.totalEmails,
        monthlyVisits: updatedStats.monthlyVisits,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error obteniendo estadísticas",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
