import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyItWorksSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-4 bg-[#6FC1C1] text-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-4xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que este método funciona?
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Porque o sono é um comportamento que pode ser aprendido. E tem mais:
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="text-lg md:text-xl">
                  Seu bebê não dorme sozinho ainda, e isso{" "}
                  <strong>não é culpa sua</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="text-lg md:text-xl">
                  Método passo a passo,{" "}
                  <strong>comprovado e gentil</strong>, sem deixar o bebê chorando.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="text-lg md:text-xl">
                  Resultados visíveis já na{" "}
                  <strong>primeira semana</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            A maioria das mães tenta dicas aleatórias e acaba se frustrando. O Método Bebê Noites Tranquilas funciona porque parte de um ponto essencial: o sono é um comportamento que pode ser ensinado.
          </p>
        </div>
      </div>
    </section>
  );
}
