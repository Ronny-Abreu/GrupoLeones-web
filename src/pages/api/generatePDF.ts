import { jsPDF } from "jspdf"
import type { APIRoute } from "astro"
import { db } from "../../../lib/firebase"
import { collection, getDocs } from "firebase/firestore"

interface SubscriptionData {
  email: string
  date: string
  id: string
}

export const GET: APIRoute = async () => {
  try {
    // Obtener todos los emails de Firestore
    const subscriptionsRef = collection(db, "subscriptions")
    const snapshot = await getDocs(subscriptionsRef)

    const emails: SubscriptionData[] = []
    snapshot.forEach((doc) => {
      const data = doc.data() as SubscriptionData
      emails.push(data)
    })

    // Generar PDF
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

    // Generar PDF como buffer
    const pdfBuffer = doc.output("arraybuffer")

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="emails-list-grupo-leones.pdf"',
      },
    })
  } catch (error) {
    console.error("❌ Error generando PDF:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error generando PDF",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
