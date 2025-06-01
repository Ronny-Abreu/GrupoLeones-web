import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DPe1hLt9.mjs';
import { manifest } from './manifest_CI6oleyY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/dashboard.astro.mjs');
const _page4 = () => import('./pages/filiales/academy.astro.mjs');
const _page5 = () => import('./pages/filiales/capital.astro.mjs');
const _page6 = () => import('./pages/filiales/finanzas.astro.mjs');
const _page7 = () => import('./pages/filiales/impacto.astro.mjs');
const _page8 = () => import('./pages/filiales/marketing.astro.mjs');
const _page9 = () => import('./pages/filiales/seguros.astro.mjs');
const _page10 = () => import('./pages/filiales/talento.astro.mjs');
const _page11 = () => import('./pages/formemail.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/nosotros.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/dashboard.astro", _page3],
    ["src/pages/filiales/academy.astro", _page4],
    ["src/pages/filiales/capital.astro", _page5],
    ["src/pages/filiales/finanzas.astro", _page6],
    ["src/pages/filiales/impacto.astro", _page7],
    ["src/pages/filiales/marketing.astro", _page8],
    ["src/pages/filiales/seguros.astro", _page9],
    ["src/pages/filiales/talento.astro", _page10],
    ["src/pages/formEmail.astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/nosotros.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b626f822-a8a5-49c0-9f32-c0a5ade99b1f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
