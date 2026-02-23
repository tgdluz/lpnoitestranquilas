import { Card, CardContent } from "@/components/ui/card";
import { Baby, BedDouble, Moon, Clock, Sparkles, Pizza, Hourglass } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const targetAudience = [
  {
    icon: Baby,
    title: "Bebês que só dormem mamando",
    color: "text-[#37716F] bg-[#9DB7B7]/30"
  },
  {
    icon: BedDouble,
    title: "Bebês que fazem cama compartilhada",
    color: "text-[#72C0BE] bg-[#9DB7B7]/20"
  },
  {
    icon: Moon,
    title: "Bebês que só dormem com o cuidador",
    color: "text-[#37716F] bg-[#9DB7B7]/30"
  },
  {
    icon: Clock,
    title: "Bebês que acordam na madrugada",
    color: "text-[#72C0BE] bg-[#9DB7B7]/20"
  },
  {
    icon: Sparkles,
    title: "Mulheres que estão na gestação",
    color: "text-[#37716F] bg-[#9DB7B7]/30"
  },
  {
    icon: Pizza,
    title: "Pais de RN querendo rotina",
    color: "text-[#72C0BE] bg-[#9DB7B7]/20"
  },
  {
    icon: Baby,
    title: "Bebês que precisam de autonomia",
    color: "text-[#37716F] bg-[#9DB7B7]/30"
  },
  {
    icon: Moon,
    title: "Bebês que só fazem sonecas no colo",
    color: "text-[#72C0BE] bg-[#9DB7B7]/20"
  },
  {
    icon: Hourglass,
    title: "Bebês que fazem sonecas curtas",
    color: "text-[#37716F] bg-[#9DB7B7]/30"
  }
];

export function ForWhoSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-6xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-[#37716F] uppercase tracking-wider mb-2 md:mb-3">
            PARA QUEM É?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Para quem serve a consultoria
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {targetAudience.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-transparent shadow-md hover:shadow-lg hover:border-[#9DB7B7] hover:bg-[#9DB7B7]/10 transition-all bg-gray-50/50"
              >
                <CardContent className="flex flex-col items-center text-center p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
