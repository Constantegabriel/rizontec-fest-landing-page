
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Palestras Exclusivas",
      description: "Conteúdo de alto nível com profissionais reconhecidos",
      icon: "🎯"
    },
    {
      title: "Networking",
      description: "Conecte-se com profissionais e empresas do setor",
      icon: "🔗"
    },
    {
      title: "Conteúdo Prático",
      description: "Aplicações que você pode implementar imediatamente",
      icon: "⚙️"
    },
    {
      title: "Certificado",
      description: "Comprove sua participação no evento",
      icon: "🏆"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o <span className="text-gradient">Rizontec Fest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um evento online ao vivo para impulsionar seu conhecimento em tecnologia e inovação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transform transition-all duration-500 hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-white">Para quem é este evento?</h3>
            <ul className="space-y-2 text-gray-300">
              {['Desenvolvedores', 'Gestores de TI', 'Estudantes', 'Empreendedores'].map((audience, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-rizontec-green mr-2">✓</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transform transition-all duration-500 hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-white">O que você vai aprender?</h3>
            <ul className="space-y-2 text-gray-300">
              {['Tendências tecnológicas para 2025', 'Desenvolvimento de soluções inovadoras', 'Estratégias para otimização de processos'].map((topic, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-rizontec-purple mr-2">→</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-white/10 transform transition-all duration-300 hover:translate-y-[-4px]">
              <CardContent className="p-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-1 text-white">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
