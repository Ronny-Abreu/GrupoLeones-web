import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from '../../chunks/astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Academy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>academy</h1>`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/filiales/academy.astro", void 0);

const $$file = "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/filiales/academy.astro";
const $$url = "/filiales/academy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Academy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
