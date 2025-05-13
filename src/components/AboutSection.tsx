
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
    <section id="sobre" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o <span className="text-gradient">Rizontec Fest</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um evento online ao vivo criado para impulsionar seu conhecimento em tecnologia e inovação. Prepare-se para uma imersão completa com especialistas renomados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-rizontec-blue/10 to-rizontec-purple/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Para quem é este evento?</h3>
            <ul className="space-y-3">
              {['Desenvolvedores', 'Gestores de TI', 'Estudantes de tecnologia', 'Empreendedores digitais', 'Profissionais em transição de carreira'].map((audience, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-rizontec-green mr-2">✓</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-rizontec-purple/10 to-rizontec-blue/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">O que você vai aprender?</h3>
            <ul className="space-y-3">
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
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
