import React from "react";

function Hero() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
        <h1 className="font-semibold text-white text-5xl md:text-6xl">
          <span className="text-[#ff0] ">Level App:</span> Transformando ideas
        </h1>
        <div className="max-w-4xl">
          <p className="mt-5 text-neutral-400 text-lg">
            En LevelApp llevamos tus ideas al siguiente nivel. Somos una agencia
            de programación especializada en el desarrollo de páginas web
            modernas, rápidas y personalizadas, adaptadas a las necesidades de
            cada cliente. Ya sea que tengas un emprendimiento, un negocio
            consolidado o una marca personal, creamos soluciones digitales que
            combinan diseño atractivo y funcionalidad para que tu presencia
            online destaque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
