import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ohuO1twR.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Grupo Leones" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center p-4"> <!-- Back to Home Button --> <a href="/" class="fixed top-6 left-6 z-50 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-110"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <div class="w-full max-w-md"> <!-- Login Card --> <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8"> <!-- Logo --> <div class="text-center mb-6 md:mb-8"> <div class="inline-block p-3 md:p-4 bg-white/20 rounded-full mb-4"> <svg class="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path> </svg> </div> <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">Bienvenido Admin</h1> <p class="text-white/80 text-sm md:text-base">Accede al panel de administración</p> </div> <!-- Login Form --> <form id="loginForm" class="space-y-4 md:space-y-6"> <!-- Email Field --> <div class="relative"> <label for="email" class="block text-sm font-medium text-white/90 mb-2">
Correo Electrónico
</label> <div class="relative"> <input type="email" id="email" name="email" required class="w-full px-4 py-3 pl-12 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-sm md:text-base" placeholder="admin@grupoleones.com"> <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path> </svg> </div> </div> <!-- Password Field --> <div class="relative"> <label for="password" class="block text-sm font-medium text-white/90 mb-2">
Contraseña
</label> <div class="relative"> <input type="password" id="password" name="password" required class="w-full px-4 py-3 pl-12 pr-12 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-sm md:text-base" placeholder="••••••••"> <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> <button type="button" id="togglePassword" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"> <svg id="eyeIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </button> </div> </div> <!-- Remember Me --> <div class="flex items-center"> <label class="flex items-center"> <input type="checkbox" class="w-4 h-4 text-red-600 bg-white/20 border-white/30 rounded focus:ring-white/50"> <span class="ml-2 text-sm text-white/80">Recordarme</span> </label> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-white text-red-600 py-3 px-4 rounded-xl font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transform transition-all duration-300 hover:scale-105 active:scale-95">
Iniciar Sesión
</button> </form> <!-- Admin Credentials Info --> <div class="mt-6 p-4 bg-white/5 rounded-xl border border-white/20"> <p class="text-white/70 text-xs md:text-sm text-center"> <strong>Credenciales de prueba:</strong><br>
Email: admin@grupoleones.com<br>
Contraseña: admin123
</p> </div> </div> </div> </main> ${renderScript($$result2, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/login.astro", void 0);

const $$file = "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
