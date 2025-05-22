
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !agreed) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá as informações de acesso por e-mail.",
      });
      
      // Redirecionar para WhatsApp com o número correto
      const whatsappLink = `https://wa.me/5548998143419?text=Olá! Acabei de me inscrever no Rizontec Fest. Meu nome é ${name} e meu email é ${email}`;
      window.open(whatsappLink, '_blank');
      
      // Abrir Instagram em uma nova aba
      setTimeout(() => {
        window.open('https://instagram.com/rizontec', '_blank');
      }, 500);
      
      // Reset do formulário
      setName('');
      setEmail('');
      setWhatsapp('');
      setAgreed(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="inscricao" className="py-20 bg-slate-900">
      <div className="section-container">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg transform transition-all duration-500 hover:shadow-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Garanta sua vaga no <span className="text-gradient">Rizontec Fest</span>
            </h2>
            <p className="text-gray-300">
              Preencha o formulário abaixo para participar do evento e receber seus bônus exclusivos
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-200">Nome completo *</Label>
              <Input 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome completo" 
                required 
                className="mt-1 bg-slate-700/50 border-white/10 text-white focus:ring-rizontec-purple focus:border-rizontec-purple transition-all duration-300"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-200">E-mail *</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail" 
                required 
                className="mt-1 bg-slate-700/50 border-white/10 text-white focus:ring-rizontec-purple focus:border-rizontec-purple transition-all duration-300"
              />
            </div>
            
            <div>
              <Label htmlFor="whatsapp" className="text-gray-200">WhatsApp (opcional)</Label>
              <Input 
                id="whatsapp" 
                type="tel" 
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(00) 00000-0000" 
                className="mt-1 bg-slate-700/50 border-white/10 text-white focus:ring-rizontec-purple focus:border-rizontec-purple transition-all duration-300"
              />
            </div>
            
            <div className="flex items-start">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                Concordo em receber comunicações sobre o evento e aceito os termos de uso *
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full sm:w-auto mx-auto block text-center btn-primary py-3 px-6 transform transition-all duration-300 hover:translate-y-[-4px]" 
              disabled={loading}
            >
              {loading ? "Processando..." : "Reservar minha vaga"}
            </Button>
            
            <p className="text-center text-sm text-gray-400 mt-4">
              Suas informações estão seguras conosco.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
