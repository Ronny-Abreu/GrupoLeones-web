import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ce6KjpCM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ohuO1twR.mjs';
import { $ as $$Header } from '../chunks/Header_BfzWgF0o.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$FormEmail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Grupo Leones | Tu aliado estrat\xE9gico para emprender y escalar" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<div class="min-h-screen bg-gray-50 p-4 text-black"> <div class="mx-auto max-w-2xl"> <div class="mb-8 text-center"> <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"> <!-- Mail Icon --> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> </div> <h1 class="text-3xl font-bold text-gray-900">Panel de Env\xEDo de Correos | Grupo Leones</h1> <p class="mt-2 text-gray-600">Env\xEDar correos electr\xF3nicos a los usuarios de forma r\xE1pida y sencilla</p> </div> <div class="rounded-lg border bg-white p-6 shadow-lg"> <div class="mb-6"> <h2 class="flex items-center gap-2 text-xl font-semibold"> <!-- Send Icon --> <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path> </svg>
Nuevo Correo Electr\xF3nico
</h2> <p class="text-sm text-gray-500">Completa todos los campos para enviar un correo electr\xF3nico</p> </div> <form id="emailForm" class="space-y-6"> <div class="space-y-2"> <label for="email" class="text-sm font-medium">Correo Electr\xF3nico del Destinatario</label> <input id="email" type="email" placeholder="usuario@ejemplo.com" class="w-full rounded border p-2"> <div id="errorEmail" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorEmailText"></span> </div> </div> <div class="space-y-2"> <label for="titulo" class="text-sm font-medium">T\xEDtulo del Correo</label> <input id="titulo" type="text" placeholder="Asunto del mensaje..." class="w-full rounded border p-2"> <div id="errorTitulo" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorTituloText"></span> </div> </div> <div class="space-y-2"> <label for="cuerpo" class="text-sm font-medium">Cuerpo del Mensaje</label> <textarea id="cuerpo" rows="6" placeholder="Escribe aqu\xED el contenido de tu mensaje..." class="w-full rounded border p-2"></textarea> <div id="errorCuerpo" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorCuerpoText"></span> </div> <p class="text-xs text-gray-500">Caracteres: <span id="charCount">0</span></p> </div> <button type="submit" class="flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50" id="submitBtn"> <!-- Send Icon --> <svg class="mr-2 w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path> </svg> <span>Enviar Correo</span> </button> </form> <div id="successAlert" class="mt-6 hidden rounded border border-green-200 bg-green-50 p-4"> <div class="flex items-center gap-2 text-green-800"> <!-- CheckCircle Icon --> <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path> </svg>
\xA1Correo enviado exitosamente! El usuario recibir\xE1 tu mensaje pronto.
</div> </div> </div> <div class="mt-8 text-center text-sm text-gray-500"> <p>Los correos se env\xEDan de forma segura y encriptada</p> </div> </div> </div> <script>
  const emailInput = document.getElementById('email');
  const tituloInput = document.getElementById('titulo');
  const cuerpoInput = document.getElementById('cuerpo');
  const form = document.getElementById('emailForm');
  const submitBtn = document.getElementById('submitBtn');
  const successAlert = document.getElementById('successAlert');

  const errorEmail = document.getElementById('errorEmail');
  const errorEmailText = document.getElementById('errorEmailText');
  const errorTitulo = document.getElementById('errorTitulo');
  const errorTituloText = document.getElementById('errorTituloText');
  const errorCuerpo = document.getElementById('errorCuerpo');
  const errorCuerpoText = document.getElementById('errorCuerpoText');
  const charCount = document.getElementById('charCount');

  const validateEmail = (email) => /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/.test(email);

  cuerpoInput.addEventListener('input', () => {
    charCount.textContent = cuerpoInput.value.length;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    errorEmail.classList.add('hidden');
    errorTitulo.classList.add('hidden');
    errorCuerpo.classList.add('hidden');
    successAlert.classList.add('hidden');

    let valid = true;

    if (!emailInput.value.trim()) {
      errorEmailText.textContent = 'El email es obligatorio';
      errorEmail.classList.remove('hidden');
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      errorEmailText.textContent = 'Por favor, introduce un email v\xE1lido';
      errorEmail.classList.remove('hidden');
      valid = false;
    }

    if (!tituloInput.value.trim()) {
      errorTituloText.textContent = 'El t\xEDtulo es obligatorio';
      errorTitulo.classList.remove('hidden');
      valid = false;
    } else if (tituloInput.value.trim().length < 3) {
      errorTituloText.textContent = 'El t\xEDtulo debe tener al menos 3 caracteres';
      errorTitulo.classList.remove('hidden');
      valid = false;
    }

    if (!cuerpoInput.value.trim()) {
      errorCuerpoText.textContent = 'El cuerpo del mensaje es obligatorio';
      errorCuerpo.classList.remove('hidden');
      valid = false;
    } else if (cuerpoInput.value.trim().length < 10) {
      errorCuerpoText.textContent = 'El cuerpo debe tener al menos 10 caracteres';
      errorCuerpo.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Enviando...';

    await new Promise((r) => setTimeout(r, 2000));

    emailInput.value = '';
    tituloInput.value = '';
    cuerpoInput.value = '';
    charCount.textContent = '0';

    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = 'Enviar Correo';

    successAlert.classList.remove('hidden');
  });
<\/script> `], [" ", " ", `<div class="min-h-screen bg-gray-50 p-4 text-black"> <div class="mx-auto max-w-2xl"> <div class="mb-8 text-center"> <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"> <!-- Mail Icon --> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> </div> <h1 class="text-3xl font-bold text-gray-900">Panel de Env\xEDo de Correos | Grupo Leones</h1> <p class="mt-2 text-gray-600">Env\xEDar correos electr\xF3nicos a los usuarios de forma r\xE1pida y sencilla</p> </div> <div class="rounded-lg border bg-white p-6 shadow-lg"> <div class="mb-6"> <h2 class="flex items-center gap-2 text-xl font-semibold"> <!-- Send Icon --> <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path> </svg>
Nuevo Correo Electr\xF3nico
</h2> <p class="text-sm text-gray-500">Completa todos los campos para enviar un correo electr\xF3nico</p> </div> <form id="emailForm" class="space-y-6"> <div class="space-y-2"> <label for="email" class="text-sm font-medium">Correo Electr\xF3nico del Destinatario</label> <input id="email" type="email" placeholder="usuario@ejemplo.com" class="w-full rounded border p-2"> <div id="errorEmail" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorEmailText"></span> </div> </div> <div class="space-y-2"> <label for="titulo" class="text-sm font-medium">T\xEDtulo del Correo</label> <input id="titulo" type="text" placeholder="Asunto del mensaje..." class="w-full rounded border p-2"> <div id="errorTitulo" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorTituloText"></span> </div> </div> <div class="space-y-2"> <label for="cuerpo" class="text-sm font-medium">Cuerpo del Mensaje</label> <textarea id="cuerpo" rows="6" placeholder="Escribe aqu\xED el contenido de tu mensaje..." class="w-full rounded border p-2"></textarea> <div id="errorCuerpo" class="hidden items-center gap-1 text-sm text-red-600"> <!-- Alert Icon --> <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.05L13.105 4.05c-.525-.91-1.685-.91-2.21 0L3.977 16.95C3.424 17.86 4.028 19 5.082 19z"></path> </svg> <span id="errorCuerpoText"></span> </div> <p class="text-xs text-gray-500">Caracteres: <span id="charCount">0</span></p> </div> <button type="submit" class="flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50" id="submitBtn"> <!-- Send Icon --> <svg class="mr-2 w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path> </svg> <span>Enviar Correo</span> </button> </form> <div id="successAlert" class="mt-6 hidden rounded border border-green-200 bg-green-50 p-4"> <div class="flex items-center gap-2 text-green-800"> <!-- CheckCircle Icon --> <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path> </svg>
\xA1Correo enviado exitosamente! El usuario recibir\xE1 tu mensaje pronto.
</div> </div> </div> <div class="mt-8 text-center text-sm text-gray-500"> <p>Los correos se env\xEDan de forma segura y encriptada</p> </div> </div> </div> <script>
  const emailInput = document.getElementById('email');
  const tituloInput = document.getElementById('titulo');
  const cuerpoInput = document.getElementById('cuerpo');
  const form = document.getElementById('emailForm');
  const submitBtn = document.getElementById('submitBtn');
  const successAlert = document.getElementById('successAlert');

  const errorEmail = document.getElementById('errorEmail');
  const errorEmailText = document.getElementById('errorEmailText');
  const errorTitulo = document.getElementById('errorTitulo');
  const errorTituloText = document.getElementById('errorTituloText');
  const errorCuerpo = document.getElementById('errorCuerpo');
  const errorCuerpoText = document.getElementById('errorCuerpoText');
  const charCount = document.getElementById('charCount');

  const validateEmail = (email) => /^[^\\\\\\\\s@]+@[^\\\\\\\\s@]+\\\\\\\\.[^\\\\\\\\s@]+$/.test(email);

  cuerpoInput.addEventListener('input', () => {
    charCount.textContent = cuerpoInput.value.length;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    errorEmail.classList.add('hidden');
    errorTitulo.classList.add('hidden');
    errorCuerpo.classList.add('hidden');
    successAlert.classList.add('hidden');

    let valid = true;

    if (!emailInput.value.trim()) {
      errorEmailText.textContent = 'El email es obligatorio';
      errorEmail.classList.remove('hidden');
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      errorEmailText.textContent = 'Por favor, introduce un email v\xE1lido';
      errorEmail.classList.remove('hidden');
      valid = false;
    }

    if (!tituloInput.value.trim()) {
      errorTituloText.textContent = 'El t\xEDtulo es obligatorio';
      errorTitulo.classList.remove('hidden');
      valid = false;
    } else if (tituloInput.value.trim().length < 3) {
      errorTituloText.textContent = 'El t\xEDtulo debe tener al menos 3 caracteres';
      errorTitulo.classList.remove('hidden');
      valid = false;
    }

    if (!cuerpoInput.value.trim()) {
      errorCuerpoText.textContent = 'El cuerpo del mensaje es obligatorio';
      errorCuerpo.classList.remove('hidden');
      valid = false;
    } else if (cuerpoInput.value.trim().length < 10) {
      errorCuerpoText.textContent = 'El cuerpo debe tener al menos 10 caracteres';
      errorCuerpo.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Enviando...';

    await new Promise((r) => setTimeout(r, 2000));

    emailInput.value = '';
    tituloInput.value = '';
    cuerpoInput.value = '';
    charCount.textContent = '0';

    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = 'Enviar Correo';

    successAlert.classList.remove('hidden');
  });
<\/script> `])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead()) })}`;
}, "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/formEmail.astro", void 0);

const $$file = "C:/Users/ronny/OneDrive/Documents/Jendry/grupoLeones-web/src/pages/formEmail.astro";
const $$url = "/formEmail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
