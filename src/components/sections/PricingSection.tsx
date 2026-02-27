import { Card, CardContent } from "@/components/ui/card";
import { Check, Lock, Shield, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const includes = [
  "Método completo passo a passo",
  "Acompanhamento 24h WhatsApp",
  "Bônus para as 50 primeiras mães",
  "Suporte incluso"
];

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-[#6FC1C1] text-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-4xl mx-auto scroll-reveal-scale ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Shield className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Seu risco é zero</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            Garantia incondicional de 7 dias.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Se você acessar o método e achar que não é para você, basta pedir o reembolso dentro do prazo. Simples assim.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative max-w-lg mx-auto">
          {/* Discount Badge */}
          <div className="absolute -top-4 right-4 md:-top-5 md:right-8 z-10 bg-amber-400 text-amber-950 font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-lg shadow-lg transform rotate-2 text-xs md:text-sm">
            30% DE DESCONTO
          </div>

          <Card className="bg-white text-slate-900 rounded-3xl border-4 border-[#9DB7B7]/30 shadow-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8 lg:p-12">
              {/* Price Section */}
              <div className="text-center mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-200">
                <p className="text-slate-400 text-base md:text-lg line-through mb-2">
                  De R$ 399,00
                </p>
                <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-2">
                  <span className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600">12x de</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#37716F] tracking-tight">
                    R$ 30,72
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-500 font-medium">ou R$ 297 em 1x ou no pix</p>
              </div>

              {/* Includes */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href="https://pay.kiwify.com.br/IQhcNDs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 md:gap-3 w-full bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:opacity-90 text-white text-lg md:text-xl font-bold py-4 px-6 md:py-6 md:px-8 rounded-xl shadow-xl shadow-[#37716F]/30 transition-all hover:scale-105 active:scale-95">
                Garanta sua vaga
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>

              {/* Secure Payment */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                <Lock className="w-4 h-4" />
                <span>Pagamento 100% seguro</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional guarantee text */}
        <div className="text-center mt-8 text-white/90">
          <p className="text-sm">
            * Investimento com garantia total. Transforme as noites da sua família com segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
