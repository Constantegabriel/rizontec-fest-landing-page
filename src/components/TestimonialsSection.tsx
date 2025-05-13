
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Desenvolvedora Full Stack",
      message: "O Rizontec Fest superou todas as minhas expectativas! O conteúdo foi extremamente relevante e pude aplicar o conhecimento imediatamente no meu projeto atual.",
      avatar: "MS"
    },
    {
      name: "Carlos Eduardo",
      role: "Gerente de Projetos de TI",
      message: "Evento incrível com palestrantes de alto nível. As discussões sobre tecnologias emergentes me ajudaram a definir a estratégia para os próximos meses.",
      avatar: "CE"
    },
    {
      name: "Juliana Mendes",
      role: "Analista de Sistemas",
      message: "Participar do Rizontec Fest foi um divisor de águas na minha carreira. A qualidade das palestras e as conexões que fiz foram extremamente valiosas.",
      avatar: "JM"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos <span className="text-gradient">participantes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o impacto do Rizontec Fest na vida de quem já participou
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 h-full flex flex-col card-hover bg-slate-800/50 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-gradient-to-br from-rizontec-purple to-rizontec-blue text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 italic">"{testimonial.message}"</p>
              </div>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rizontec-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
