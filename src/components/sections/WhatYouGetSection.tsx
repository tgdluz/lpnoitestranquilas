import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const courseContent = [
  "Entendendo o sono do bebê",
  "Conhecendo o bebê e suas necessidades",
  "Influência do dia no sono noturno",
  "Tudo sobre sonecas",
  "Desmame (gentil e respeitoso)",
  "Tudo sobre sono noturno",
  "Associações e desassociações de sono",
  "Autonomia do sono",
  "Ciclos de sono e elementos essenciais",
  "Adaptando à individualidade da criança",
  "Impacto de atividades e alimentação",
  "Quantidade, duração e horários ideais",
  "Quando e como introduzir rotina",
  "Ritual de sono e estratégias",
  "Como ensinar o bebê a dormir sozinho",
  "Incentivar independência desde RN"
];

export function WhatYouGetSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="conteudo" className="py-16 md:py-24 px-6 bg-[#E1EBEB]">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            O que você vai ter acesso?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Um curso completo, do básico ao avançado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4 max-w-4xl mx-auto">
          {courseContent.map((item, index) => (
            <div key={index} className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-lighter/20 to-primary-lighter/30 rounded-2xl p-8 border border-primary-lighter">
            <p className="text-gray-700 text-lg">
              <strong className="text-primary">+ Muito mais conteúdo exclusivo</strong> <br className="hidden md:block" />
              para garantir que você tenha todas as ferramentas necessárias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
