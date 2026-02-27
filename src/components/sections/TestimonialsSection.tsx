import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Arthur Aguiar",
    role: "Ator e Pai",
    videoThumb: "/Arthur_Aguiar.jpeg",
    quote: "Eu não acreditava que seria possível dormir a noite toda novamente, até conhecer esse método.",
    videoUrl: "https://www.youtube-nocookie.com/embed/OU23UnQOAIw",
    gradient: "from-primary-lighter to-primary-light"
  },
  {
    name: "Yudi Tamashiro",
    role: "Apresentador e Pai",
    videoThumb: "/Yudi_Tamashiro.jpeg",
    quote: "A rotina mudou completamente aqui em casa. É impressionante como funciona rápido.",
    videoUrl: "https://www.youtube-nocookie.com/embed/eC_iJfZhVik",
    gradient: "from-primary-light to-primary"
  },
  {
    name: "Lucy Ramos",
    role: "Atriz e Mãe",
    videoThumb: "/Lucy_Ramos.jpeg",
    quote: "O melhor investimento que fizemos. Noites tranquilas para o bebê e para nós.",
    videoUrl: "https://www.youtube-nocookie.com/embed/RTJiI2SP9s4",
    gradient: "from-primary to-primary-light"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedVideo]);

  return (
    <>
      <section id="depoimentos" className="py-16 md:py-24 px-6 bg-white">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Famílias que você já conhece confiaram no método
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Veja o que influenciadoras e figuras públicas estão dizendo sobre o Método Bebê Noites Tranquilas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => setSelectedVideo(testimonial.videoUrl)}
              >
                {/* Video Preview */}
                <div className="relative aspect-[9/16] bg-gray-100 overflow-hidden">
                  <img 
                    src={testimonial.videoThumb} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  {/* Info overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white pointer-events-none">
                    <h3 className="font-bold text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-lighter font-medium mb-2">
                      {testimonial.role}
                    </p>
                    <p className="text-sm italic line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Carousel dots indicator - visible only on mobile */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Video Modal - MOVED OUTSIDE SCROLL-REVEAL CONTEXT */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 pointer-events-auto"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="fixed top-4 right-4 z-[110] w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform pointer-events-auto"
            style={{ touchAction: 'manipulation' }}
            aria-label="Fechar vídeo"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Video Container - Vertical for Shorts */}
          <div 
            className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${selectedVideo}?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Depoimento em vídeo"
            />
          </div>
        </div>
      )}
    </>
  );
}
