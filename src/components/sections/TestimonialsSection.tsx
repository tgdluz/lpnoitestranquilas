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
    videoUrl: "https://www.youtube.com/embed/OU23UnQOAIw",
    gradient: "from-primary-lighter to-primary-light"
  },
  {
    name: "Yudi Tamashiro",
    role: "Apresentador e Pai",
    videoThumb: "/Yudi_Tamashiro.jpeg",
    quote: "A rotina mudou completamente aqui em casa. É impressionante como funciona rápido.",
    videoUrl: "https://www.youtube.com/embed/eC_iJfZhVik",
    gradient: "from-primary-light to-primary"
  },
  {
    name: "Lucy Ramos",
    role: "Atriz e Mãe",
    videoThumb: "/Lucy_Ramos.jpeg",
    quote: "O melhor investimento que fizemos. Noites tranquilas para o bebê e para nós.",
    videoUrl: "https://www.youtube.com/embed/RTJiI2SP9s4",
    gradient: "from-primary to-primary-light"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Prevent body scroll when modal is open and scroll modal to top
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      // Scroll to top of page when modal opens
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
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

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
              <div 
                className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>

                {/* Video Container */}
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={`${selectedVideo}?autoplay=1&mute=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Depoimento em vídeo"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
