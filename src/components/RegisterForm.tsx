
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

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
      
      // Redirecionar para WhatsApp ou Telegram
      const whatsappLink = `https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no Rizontec Fest. Meu nome é ${name} e meu email é ${email}`;
      window.open(whatsappLink, '_blank');
      
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
        <div className="max-w-2xl mx-auto bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
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
                className="mt-1 bg-slate-700/50 border-white/10 text-white"
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
                className="mt-1 bg-slate-700/50 border-white/10 text-white"
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
                className="mt-1 bg-slate-700/50 border-white/10 text-white"
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
                Concordo em receber comunicações por e-mail e WhatsApp sobre o evento e aceito os termos de uso e política de privacidade. *
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary py-6" 
              disabled={loading}
            >
              {loading ? "Processando..." : "Reservar minha vaga gratuitamente"}
            </Button>
            
            <p className="text-center text-sm text-gray-400 mt-4">
              Suas informações estão seguras conosco e não serão compartilhadas com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
