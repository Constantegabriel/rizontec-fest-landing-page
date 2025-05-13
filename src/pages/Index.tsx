
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonusSection from '@/components/BonusSection';
import RegisterForm from '@/components/RegisterForm';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-900">
      <ParticlesBackground />
      <Header />
      <main className="flex-grow relative z-10 overflow-x-hidden w-full">
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <TestimonialsSection />
        <BonusSection />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
