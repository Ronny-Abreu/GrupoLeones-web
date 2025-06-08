import nodemailer from "nodemailer"
import type { APIRoute } from "astro"
import { db } from "../../lib/firebase"
import { collection, getDocs } from "firebase/firestore"

interface SubscriptionData {
  email: string
  date: string
  id: string
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

function createEmailTemplate(subject: string, body: string): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          padding: 30px 20px;
          text-align: center;
          color: white;
        }
        
        .header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 300;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .subject-line {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-left: 4px solid #dc2626;
          padding: 20px;
          margin-bottom: 30px;
          border-radius: 0 8px 8px 0;
        }
        
        .subject-line h2 {
          color: #1f2937;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .subject-line .date {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
        }
        
        .message-body {
          background-color: #ffffff;
          padding: 25px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          line-height: 1.8;
          font-size: 16px;
          color: #374151;
        }
        
        .message-body p {
          margin-bottom: 16px;
        }
        
        .message-body p:last-child {
          margin-bottom: 0;
        }
        
        .footer {
          background-color: #f9fafb;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        
        .footer-content {
          max-width: 400px;
          margin: 0 auto;
        }
        
        .company-info {
          margin-bottom: 20px;
        }
        
        .company-name {
          font-size: 20px;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 8px;
        }
        
        .company-tagline {
          color: #6b7280;
          font-size: 14px;
          font-style: italic;
        }
        
        .contact-info {
          color: #6b7280;
          font-size: 13px;
          line-height: 1.5;
        }
        
        .contact-info a {
          color: #dc2626;
          text-decoration: none;
        }
        
        .contact-info a:hover {
          text-decoration: underline;
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          margin: 20px 0;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .header {
            padding: 25px 15px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .subject-line {
            padding: 15px;
          }
          
          .subject-line h2 {
            font-size: 20px;
          }
          
          .message-body {
            padding: 20px;
            font-size: 15px;
          }
          
          .footer {
            padding: 25px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Grupo Leones</h1>
          <p>Comunicación oficial</p>
        </div>
        
        <div class="content">
          <div class="subject-line">
            <h2>${subject}</h2>
            <div class="date">${new Date().toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</div>
          </div>
          
          <div class="message-body">
            ${body
              .split("\n")
              .map((paragraph) => (paragraph.trim() ? `<p>${paragraph}</p>` : ""))
              .join("")}
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <div class="company-info">
              <div class="company-name">Grupo Leones</div>
              <div class="company-tagline">Excelencia en cada proyecto</div>
            </div>
            
            <div class="divider"></div>
            
            <div class="contact-info">
              <p>Este correo fue enviado desde nuestro sistema oficial.</p>
              <p>Para más información, contáctanos en:</p>
              <p><a href="mailto:${EMAIL_USER}">${EMAIL_USER}</a></p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export const GET: APIRoute = async () => {
  try {
    // Obtener emails desde Firebase en lugar del archivo JSON
    const subscriptionsRef = collection(db, "subscriptions")
    const snapshot = await getDocs(subscriptionsRef)

    const emails: string[] = []
    snapshot.forEach((doc) => {
      const data = doc.data() as SubscriptionData
      emails.push(data.email)
    })

    return new Response(
      JSON.stringify({
        success: true,
        emails: emails,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error obteniendo emails:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error obteniendo lista de emails",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, subject, body } = await request.json()

    console.log("📧 Procesando envío de email admin:", {
      destinatario: email,
      asunto: subject,
      cuerpoLength: body ? body.length : 0,
    })

    // Verificar configuración de email
    if (!transporter) {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            "Error de configuración del servidor. Las variables de entorno EMAIL_USER y EMAIL_PASS no están configuradas.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validaciones
    if (!email || !subject || !body) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Todos los campos son obligatorios",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    let recipients: string[] = []

    if (email === "todos-los-suscriptores") {
      // Obtener todos los emails de Firebase
      const subscriptionsRef = collection(db, "subscriptions")
      const snapshot = await getDocs(subscriptionsRef)

      snapshot.forEach((doc) => {
        const data = doc.data() as SubscriptionData
        recipients.push(data.email)
      })

      console.log(`📮 Enviando a todos los suscriptores: ${recipients.length} destinatarios`)

      if (recipients.length === 0) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "No hay suscriptores registrados",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        )
      }
    } else {
      // Verificar que el email existe en Firebase
      const subscriptionsRef = collection(db, "subscriptions")
      const snapshot = await getDocs(subscriptionsRef)

      let emailExists = false
      snapshot.forEach((doc) => {
        const data = doc.data() as SubscriptionData
        if (data.email === email) {
          emailExists = true
        }
      })

      if (!emailExists) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "El email no está en la lista de suscriptores",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        )
      }
      recipients = [email]
    }

    // Crear el template del email
    const htmlContent = createEmailTemplate(subject, body)

    // Configurar opciones del email
    const mailOptions = {
      from: `"Grupo Leones" <${EMAIL_USER}>`,
      to: recipients.join(", "),
      subject: subject,
      html: htmlContent,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    console.log("✅ Email enviado exitosamente!")

    return new Response(
      JSON.stringify({
        success: true,
        message: `Email enviado exitosamente a ${recipients.length} destinatario(s)`,
        recipientCount: recipients.length,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error enviando email admin:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor al enviar el email",
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
