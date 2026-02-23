import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Este curso serve para qualquer idade de bebê?",
    answer: "Sim. O método é indicado para bebês de 0 a 3 anos."
  },
  {
    question: "Posso aplicar se meu bebê tiver necessidades especiais?",
    answer: "Sim. O método é adaptável para diferentes perfis e necessidades, sempre respeitando o desenvolvimento e limites de cada bebê."
  },
  {
    question: "Quanto tempo leva para começar a ver resultados?",
    answer: "A maioria das famílias observa melhora a partir da primeira semana, desde que siga as orientações do método. O tempo exato depende da dificuldade atual do sono do bebê."
  },
  {
    question: "Preciso comprar materiais extras?",
    answer: "Não. Tudo o que você precisa será explicado e já faz parte da rotina comum do bebê."
  },
  {
    question: "E se eu não conseguir acompanhar todas as aulas?",
    answer: "Você contará com uma IA exclusiva para tirar dúvidas e apoiar sua implementação do método, mesmo que esteja assistindo aos poucos."
  },
  {
    question: "E se meu bebê chorar muito? Esse método usa choro controlado?",
    answer: "Não. O método não utiliza choro controlado, nem propõe deixar chorar. O foco é entender a causa do choro, fome, desconforto, ambiente inadequado, necessidade de acolhimento ou associação ao dormir, e ajustar a rotina com segurança para que o bebê não precise chorar para dormir."
  },
  {
    question: "Funciona se eu amamento em livre demanda?",
    answer: "Sim. O método se adapta à sua forma de maternar. Ele não exige desmame nem mudanças na alimentação. O objetivo é compreender os motivos dos despertares e organizar o sono com acolhimento."
  },
  {
    question: "Vou precisar tirar meu bebê do quarto?",
    answer: "Não. O método funciona para famílias que fazem cama compartilhada, quarto compartilhado ou que desejam que o bebê durma no próprio quarto. Você escolhe o que faz sentido para sua família."
  },
  {
    question: "Meu filho tem refluxo ou alergias como APLV. Mesmo assim funciona?",
    answer: "Sim. O método pode ser aplicado em bebês com refluxo fisiológico, doença do refluxo ou alergias como APLV, desde que a condição esteja avaliada e acompanhada por um profissional de saúde. Com o refluxo controlado, o bebê tende a dormir tão bem quanto um bebê sem refluxo."
  }
];

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container max-w-4xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o método
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#37716F] text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
