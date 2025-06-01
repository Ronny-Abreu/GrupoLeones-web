import { c as createComponent, m as maybeRenderHead, g as renderSlot, r as renderComponent, b as renderScript, a as renderTemplate, e as addAttribute } from '../chunks/astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import { a as $$Favicon, $ as $$Layout } from '../chunks/Layout_ohuO1twR.mjs';
import { $ as $$Header } from '../chunks/Header_BfzWgF0o.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-screen flex flex-col selection:bg-red-800"> <div class="absolute inset-0 z-0"> <img src="/images/heropg.webp" alt="Background" class="w-full h-full object-cover"> <!-- Red Gradient Overlay --> <div class="absolute inset-0 bg-[#D13239]/90"></div> </div> <!-- Content --> <div class="relative z-10 flex-1 flex flex-col"> ${renderSlot($$result, $$slots["default"])} <!-- Hero Content --> <div class="flex-1 flex items-center justify-center flex-col px-4"> <div class="mb-7 animate-fade-in-up animation-delay-300"> <a href="/login" class="block transition-transform duration-300 hover:scale-110 cursor-pointer"> ${renderComponent($$result, "Favicon", $$Favicon, { "size": "200" })} </a> </div> <div class="text-center text-white max-w-4xl mx-auto animate-fade-in-up animation-delay-500"> <h1 class="text-4xl md:text-6xl font-bold mb-6">
¡IMPULSA TU NEGOCIO YA!
</h1> <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-center">
Con Grupo Leones <b>SÍ</b> puedes crecer, emprender<br class="hidden md:block">
y dejar tu huella imborrable en el mundo.
</p> <!-- Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center select-none animate-fade-in-up animation-delay-700"> <a href="#filiales" class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full border border-white/30 transition-all duration-300">
Ver filiales
</a> <a href="#contacto" class="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-full border border-white/80 transition-all duration-300">
Contáctanos
</a> </div> </div> </div> </div> </section> <!-- WhatsApp Button --> <div id="whatsappBtn" class="fixed bottom-20 right-6 z-50 opacity-0 transform translate-y-10 transition-all duration-500"> <a href="https://wa.me/+18296710425" target="_blank" class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path> </svg> </a> </div> ${renderScript($$result, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Hero.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full p-7 flex flex-col items-center justify-center bg-[#f5f4f6] border border-b-2 border-gray-300"> <div class="backdrop-blur-sm0"> <div class="mx-auto max-w-7xl px-4 py-12"> <div class="mb-10 text-center"> <h2 class="text-3xl font-bold lg:text-4xl text-[#2E3038]"> <span>Con el respaldo de</span> más de 7 filiales activos in all-time
</h2> <p class="mx-auto mt-4 max-w-2xl text-[20px] text-[#2E3038B2]">
Pioneros gracias a nuestros filiares que cubren todas las áreas
</p> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"> <div class="flex flex-col items-center rounded-xl p-6 text-center shadow-md"> <div class="mb-4 rounded-full p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44&quot;" viewBox="0 0 24 24" fill="none" stroke="#FFBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing-icon lucide-chart-column-increasing"><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M8 17v-3"></path></svg> </div> <h3 class="mb-2 text-[21px] font-semibold text-[#2E3038]">Comunidad Creciente</h3> <p class="text-[19px] text-[#2E3038B2]">
Conectamos a jóvenes con ganas de crecer, compartir ideas y construir negocios que dejen huella desde el primer paso.
</p> </div> <div class="flex flex-col items-center rounded-xl #fdfcfc p-6 text-center shadow-md"> <div class="mb-4 rounded-full p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> </div> <h3 class="mb-2 text-xl font-semibold text-[#2E3038]">Compañia Adorable</h3> <p class="text-[19px] text-[#2E3038B2]">
Más que una empresa, somos tu equipo. Te escuchamos, te guiamos y celebramos contigo cada avance, por pequeño que parezca.
</p> </div> <div class="flex flex-col items-center rounded-xl #fdfcfc p-6 text-center shadow-md"> <div class="mb-4 rounded-full p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> </div> <h3 class="mb-2 text-xl font-semibold text-[#2E3038]">Experiencia Premium</h3> <p class="text-[19px] text-[#2E3038B2]">
Te damos herramientas reales, una experiencia premium y soluciones personalizadas que se sienten a la altura de tu esfuerzo.
</p> </div> <div class="flex flex-col items-center rounded-xl #fdfcfc p-6 text-center shadow-md"> <div class="mb-4 rounded-full p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg> </div> <h3 class="mb-2 text-xl font-semibold text-[#2E3038]">Funciones Innovadoras</h3> <p class="text-[19px] text-[#2E3038B2]">
Creemos en el cambio. Por eso integramos educación, impacto social y asesoría para ayudarte a crecer con propósito.
</p> </div> </div> </div> </div></div>`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Benefits.astro", void 0);

const $$Filials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="filiales" class="relative py-20 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]" data-astro-cid-ic6owlb4> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-ic6owlb4> <div class="text-center mb-16" data-astro-cid-ic6owlb4> <h2 class="animated-gradient-text bg-gradient-to-r from-gray-600 to-red-500 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-black text-transparent mb-4" data-astro-cid-ic6owlb4>
NUESTRAS FILIALES
</h2> <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto" data-astro-cid-ic6owlb4>
Descubre nuestro ecosistema empresarial diseñado para impulsar tu crecimiento en cada área de negocio
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-astro-cid-ic6owlb4> ${[
    {
      title: "LEONES CAPITAL",
      description: "Prestamos r\xE1pidos, responsables y con Asesor\xEDa",
      image: "/images/leones-capital.webp",
      page: "/filiales/capital",
      color: "from-blue-500 to-blue-700",
      icon: "\u{1F4B0}"
    },
    {
      title: "LEONES SEGUROS",
      description: "Seguros accesibles para ti y tu emprendimiento",
      image: "/images/leones-capital.webp",
      page: "/filiales/seguros",
      color: "from-green-500 to-green-700",
      icon: "\u{1F6E1}\uFE0F"
    },
    {
      title: "LEONES FINANZAS",
      description: "Contabilidad, control de gastos y educaci\xF3n financiera",
      image: "/images/leones-capital.webp",
      page: "/filiales/finanzas",
      color: "from-purple-500 to-purple-700",
      icon: "\u{1F4CA}"
    },
    {
      title: "LEONES MARKETING",
      description: "Estrategias de marketing digital para potenciar tu marca",
      image: "/images/leones-capital.webp",
      page: "/filiales/marketing",
      color: "from-orange-500 to-orange-700",
      icon: "\u{1F4C8}"
    },
    {
      title: "LEONES TALENTO",
      description: "Marca, redes sociales y estrategia digital para crecer",
      image: "/images/leones-capital.webp",
      page: "/filiales/talento",
      color: "from-pink-500 to-pink-700",
      icon: "\u{1F465}"
    },
    {
      title: "LEONES IMPACTO",
      description: "Responsabilidad social y proyectos que transforman",
      image: "/images/leones-capital.webp",
      page: "/filiales/impacto",
      color: "from-teal-500 to-teal-700",
      icon: "\u{1F30D}"
    }
  ].map((card, index) => renderTemplate`<div class="w-full max-w-sm group" data-astro-cid-ic6owlb4> <a${addAttribute(card.page, "href")} class="block" data-astro-cid-ic6owlb4> <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2" data-astro-cid-ic6owlb4> <div class="relative h-48 overflow-hidden" data-astro-cid-ic6owlb4> <img${addAttribute(card.image || "/placeholder.svg?height=200&width=400", "src")}${addAttribute(card.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-astro-cid-ic6owlb4> <div${addAttribute(`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`, "class")} data-astro-cid-ic6owlb4></div> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-ic6owlb4> <div class="text-center" data-astro-cid-ic6owlb4> <div class="text-4xl mb-2" data-astro-cid-ic6owlb4>${card.icon}</div> <h3 class="text-white text-xl font-bold px-4" data-astro-cid-ic6owlb4>${card.title}</h3> </div> </div> </div> <div class="p-6" data-astro-cid-ic6owlb4> <p class="text-gray-600 text-sm leading-relaxed mb-4" data-astro-cid-ic6owlb4>${card.description}</p> <div class="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors" data-astro-cid-ic6owlb4> <span data-astro-cid-ic6owlb4>Conocer más</span> <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ic6owlb4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ic6owlb4></path> </svg> </div> </div> </div> </a> </div>`)} </div> </div> </section> `;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Filials.astro", void 0);

const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-20 bg-white"> <div class="container mx-auto px-4 max-w-7xl"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <!-- Left Side - Promotional Card --> <div class="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"> <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div> <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div> <div class="relative z-10"> <div class="mb-6"> <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-3xl md:text-4xl font-bold mb-6">
¡Impulsa tus ideas con nosotros!
</h3> <p class="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
Únete a nuestro plan estratégico y transforma tu visión en realidad. 
            Con Grupo Leones, cada idea tiene el potencial de convertirse en un éxito extraordinario.
</p> <div class="space-y-4 mb-8"> <div class="flex items-center gap-3"> <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-white/90">Asesoría personalizada 24/7</span> </div> <div class="flex items-center gap-3"> <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-white/90">Acceso a todas nuestras filiales</span> </div> <div class="flex items-center gap-3"> <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-white/90">Estrategias probadas de crecimiento</span> </div> </div> <p class="text-white/80 text-lg font-medium">
¿Listo para dar el siguiente paso?
<br class="hidden md:block"> <span class="text-white font-bold">¡Contáctanos ahora!</span> </p> </div> </div> <!-- Right Side - Contact Form --> <div class="bg-gray-50 rounded-3xl p-8 md:p-12"> <div class="text-center mb-8"> <h3 class="text-3xl font-bold text-gray-900 mb-4">Envíanos tu consulta</h3> <p class="text-gray-600">Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas</p> </div> <form id="contactForm" class="space-y-6"> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label> <input type="text" id="nombre" name="nombre" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-black" placeholder="Tu nombre"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-black" placeholder="tu@email.com"> </div> </div> <div> <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono (opcional)</label> <input type="tel" id="telefono" name="telefono" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-black" placeholder="+1 809 999 0000"> </div> <div> <label for="asunto" class="block text-sm font-medium text-gray-700 mb-2">Asunto</label> <select id="asunto" name="asunto" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-black"> <option value="">Selecciona un tema</option> <option value="Consulta General">Consulta General</option> <option value="Leones Capital">Leones Capital</option> <option value="Leones Seguros">Leones Seguros</option> <option value="Leones Finanzas">Leones Finanzas</option> <option value="Leones Marketing">Leones Marketing</option> <option value="Leones Talento">Leones Talento</option> <option value="Leones Impacto">Leones Impacto</option> </select> </div> <div> <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label> <textarea id="mensaje" name="mensaje" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-black" placeholder="Cuéntanos cómo podemos ayudarte..."></textarea> </div> <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"> <span class="flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg>
Enviar mensaje
</span> </button> </form> <!-- Success Message --> <div id="successMessage" class="hidden mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"> <div class="flex items-center gap-2 text-green-800"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="font-medium">¡Mensaje enviado exitosamente!</span> </div> <p class="text-green-700 text-sm mt-1">Te responderemos en un plazo máximo de 24 horas.</p> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/ContactSection.astro", void 0);

const $$SubscriptionModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="subscriptionModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 transition-opacity" data-astro-cid-wp666rel> <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden" data-astro-cid-wp666rel> <div class="relative p-6" data-astro-cid-wp666rel> <!-- Botón de cerrar --> <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" data-astro-cid-wp666rel> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wp666rel> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-wp666rel></path> </svg> </button> <!-- Contenido del modal --> <div id="modalContent" class="text-center mb-6" data-astro-cid-wp666rel> <h2 class="text-2xl font-bold text-gray-800 mb-2" data-astro-cid-wp666rel>¡Mantente informado!</h2> <p class="text-gray-600" data-astro-cid-wp666rel>Suscríbete para recibir las últimas novedades, promociones y actualizaciones de Grupo Leones.</p> </div> <!-- Formulario de suscripción --> <form id="subscriptionForm" class="space-y-4" data-astro-cid-wp666rel> <div data-astro-cid-wp666rel> <label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-wp666rel>Correo electrónico</label> <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" data-astro-cid-wp666rel> </div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium" data-astro-cid-wp666rel>
Suscribirme
</button> <p class="text-xs text-gray-500 text-center" data-astro-cid-wp666rel>
Al suscribirte, aceptas recibir correos electrónicos de Grupo Leones. Puedes darte de baja en cualquier momento.
</p> </form> <!-- Mensaje de éxito --> <div id="successMessage" class="hidden text-center py-8" data-astro-cid-wp666rel> <div class="flex justify-center mb-4" data-astro-cid-wp666rel> <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center" data-astro-cid-wp666rel> <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wp666rel> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-wp666rel></path> </svg> </div> </div> <h3 class="text-xl font-bold text-gray-800 mb-2" data-astro-cid-wp666rel>¡Suscripción exitosa!</h3> <p class="text-gray-600" data-astro-cid-wp666rel>Gracias por suscribirte. Pronto recibirás nuestras novedades.</p> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/ui/SubscriptionModal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/ui/SubscriptionModal.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Grupo Leones | Tu aliado estrat\xE9gico para emprender y escalar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SubscriptionModal", $$SubscriptionModal, {})} ${renderComponent($$result2, "Hero", $$Hero, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, {})} ` })} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Filials", $$Filials, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
