import { Infinity, Users, Heart, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const supportFeatures = [
  {
    icon: Infinity,
    title: "Atendimento contínuo",
    description: "Estamos aqui quando você precisar",
    color: "text-[#37716F] bg-[#9DB7B7]/20"
  },
  {
    icon: Users,
    title: "Orientação personalizada",
    description: "Para o SEU bebê e SUA rotina",
    color: "text-[#72C0BE] bg-[#9DB7B7]/30"
  },
  {
    icon: Heart,
    title: "Apoio emocional",
    description: "Acolhimento em momentos de exaustão",
    color: "text-[#37716F] bg-[#9DB7B7]/20"
  }
];

export function SupportSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-green-50 to-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#37716F] uppercase tracking-wider mb-2 md:mb-3">
                DIFERENCIAL EXCLUSIVO
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Suporte 24h para dúvidas
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Além do método completo, você terá acesso a um acompanhamento 24h via WhatsApp.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Um suporte que conhece você, o nome do seu bebê, a idade e o seu contexto. Você pode tirar dúvidas, ajustar rotinas, receber orientação prática e apoio emocional sempre que precisar.{" "}
              <strong>Inclusive nas madrugadas mais difíceis.</strong>
            </p>

            <div className="pt-1 md:pt-2">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 md:gap-3 w-full md:w-auto bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:opacity-90 text-white text-base md:text-lg font-bold py-4 px-6 md:py-6 md:px-8 rounded-xl shadow-xl shadow-[#37716F]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-center">Quero esse acompanhamento também</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-3 md:space-y-4">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-transparent rounded-xl shadow-md hover:shadow-lg hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all p-4 md:p-6 flex items-start gap-3 md:gap-4 group"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${feature.color} group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] flex items-center justify-center flex-shrink-0 transition-all`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-0.5 md:mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
