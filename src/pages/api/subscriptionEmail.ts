import path from "path"
import fs from "fs/promises"
import { jsPDF } from "jspdf"
import nodemailer from "nodemailer"
import type { APIRoute } from "astro"

interface SubscriptionData {
  email: string
  date: string
  id: string
}

interface VisitorData {
  ip: string
  userAgent: string
  lastVisit: string
}

interface StatsData {
  emails: SubscriptionData[]
  visits: number
  lastVisitReset: string
  visitors: VisitorData[]
}

const DATA_FILE = path.join(process.cwd(), "data", "subscriptions.json")
const PDF_FILE = path.join(process.cwd(), "public", "emails-list.pdf")

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

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }

  return "unknown"
}

async function readData(): Promise<StatsData> {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    const data = await fs.readFile(DATA_FILE, "utf-8")
    const parsedData = JSON.parse(data)

    if (!parsedData.visitors) {
      parsedData.visitors = []
    }

    return parsedData
  } catch (error) {
    return {
      emails: [],
      visits: 0,
      lastVisitReset: new Date().toISOString(),
      visitors: [],
    }
  }
}

async function saveData(data: StatsData): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}

// Función para generar PDF
async function generatePDF(emails: SubscriptionData[]): Promise<void> {
  const doc = new jsPDF()

  doc.setFontSize(20)
  doc.text("Lista de Emails Suscritos - Grupo Leones", 20, 30)

  doc.setFontSize(12)
  doc.text(`Generado el: ${new Date().toLocaleDateString("es-ES")}`, 20, 45)
  doc.text(`Total de suscriptores: ${emails.length}`, 20, 55)

  doc.line(20, 65, 190, 65)

  // Headers
  doc.setFontSize(14)
  doc.text("Email", 20, 80)
  doc.text("Fecha de Suscripción", 120, 80)

  doc.line(20, 85, 190, 85)

  doc.setFontSize(10)
  let yPosition = 95

  emails.forEach((subscription, index) => {
    if (yPosition > 270) {
      doc.addPage()
      yPosition = 30
    }

    doc.text(`${index + 1}. ${subscription.email}`, 20, yPosition)
    doc.text(new Date(subscription.date).toLocaleDateString("es-ES"), 120, yPosition)
    yPosition += 10
  })

  // Guardar PDF
  await fs.mkdir(path.dirname(PDF_FILE), { recursive: true })
  const pdfBuffer = doc.output("arraybuffer")
  await fs.writeFile(PDF_FILE, Buffer.from(pdfBuffer))
}

// Función para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function sendConfirmationEmail(email: string): Promise<boolean> {

    if (!transporter) {
    console.error("❌ Transportador de email no configurado. Verifica las variables de entorno.")
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
            
            <p>Nos comprometemos a enviarte contenido relevante y de calidad. Recibirás nuestros correos de forma periódica con las mejores ofertas y novedades.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background-color: #dc2626; color: white; padding: 15px 25px; border-radius: 5px; display: inline-block;">
                <strong>¡Gracias por confiar en nosotros!</strong>
              </div>
            </div>
            
            <p style="font-size: 14px; color: #666; border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
              Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.<br>
              <strong>Equipo Grupo Leones</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  }

  try {
    console.log("📧 Enviando email de confirmación a:", email)
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    return false
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

    const data = await readData()

    // Verificar si el email ya existe
    const emailExists = data.emails.some((sub) => sub.email.toLowerCase() === email.toLowerCase())
    if (emailExists) {
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

    // Agregar nueva suscripción
    const newSubscription: SubscriptionData = {
      email: email.toLowerCase(),
      date: new Date().toISOString(),
      id: Date.now().toString(),
    }

    data.emails.push(newSubscription)

    // Guardar datos
    await saveData(data)

    // Generar PDF actualizado
    await generatePDF(data.emails)


    return new Response(
      JSON.stringify({
        success: true,
        message: "Suscripción exitosa",
        totalEmails: data.emails.length,
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
    const data = await readData()

    const clientIP = getClientIP(request)
    const userAgent = request.headers.get("user-agent") || "unknown"
    const now = new Date()
    const currentMonth = `${now.getFullYear()}-${now.getMonth()}`

    const lastReset = new Date(data.lastVisitReset)
    const lastResetMonth = `${lastReset.getFullYear()}-${lastReset.getMonth()}`
    const isNewMonth = currentMonth !== lastResetMonth

    if (isNewMonth) {
      // Resetear contadores para el nuevo mes
      data.visits = 0
      data.visitors = []
      data.lastVisitReset = now.toISOString()
    }

    // Verificar si este visitante ya fue contado este mes
    const visitorKey = `${clientIP}-${userAgent}`
    const existingVisitor = data.visitors.find((v) => `${v.ip}-${v.userAgent}` === visitorKey)

    if (!existingVisitor) {
      // Nuevo visitante único este mes
      data.visits += 1
      data.visitors.push({
        ip: clientIP,
        userAgent: userAgent,
        lastVisit: now.toISOString(),
      })

      if (data.visitors.length > 1000) {
        data.visitors = data.visitors.slice(-1000)
      }

      await saveData(data)
    } else {
      // Actualizar la última visita del visitante existente
      existingVisitor.lastVisit = now.toISOString()
      await saveData(data)
    }

    return new Response(
      JSON.stringify({
        success: true,
        totalEmails: data.emails.length,
        monthlyVisits: data.visits,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error obteniendo estadísticas:", error)
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
