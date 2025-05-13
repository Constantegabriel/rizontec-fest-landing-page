
import React from 'react';
import { Button } from '@/components/ui/button';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Conhecimento Prático",
      description: "Aprenda técnicas que podem ser aplicadas imediatamente no seu trabalho ou projeto",
      icon: "📚"
    },
    {
      title: "Networking Estratégico",
      description: "Conecte-se com profissionais e empresas que podem impulsionar sua carreira",
      icon: "👥"
    },
    {
      title: "Tendências do Mercado",
      description: "Descubra as principais tendências tecnológicas e como se preparar para elas",
      icon: "📈"
    },
    {
      title: "Inspiração e Ideias",
      description: "Encontre novas ideias e inspiração para seus projetos e desafios profissionais",
      icon: "💡"
    },
    {
      title: "Certificado Digital",
      description: "Receba um certificado que comprova sua participação no evento",
      icon: "🏆"
    },
    {
      title: "Acesso a Conteúdo Exclusivo",
      description: "Conteúdos e recursos que só estarão disponíveis para os participantes do evento",
      icon: "🔐"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que participar do <span className="text-gradient">Rizontec Fest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma experiência completa que vai transformar sua visão sobre tecnologia e inovação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-slate-700/30 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="btn-primary animate-pulse-glow w-full sm:w-auto px-8 py-3">
            <a href="#inscricao" className="text-lg">Quero garantir esses benefícios</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
