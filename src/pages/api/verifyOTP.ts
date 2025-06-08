import type { APIRoute } from "astro"
import { otpStore } from "./generateOTP"

// Función para generar token de sesión
function generateSessionToken(): string {
  return `admin_session_${Date.now()}_${Math.random().toString(36).substring(2)}`
}

const sessionStore = new Map<string, { expires: number; isAdmin: boolean }>()

export const POST: APIRoute = async ({ request }) => {
  try {
    const { sessionId, otpCode } = await request.json()

    console.log("🔍 Verificando código OTP:", { sessionId, otpCode })

    // Validaciones
    if (!sessionId || !otpCode) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "SessionId y código OTP son requeridos",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Buscar OTP en el almacén
    const storedOTP = otpStore.get(sessionId)

    if (!storedOTP) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Código OTP no encontrado o expirado",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Verificar si el OTP ha expirado
    if (storedOTP.expires < Date.now()) {
      otpStore.delete(sessionId)
      return new Response(
        JSON.stringify({
          success: false,
          message: "El código OTP ha expirado. Solicita uno nuevo.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Verificar si el código coincide
    if (storedOTP.code !== otpCode) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Código OTP incorrecto",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    otpStore.delete(sessionId)

    const adminToken = generateSessionToken()
    const sessionExpires = Date.now() + 24 * 60 * 60 * 1000

    sessionStore.set(adminToken, {
      expires: sessionExpires,
      isAdmin: true,
    })

    console.log("✅ OTP verificado exitosamente, sesión de admin creada")

    return new Response(
      JSON.stringify({
        success: true,
        message: "Acceso autorizado",
        adminToken: adminToken,
        expiresIn: 24 * 60 * 60,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error verificando OTP:", error)
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

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url)
    const adminToken = url.searchParams.get("token")

    if (!adminToken) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Token requerido",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const session = sessionStore.get(adminToken)

    if (!session) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Sesión no encontrada",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    if (session.expires < Date.now()) {
      sessionStore.delete(adminToken)
      return new Response(
        JSON.stringify({
          success: false,
          message: "Sesión expirada",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Sesión válida",
        isAdmin: session.isAdmin,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("❌ Error verificando sesión:", error)
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

export { sessionStore }
