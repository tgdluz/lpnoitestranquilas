import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FinalCTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-3xl mx-auto text-center space-y-6 md:space-y-8 scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ainda tem dúvidas?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Seu bebê pode dormir melhor. Você pode viver melhor.
        </p>
        <a 
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#37716F] to-[#72C0BE] hover:opacity-90 text-white text-lg md:text-xl font-bold py-4 px-8 md:py-6 md:px-12 rounded-xl shadow-xl shadow-[#37716F]/30 transition-all hover:scale-105 active:scale-95"
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  );
}
