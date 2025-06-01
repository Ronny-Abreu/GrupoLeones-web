import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, b as renderScript } from './astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import { a as $$Favicon } from './Layout_ohuO1twR.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$BottomArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BottomArrow;
  const { size = "64" } = Astro2.props;
  const sizeIcon = size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(sizeIcon, "width")}${addAttribute(sizeIcon, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"> <path d="m6 9 6 6 6-6"></path> </svg>`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/icons/BottomArrow.astro", void 0);

const $$Astro$1 = createAstro();
const $$OpenMenuNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OpenMenuNavbar;
  const { color = "black" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-[180px] flex flex-col justify-around gap-1 text-${color}/85 text-[18px] font-normal rounded-4xl`, "class")}> <div class="flex flex-col"> <a href="/filiales/capital"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Capital</a> <a href="/filiales/seguros"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Seguros</a> <a href="/filiales/finanzas"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Finanzas</a> <a href="/filiales/academy"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Academy</a> </div> <div class="flex flex-col"> <a href="/filiales/marketing"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Marketing</a> <a href="/filiales/talento"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Talento</a> <a href="/filiales/impacto"${addAttribute(`hover:text-blue-100 md:hover:text-amber-800 md:font-medium`, "class")}>Leones Impacto</a> </div> </div>`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/ui/OpenMenuNavbar.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { showHomeAcess = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="w-full relative animate-fade-in-down"> <nav class="container mx-auto px-4 py-6 flex items-center justify-between"> <!-- Logo --> <div class="flex items-center gap-1 text-white font-bold text-xl group animate-fade-in-left"> <a href="/" class="transition-transform duration-300 group-hover:translate-x-2"> ${renderComponent($$result, "Favicon", $$Favicon, { "size": "64" })} </a> <span class="text-[20px] md:text-[26px] transition-transform duration-300 group-hover:translate-x-4 hover:cursor-context-menu">GRUPO LEONES</span> </div> <!-- Desktop Navigation --> <div class="hidden md:flex space-x-8 items-center animate-fade-in-right ml-auto pr-4"> <div class="relative"> <button id="filialesDropdown" class="flex items-center text-white text-[18px] transition-colors">
Filiales
${renderComponent($$result, "BottomArrow", $$BottomArrow, { "size": "26" })} </button> <div id="filialesMenu" class="absolute right-0 top-full mt-2 hidden bg-[#e5c2c2] p-6 text-black font-bold rounded-2xl shadow-lg z-50 w-[520px]"> <div class="grid grid-cols-2 gap-8"> <div class="flex flex-col gap-4"> <a href="/filiales/capital" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Capital</a> <a href="/filiales/seguros" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Seguros</a> <a href="/filiales/finanzas" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Finanzas</a> <a href="/filiales/marketing" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Marketing</a> </div> <div class="flex flex-col gap-4"> <a href="/filiales/talento" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Talento</a> <a href="/filiales/impacto" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Impacto</a> <a href="/filiales/academy" class="hover:text-red-600 transition-colors whitespace-nowrap text-[16px]">Leones Academy</a> </div> </div> </div> </div> ${showHomeAcess && renderTemplate`<a href="/" class="text-white text-[18px] hover:border-b transition-colors">
Inicio
</a>`} <a href="/nosotros" class="text-white text-[18px] hover:border-b transition-colors">Nosotros</a> <a href="/contacto" class="text-white text-[18px] hover:border-b transition-colors">Contacto</a> </div> <!-- Mobile Menu Button --> <button id="hamburguerBtn" class="md:hidden hover:cursor-pointer flex flex-col gap-2.5 w-10 h-10 justify-center items-center z-[60] animate-fade-in-right"> <div class="bg-white h-[2px] w-full rounded transition-all origin-left"></div> <div class="bg-white h-[2px] w-full rounded transition-all"></div> <div class="bg-white h-[2px] w-full rounded transition-all origin-left"></div> </button> </nav> <!-- Mobile Menu --> <div id="mobileMenu" class="md:hidden hidden flex-col gap-6 fixed top-0 left-0 w-[60%] min-h-[100vh] bg-[#161616] text-white font-bold px-6 py-8 z-[50]"> <div class="flex items-center gap-1 text-white font-bold text-xl border-b border-gray-600 pb-4 group"> <a href="/" class="transition-transform duration-300 group-hover:translate-x-2"> ${renderComponent($$result, "Favicon", $$Favicon, { "size": "64" })} </a> <span class="text-[26px] transition-transform duration-300 group-hover:translate-x-4">Grupo Leones</span> </div> <div class="flex flex-col gap-4 mt-5"> <details> <summary class="hover:cursor-pointer text-[#d7d7d6] text-[18px] font-medium">Filiales</summary> <div class="pl-4 mt-2"> ${renderComponent($$result, "OpenMenuNavbar", $$OpenMenuNavbar, { "color": "white" })} </div> </details> ${showHomeAcess && renderTemplate`<a href="/" class="text-[#d7d7d6] text-[18px] font-medium">
Inicio
</a>`} <a href="/nosotros" class="text-[#d7d7d6] text-[18px] font-medium">Nosotros</a> <a href="/contacto" class="text-[#d7d7d6] text-[18px] font-medium">Contacto</a> </div> </div> ${renderScript($$result, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/components/sections/Header.astro", void 0);

export { $$Header as $ };
