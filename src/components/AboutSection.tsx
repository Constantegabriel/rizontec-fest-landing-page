
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Palestras Exclusivas",
      description: "Conteúdo de alto nível com profissionais reconhecidos no mercado",
      icon: "🎯"
    },
    {
      title: "Networking Qualificado",
      description: "Conecte-se com profissionais e empresas do setor tecnológico",
      icon: "🔗"
    },
    {
      title: "Conteúdo Prático",
      description: "Aplicações reais que você pode implementar imediatamente",
      icon: "⚙️"
    },
    {
      title: "Certificado Digital",
      description: "Documento que comprova sua participação no evento",
      icon: "🏆"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o <span className="text-gradient">Rizontec Fest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um evento online ao vivo criado para impulsionar seu conhecimento em tecnologia e inovação. Prepare-se para uma imersão completa com especialistas renomados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">Para quem é este evento?</h3>
            <ul className="space-y-3 text-gray-300">
              {['Desenvolvedores', 'Gestores de TI', 'Estudantes de tecnologia', 'Empreendedores digitais', 'Profissionais em transição de carreira'].map((audience, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-rizontec-green mr-2">✓</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">O que você vai aprender?</h3>
            <ul className="space-y-3 text-gray-300">
              {['Tendências tecnológicas para 2025', 'Desenvolvimento de soluções inovadoras', 'Aplicação prática de novas tecnologias', 'Estratégias para otimização de processos', 'Casos de sucesso do mercado'].map((topic, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-rizontec-purple mr-2">→</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-slate-800/50 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
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
