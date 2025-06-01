import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ohuO1twR.mjs';
import { $ as $$Header } from '../chunks/Header_BfzWgF0o.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada | Grupo Leones", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full bg-black text-white flex flex-col justify-center items-center gap-60" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Header", $$Header, { "showHomeAcess": true, "data-astro-cid-zetdm5md": true })} <div class="flex flex-col items-center text-center" data-astro-cid-zetdm5md> <h1 class="text-[80px] select-none font-bold" data-astro-cid-zetdm5md>404</h1> <span id="error" data-astro-cid-zetdm5md>La página a la que intentas acceder no fué encontrada...</span> <a href="/" class="py-1 px-2 bg-amber-200 hover:bg-amber-100 text-black rounded-2xl w-[15em] mt-6" data-astro-cid-zetdm5md>Volver al inicio</a> </div> </main> ` })} `;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/404.astro", void 0);

const $$file = "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
