
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "E-book Exclusivo",
      description: "Guia completo com dicas práticas sobre os temas do evento",
      icon: "📚"
    },
    {
      title: "Comunidade VIP",
      description: "Acesso ao grupo exclusivo para networking contínuo",
      icon: "👥"
    },
    {
      title: "Mentorias em Grupo",
      description: "Sessões de mentoria para tirar dúvidas específicas",
      icon: "🧠"
    },
    {
      title: "Certificado Digital",
      description: "Documento oficial que comprova sua participação no evento",
      icon: "🏆"
    }
  ];

  return (
    <section id="bonus" className="py-16 bg-gradient-to-r from-slate-900 to-rizontec-dark text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 text-sm font-semibold bg-white/10 rounded-full text-white mb-4">
            EXCLUSIVO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você <span className="text-gradient">recebe</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/5"
            >
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{bonus.title}</h4>
              <p className="text-gray-300 text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mt-12 max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Valor total dos bônus: <span className="line-through">R$ 997,00</span></h3>
          <p className="text-xl mb-6">
            <span className="text-rizontec-yellow font-bold">100% GRÁTIS</span> para quem se inscrever!
          </p>
          <Button size="lg" className="btn-primary animate-pulse-glow group transform transition-all duration-300 hover:translate-y-[-4px]">
            <a href="#inscricao" className="text-lg flex items-center gap-2">
              Garantir minha vaga + bônus
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
