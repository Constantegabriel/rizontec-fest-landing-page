
import React from 'react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-slate-900 to-black">
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rizontec-purple via-rizontec-blue to-rizontec-purple"></div>
      
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-rizontec-purple rounded-full blur-[150px] -top-80 -left-20 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] bg-rizontec-blue rounded-full blur-[150px] -bottom-80 -right-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left animate-fade-in-down order-2 md:order-1">
            <span className="inline-block py-1 px-3 text-sm font-semibold bg-white/10 rounded-full text-white mb-4">
              Evento Online Ao Vivo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transforme seu conhecimento em <span className="text-gradient">inovação tecnológica</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Um evento exclusivo para quem quer ficar à frente nas tendências de tecnologia e inovação.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="btn-primary animate-pulse-strong w-full sm:w-auto transition-all duration-300 transform hover:translate-y-[-4px]">
                <a href="#inscricao" className="text-lg px-4 py-2 block w-full">Garantir minha vaga</a>
              </Button>
              <span className="text-white">Vagas limitadas!</span>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 animate-float order-1 md:order-2">
            <div className="relative pt-[56.25%] bg-gray-900">
              {/* Launch image */}
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                alt="Rizontec Fest Launch" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all animate-pulse-strong backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16">
          <CountdownTimer targetDate="2025-06-15T20:00:00" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
