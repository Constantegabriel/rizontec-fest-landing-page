
import React from 'react';
import { Button } from '@/components/ui/button';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "E-book Exclusivo",
      description: "Um guia completo com resumos e dicas práticas sobre os temas abordados no evento.",
      icon: "📚"
    },
    {
      title: "Acesso à Comunidade VIP",
      description: "Participe do nosso grupo exclusivo com todos os palestrantes e participantes para networking contínuo.",
      icon: "👥"
    },
    {
      title: "Mentorias em Grupo",
      description: "Sessões de mentoria coletiva para tirar dúvidas e receber orientações personalizadas.",
      icon: "🧠"
    },
    {
      title: "Certificado Digital",
      description: "Documento oficial que comprova sua participação no evento e pode ser compartilhado em suas redes profissionais.",
      icon: "🏆"
    }
  ];

  return (
    <section id="bonus" className="py-20 bg-gradient-to-r from-slate-900 to-rizontec-dark text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-sm font-semibold bg-white/10 rounded-full text-white mb-4">
            EXCLUSIVO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você <span className="text-gradient">recebe</span> ao se inscrever
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Além de participar do evento, você terá acesso a estes bônus exclusivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{bonus.title}</h4>
              <p className="text-gray-300 text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Valor total dos bônus: <span className="line-through">R$ 997,00</span></h3>
          <p className="text-xl mb-6">
            <span className="text-rizontec-yellow font-bold">100% GRÁTIS</span> para quem se inscrever até hoje!
          </p>
          <Button size="lg" className="btn-primary animate-pulse-glow">
            <a href="#inscricao" className="text-lg px-8 py-2">Garantir minha vaga + bônus</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
