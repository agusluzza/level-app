import React from "react";

function Contact() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Contactanos
          </h2>
          <p className="mt-1 text-neutral-400">
            Te ayudamos a llegar a tu objetivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                not-placeholder-shown:pt-6
                not-placeholder-shown:pb-2
                autofill:pt-6
                autofill:pb-2"
                    placeholder="Name"
                  />
                  <label
                    for="hs-tac-input-name"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1.5
                  peer-not-placeholder-shown:text-neutral-400"
                  >
                    Nombre
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                not-placeholder-shown:pt-6
                not-placeholder-shown:pb-2
                autofill:pt-6
                autofill:pb-2"
                    placeholder="Email"
                  />
                  <label
                    for="hs-tac-input-email"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1.5
                  peer-not-placeholder-shown:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-company"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                not-placeholder-shown:pt-6
                not-placeholder-shown:pb-2
                autofill:pt-6
                autofill:pb-2"
                    placeholder="Company"
                  />
                  <label
                    for="hs-tac-input-company"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1.5
                  peer-not-placeholder-shown:text-neutral-400"
                  >
                    Empresa
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                not-placeholder-shown:pt-6
                not-placeholder-shown:pb-2
                autofill:pt-6
                autofill:pb-2"
                    placeholder="Phone"
                  />
                  <label
                    for="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1.5
                  peer-not-placeholder-shown:text-neutral-400"
                  >
                    Telefono
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                not-placeholder-shown:pt-6
                not-placeholder-shown:pb-2
                autofill:pt-6
                autofill:pb-2"
                    placeholder="This is a textarea placeholder"
                    data-hs-textarea-auto-height
                  ></textarea>
                  <label
                    for="hs-tac-message"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1.5
                  peer-not-placeholder-shown:text-neutral-400"
                  >
                    Contanos sobre tu proyecto
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  Todos los campos son requeridos
                </p>

                <p className="mt-5">
                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                    href="#"
                  >
                    Enviar
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <div className="grow"></div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email us:</h4>

                <a
                  className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200"
                  href="#mailto:example@site.co"
                  target="_blank"
                >
                  hello@example.so
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Te estamos buscando</h4>
                <p className="mt-1 text-neutral-400">
                  We're thrilled to announce that we're expanding our team and
                  looking for talented individuals like you to join us.
                </p>
                <p className="mt-2">
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-hidden focus:underline"
                    href="#"
                  >
                    Job openings
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
