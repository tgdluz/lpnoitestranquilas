import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const credentials = [
  "Tornou-se especialista após viver noites exaustivas com o primeiro filho.",
  "Criou o método depois de estudar profundamente e aplicar com o Murilo, que passou a dormir a noite inteira aos 8 meses.",
  "Com a segunda filha, Malu, o método funcionou desde os 3 meses.",
  "Entrega um processo testado, prático e aprovado por centenas de mães."
];

export function BioSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="rafaela" className="py-16 md:py-24 px-6 bg-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Quem é a Rafaela?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#37716F] font-semibold leading-relaxed">
                Especialista em Sono Infantil e mãe do Murilo e da Malu.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#9DB7B7]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#37716F]" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#9DB7B7]/20 to-[#9DB7B7]/30 rounded-2xl p-4 md:p-6 lg:p-8 border border-[#9DB7B7]">
              <p className="text-gray-700 text-center text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Transforma vidas e, com isso...
              </p>
              <p className="text-[#37716F] text-center text-lg sm:text-xl md:text-2xl font-bold mt-1 md:mt-2">
                Centenas de bebês estão dormindo MUITO melhor.
              </p>
            </div>

            <div className="pt-2 md:pt-4">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 md:gap-3 w-full md:w-auto bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:opacity-90 text-white text-base md:text-lg font-bold py-4 px-6 md:py-6 md:px-8 rounded-xl shadow-xl shadow-[#37716F]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-center">Quero transformar minhas noites também</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-first md:order-last">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#9DB7B7] to-[#72C0BE] rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[#9DB7B7]/20 to-[#9DB7B7]/30 rounded-3xl p-8">
                <img 
                  src="/img_rafaela_2.png"
                  alt="Rafaela Amaral"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
