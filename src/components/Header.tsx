
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-card/80 backdrop-blur-lg py-4 sticky top-0 z-50 shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gradient">Rizontec Fest</h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Menu de navegação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Sobre</a>
          <a href="#beneficios" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Depoimentos</a>
          <a href="#bonus" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Bônus</a>
        </nav>
        
        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="btn-primary animate-pulse-strong" asChild>
            <a href="#inscricao">Quero participar</a>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-3 space-y-3 bg-card/90 backdrop-blur-lg border-t border-border">
          <a href="#sobre" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="#beneficios" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
          <a href="#depoimentos" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
          <a href="#bonus" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Bônus</a>
          <Button className="btn-primary animate-pulse-strong w-full" asChild>
            <a href="#inscricao" onClick={() => setMobileMenuOpen(false)}>Quero participar</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
