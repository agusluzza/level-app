import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="px-60">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-1 text-neutral-400">
            This profound insight guides our comprehensive strategy — from
            meticulous research and strategic planning to the seamless execution
            of brand development and website or product deployment.
          </p>
        </div>
      </div>

      <Accordion variant="splitted" className="text-black font-medium">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion 1"
          className="bg-[#ff0] rounded-2xl py-2"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" className="bg-[#ff0] rounded-2xl py-2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3" className="bg-[#ff0] rounded-2xl py-2">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
