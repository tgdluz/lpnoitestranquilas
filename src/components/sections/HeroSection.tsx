import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_2.png" 
          alt="Bebê dormindo tranquilamente" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#37716F]/10 backdrop-blur-sm text-[#ffffff] rounded-full text-sm font-semibold border border-[#ffffff]/20 shadow-sm">
              <span>💚</span>
              <span>Centenas de mães ajudadas</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-lg">
                Seu bebê{" "}
                <span className="text-white block mt-2">luta para dormir?</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-4 max-w-xl">
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-tight drop-shadow-lg">
                Transforme as noites em 10-12 horas de sono contínuo
              </p>
              
              <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-lg">
                Sem choro, sem métodos agressivos. Método comprovado por centenas de mães que conquistaram mais descanso, rotina e tranquilidade.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#37716F] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-white font-medium drop-shadow-lg">Método gentil e estruturado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#37716F] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-white font-medium drop-shadow-lg">Resultados visíveis na 1ª semana</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#37716F] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-white font-medium drop-shadow-lg">Acompanhamento 24h via WhatsApp</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:shadow-2xl text-white text-base md:text-xl font-bold py-5 px-8 md:py-6 md:px-10 rounded-2xl shadow-xl shadow-[#37716F]/40 transition-all hover:scale-105 active:scale-95"
              >
                <span>Quero meu bebê dormindo melhor</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Right side - space for image to show through */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
