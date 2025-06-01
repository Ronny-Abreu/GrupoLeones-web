import { Resend } from "resend"
import type { APIRoute } from "astro"

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  // Agregar headers CORS
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  try {
    // Verificar que la API key existe
    if (!import.meta.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está configurada")
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error de configuración del servidor",
        }),
        {
          status: 500,
          headers,
        },
      )
    }

    const contentType = request.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Content-Type debe ser application/json",
        }),
        {
          status: 400,
          headers,
        },
      )
    }

    let data
    try {
      data = await request.json()
    } catch (parseError) {
      console.error("❌ Error parsing JSON:", parseError)
      return new Response(
        JSON.stringify({
          success: false,
          message: "Formato JSON inválido",
        }),
        {
          status: 400,
          headers,
        },
      )
    }

    const { nombre, email, telefono, asunto, mensaje } = data

    console.log("📝 Datos recibidos:", { nombre, email, telefono, asunto, mensaje })

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Todos los campos obligatorios deben ser completados",
        }),
        {
          status: 400,
          headers,
        },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "El formato del email no es válido",
        }),
        {
          status: 400,
          headers,
        },
      )
    }

    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva consulta - Grupo Leones</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #D13239 0%, #B91C1C 100%); padding: 30px; text-align: center; }
          .logo { color: white; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .header-text { color: white; font-size: 16px; opacity: 0.9; }
          .content { padding: 40px 30px; }
          .field { margin-bottom: 25px; }
          .label { font-weight: bold; color: #333; font-size: 14px; margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #D13239; color: #333; font-size: 16px; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .urgent { background-color: #fff3cd; border-left-color: #ffc107; }
          .note { background-color: #e7f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🦁 GRUPO LEONES</div>
            <div class="header-text">Nueva consulta recibida</div>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Nombre del cliente:</span>
              <div class="value">${nombre}</div>
            </div>
            <div class="field">
              <span class="label">📧 Email de contacto:</span>
              <div class="value">${email}</div>
            </div>
            ${
              telefono
                ? `
            <div class="field">
              <span class="label">📱 Teléfono:</span>
              <div class="value">${telefono}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <span class="label">📋 Asunto:</span>
              <div class="value urgent">${asunto}</div>
            </div>
            <div class="field">
              <span class="label">💬 Mensaje:</span>
              <div class="value">${mensaje}</div>
            </div>
            <div class="note">
              <p><strong>📝 Nota importante:</strong> El cliente espera una respuesta en un plazo máximo de 24 horas. Puedes responder directamente a este email para contactarlo.</p>
            </div>
          </div>
          <div class="footer">
            <p><strong>📅 Fecha de envío:</strong> ${new Date().toLocaleString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</p>
            <p>Este mensaje fue enviado desde el formulario de contacto de <strong>grupoleones.com</strong></p>
            <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd;">
              <strong>💡 Tip:</strong> Puedes responder directamente a este email para contactar al cliente.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    console.log("🚀 Iniciando envío de email...")

    // Enviar email al administrador
    const adminEmailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "easybookingvalidation@gmail.com",
      subject: `🦁 Nueva consulta: ${asunto} - ${nombre}`,
      html: adminEmailContent,
      replyTo: email,
    })

    console.log("📧 Resultado email admin:", adminEmailResult)

    if (adminEmailResult.error) {
      console.error("❌ Error enviando email al admin:", adminEmailResult.error)
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error al enviar el email. Por favor, inténtalo de nuevo.",
          error: adminEmailResult.error.message,
        }),
        {
          status: 500,
          headers,
        },
      )
    }

    console.log("✅ Email enviado exitosamente!")

    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Mensaje enviado correctamente! Te responderemos en un plazo máximo de 24 horas.",
        emailId: adminEmailResult.data?.id,
      }),
      {
        status: 200,
        headers,
      },
    )
  } catch (error) {
    console.error("❌ Error en API send-email:", error)

    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor. Por favor, inténtalo de nuevo.",
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers,
      },
    )
  }
}

// Manejar OPTIONS para CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
