import nodemailer from "nodemailer"
import type { APIRoute } from "astro"

const EMAIL_USER = process.env.EMAIL_USER || import.meta.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS || import.meta.env.EMAIL_PASS

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("❌ ERROR: Variables de entorno EMAIL_USER y EMAIL_PASS son requeridas")
}

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

const otpStore = new Map<string, { code: string; expires: number }>()

function generateOTPCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

function createOTPEmailTemplate(otpCode: string): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Código de Acceso - Grupo Leones</title>
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
          padding: 40px 20px;
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
          text-align: center;
        }
        
        .otp-section {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          border: 2px solid #dc2626;
        }
        
        .otp-label {
          color: #374151;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .otp-code {
          font-size: 36px;
          font-weight: 800;
          color: #dc2626;
          letter-spacing: 8px;
          font-family: 'Courier New', monospace;
          background: white;
          padding: 15px 25px;
          border-radius: 8px;
          border: 2px solid #dc2626;
          display: inline-block;
          margin: 10px 0;
        }
        
        .warning {
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 15px;
          margin: 25px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .warning-text {
          color: #92400e;
          font-size: 14px;
          font-weight: 500;
        }
        
        .instructions {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.6;
          margin: 20px 0;
        }
        
        .footer {
          background-color: #f9fafb;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        
        .footer-content {
          color: #6b7280;
          font-size: 13px;
          line-height: 1.5;
        }
        
        .security-note {
          background-color: #dbeafe;
          border-left: 4px solid #3b82f6;
          padding: 15px;
          margin: 25px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .security-text {
          color: #1e40af;
          font-size: 14px;
          font-weight: 500;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .header {
            padding: 30px 15px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .otp-code {
            font-size: 28px;
            letter-spacing: 4px;
            padding: 12px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>🔐 Código de Acceso</h1>
          <p>Panel de Administración - Grupo Leones</p>
        </div>
        
        <div class="content">
          <div class="instructions">
            <p>Se ha solicitado acceso al panel de administración. Utiliza el siguiente código para continuar:</p>
          </div>
          
          <div class="otp-section">
            <div class="otp-label">Tu código de acceso es:</div>
            <div class="otp-code">${otpCode}</div>
          </div>
          
          <div class="warning">
            <div class="warning-text">
              ⚠️ <strong>Importante:</strong> Este código expira en 5 minutos y solo puede usarse una vez.
            </div>
          </div>
          
          <div class="security-note">
            <div class="security-text">
              🛡️ <strong>Seguridad:</strong> Si no solicitaste este código, ignora este mensaje. Nunca compartas este código con nadie.
            </div>
          </div>
          
          <div class="instructions">
            <p>Ingresa este código en la página de login para acceder al panel de administración.</p>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <p><strong>Grupo Leones - Panel de Administración</strong></p>
            <p>Este código fue generado el ${new Date().toLocaleString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</p>
            <p style="margin-top: 15px; color: #9ca3af;">
              Si tienes problemas para acceder, contacta al administrador del sistema.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("🔐 Generando código OTP para admin...")

    if (!transporter) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error de configuración del servidor",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Generar código OTP
    const otpCode = generateOTPCode()
    const expiresAt = Date.now() + 5 * 60 * 1000 // 5 minutos

    const sessionId = `admin_${Date.now()}`
    otpStore.set(sessionId, {
      code: otpCode,
      expires: expiresAt,
    })

    // Limpiar OTPs expirados
    for (const [key, value] of otpStore.entries()) {
      if (value.expires < Date.now()) {
        otpStore.delete(key)
      }
    }

    console.log(`📧 Enviando OTP ${otpCode} al email admin...`)

    const htmlContent = createOTPEmailTemplate(otpCode)

    const mailOptions = {
      from: `"Grupo Leones - Seguridad" <${EMAIL_USER}>`,
      to: EMAIL_USER, // Enviar al mismo email admin
      subject: "🔐 Código de Acceso - Panel de Administración",
      html: htmlContent,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    console.log("✅ OTP enviado exitosamente")

    return new Response(
      JSON.stringify({
        success: true,
        message: "Código enviado exitosamente",
        sessionId: sessionId,
        expiresIn: 300,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error generando OTP:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export { otpStore }
