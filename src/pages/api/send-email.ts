import { Resend } from "resend";
// src/pages/api/send-email.ts
import type { APIRoute } from 'astro';

export const prerender = false; // Esto fuerza SSR para esta ruta específica

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Content-Type debe ser application/json",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await request.json();
    const { nombre, email, telefono, asunto, mensaje } = data;

    console.log("📝 Datos recibidos:", { nombre, email, telefono, asunto, mensaje });

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Todos los campos obligatorios deben ser completados",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "El formato del email no es válido",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Verificar API key
    if (!import.meta.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está configurada");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error de configuración del servidor",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
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
    `;

    // Template de confirmación que se enviará al admin para que lo reenvíe manualmente al usuario
    const userConfirmationTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación para ${nombre} - Grupo Leones</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #D13239 0%, #B91C1C 100%); padding: 30px; text-align: center; }
          .logo { color: white; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .header-text { color: white; font-size: 16px; opacity: 0.9; }
          .content { padding: 40px 30px; text-align: center; }
          .success-icon { font-size: 48px; margin-bottom: 20px; }
          .title { color: #333; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
          .message { color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px; text-align: left; }
          .info-box { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .contact-info { background-color: #fff; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #ddd; }
          .admin-note { background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="admin-note">
            <p><strong>📧 Para el administrador:</strong> Copia este email y envíalo manualmente a: <strong>${email}</strong></p>
            <p>O simplemente responde al email anterior con este contenido.</p>
          </div>
          <div class="header">
            <div class="logo">🦁 GRUPO LEONES</div>
            <div class="header-text">Confirmación de recepción</div>
          </div>
          <div class="content">
            <div class="success-icon">✅</div>
            <h1 class="title">¡Mensaje recibido exitosamente!</h1>
            <div class="message">
              <p>Hola <strong>${nombre}</strong>,</p>
              <p>Hemos recibido tu consulta sobre "<strong>${asunto}</strong>" y queremos confirmarte que llegó correctamente a nuestro equipo de Grupo Leones.</p>
            </div>
            <div class="info-box">
              <p><strong>🚀 ¿Qué sigue ahora?</strong></p>
              <p>Nuestro equipo de especialistas revisará tu consulta y te responderá en un plazo máximo de <strong>24 horas</strong> al correo: <strong>${email}</strong></p>
            </div>
            <div class="message">
              <p>Mientras tanto, te invitamos a:</p>
              <ul style="text-align: left; margin: 15px 0;">
                <li>🔍 Explorar nuestras filiales en <a href="https://grupoleones.com" style="color: #D13239;">grupoleones.com</a></li>
                <li>📱 Seguirnos en nuestras redes sociales</li>
                <li>💬 Contactarnos por WhatsApp para consultas urgentes</li>
              </ul>
            </div>
            <div class="contact-info">
              <p><strong>📞 Contacto directo:</strong></p>
              <p>📧 info@grupoleones.com</p>
              <p>📱 +1 (555) 123-4567</p>
            </div>
          </div>
          <div class="footer">
            <p><strong>Grupo Leones</strong> - Tu aliado estratégico para emprender y escalar</p>
            <p>Gracias por confiar en nosotros 🙏</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("🚀 Iniciando envío de emails...");

    // Enviar email al administrador
    const adminEmailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "easybookingvalidation@gmail.com",
      subject: `🦁 Nueva consulta: ${asunto} - ${nombre}`,
      html: adminEmailContent,
      replyTo: email,
    });

    console.log("📧 Resultado email admin:", adminEmailResult);

    // Enviar template de confirmación al admin para que lo reenvíe al usuario
    const confirmationTemplateResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "easybookingvalidation@gmail.com",
      subject: `📧 Template de confirmación para ${nombre} (${email})`,
      html: userConfirmationTemplate,
    });

    console.log("📧 Resultado template confirmación:", confirmationTemplateResult);

    if (adminEmailResult.error) {
      console.error("❌ Error enviando email al admin:", adminEmailResult.error);
      throw new Error(`Error enviando email al administrador: ${adminEmailResult.error.message}`);
    }

    console.log("✅ Emails enviados exitosamente!");

    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Mensaje enviado correctamente! El administrador te responderá en un plazo máximo de 24 horas.",
        adminEmailId: adminEmailResult.data?.id,
        note: "El email de confirmación será enviado manualmente por el administrador",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );

  } catch (error) {
    console.error("❌ Error en API send-email:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor. Por favor, inténtalo de nuevo.",
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};