
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if we're scrolling up
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Set scrolled state based on scroll position
      if (currentScrollPos > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Set visibility based on scroll direction - only change if there's a significant scroll
      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setVisible(isScrollingUp);
      }
      
      // Always show navbar at the top of the page
      if (currentScrollPos < 50) {
        setVisible(true);
      }
      
      // Save current scroll position for next comparison
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`py-3 sticky top-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-md border-b border-border' : 'bg-transparent'} 
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gradient">Rizontec Fest</h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#sobre" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Sobre</a>
          <a href="#beneficios" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Depoimentos</a>
          <a href="#bonus" className="text-foreground/80 hover:text-rizontec-purple transition-colors">Bônus</a>
        </nav>
        
        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="btn-primary animate-pulse-strong" asChild>
            <a href="#inscricao">Participar</a>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown - Fixed the positioning and overflow issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[61px] bg-slate-900/95 backdrop-blur-lg border-t border-border shadow-lg z-50">
          <div className="px-4 py-3 space-y-3">
            <a href="#sobre" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#beneficios" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
            <a href="#depoimentos" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
            <a href="#bonus" className="block text-foreground/80 hover:text-rizontec-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Bônus</a>
            <Button className="btn-primary w-full" asChild>
              <a href="#inscricao" onClick={() => setMobileMenuOpen(false)}>Participar</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
