import React from "react";

function Projects() {
  return (
    <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Nuestro trabajo
          </h2>
          <p className="mt-1 text-neutral-400">
            Trabajamos con tecnologías modernas y un enfoque centrado en el
            usuario, cuidando cada detalle del diseño, la estructura y el
            rendimiento. Desde la planificación hasta la entrega final, nuestro
            proceso es colaborativo, ágil y transparente. Nuestro objetivo es
            que cada sitio web no solo se vea bien, sino que también funcione de
            manera eficiente y ayude a crecer tu negocio online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
          <a
            className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-linear-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
            href="#"
          >
            <div className="mb-5">
              <div className="mt-5">
                <h3 className="mt-5 font-medium text-lg text-white">
                  ACEMA (Asociación de cohetería experimental y modelista de
                  Argentina){" "}
                </h3>
                <p className="mt-1 text-neutral-400">
                  Sitio web para la Asociación de Cohetería Experimental
                  Argentina. Un proyecto enfocado en la divulgación científica,
                  con una estructura clara, moderna y adaptable a dispositivos
                  móviles.
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden">
              <img
                src="/assets/acema.png"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                Ver más
              </span>
            </p>
          </a>

          <a
            className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-linear-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
            href="#"
          >
            <div className="mb-5">
              <div className="mt-5">
                <h3 className="mt-5 font-medium text-lg text-white">
                  Viajo Al Sur{" "}
                </h3>
                <p className="mt-1 text-neutral-400">
                  Plataforma para una agencia de viajes especializada en
                  destinos patagónicos. Integra secciones dinámicas, galería de
                  experiencias, y un formulario de contacto para reservas
                  personalizadas.
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden">
              <img
                src="/assets/viajo-al-sur.png"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                Ver más
              </span>
            </p>
          </a>

          <a
            className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-linear-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
            href="#"
          >
            <div className="mb-5">
              <div className="mt-5">
                <h3 className="mt-5 font-medium text-lg text-white">
                  Hocsman Abogados{" "}
                </h3>
                <p className="mt-1 text-neutral-400">
                  {" "}
                  Página institucional para un estudio jurídico. Diseño sobrio y
                  profesional, con secciones informativas, presentación del
                  equipo y opción de contacto directo.
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden">
              <img
                src="/assets/viajo-al-sur.png"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                Ver más
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
