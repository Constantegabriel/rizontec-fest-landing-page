
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gradient">Rizontec Fest</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-gray-700 hover:text-rizontec-purple transition-colors">Sobre</a>
          <a href="#beneficios" className="text-gray-700 hover:text-rizontec-purple transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-rizontec-purple transition-colors">Depoimentos</a>
          <a href="#bonus" className="text-gray-700 hover:text-rizontec-purple transition-colors">Bônus</a>
        </nav>
        <div>
          <Button className="btn-primary" asChild>
            <a href="#inscricao">Quero participar</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
