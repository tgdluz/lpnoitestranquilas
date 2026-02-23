import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-[#9DB7B7]/20">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#37716F] to-[#72C0BE] rounded-3xl transform rotate-3"></div>
              <img 
                src="/img_rafaela.png"
                alt="Bebê em floaty"
                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Seu bebê não dorme a noite inteira?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#37716F] font-semibold mb-3 md:mb-4 leading-relaxed">
                Você está exausta, sem tempo para você, irritada e se sentindo culpada por não conseguir dar conta?
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Eu sou <strong>Rafaela Amaral</strong>, especialista em sono infantil. Antes de me tornar especialista, vivi exatamente o que você está vivendo agora: noites em claro, frustração e a sensação de estar fazendo tudo errado.
              </p>
              <p>
                Foi dessa dor que nasceu o <strong>Método Bebê Noites Tranquilas</strong>, um passo a passo gentil e comprovado que já transformou o sono de centenas de famílias.
              </p>
              <p className="font-medium">
                Entre elas, nomes como Jhenny Santucci, Arthur Aguiar e Lucy Ramos.
              </p>
            </div>

            {/* Benefits badges */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="bg-[#9DB7B7]/20 border border-[#9DB7B7] rounded-lg p-3 md:p-4 text-center">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🎁</div>
                <p className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">Bônus para as primeiras 50 mães</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 text-center">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">💬</div>
                <p className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">Suporte 24h para dúvidas</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 md:pt-4">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 md:gap-3 w-full md:w-auto bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:opacity-90 text-white text-base md:text-lg font-bold py-4 px-6 md:py-6 md:px-8 rounded-xl shadow-xl shadow-[#37716F]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-center">Quero dormir tranquila ainda este ano</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
