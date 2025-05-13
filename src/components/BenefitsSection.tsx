
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Conhecimento Prático",
      description: "Aprenda técnicas aplicáveis imediatamente nos seus projetos",
      icon: "📚"
    },
    {
      title: "Networking Estratégico",
      description: "Conecte-se com profissionais que podem impulsionar sua carreira",
      icon: "👥"
    },
    {
      title: "Tendências do Mercado",
      description: "Descubra as principais tendências tecnológicas atuais",
      icon: "📈"
    },
    {
      title: "Certificado Digital",
      description: "Receba um certificado oficial de participação no evento",
      icon: "🏆"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que participar do <span className="text-gradient">Rizontec Fest</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="btn-primary animate-pulse-glow group transform transition-all duration-300 hover:translate-y-[-4px]"
          >
            <a href="#inscricao" className="text-lg flex items-center gap-2">
              Quero garantir minha vaga
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
