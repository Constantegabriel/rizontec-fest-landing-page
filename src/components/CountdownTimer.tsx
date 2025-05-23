
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white">O evento começa em:</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
            <div className="w-full aspect-square bg-gradient-to-br from-rizontec-purple/30 to-rizontec-blue/30 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rizontec-purple to-rizontec-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <span className="text-3xl md:text-4xl font-bold text-white relative z-10">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-gray-300 capitalize mt-2">
              {unit}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-white">
          Data: 15 de junho de 2025 - 20h00 (Horário de Brasília)
        </p>
        <button 
          className="mt-4 text-sm text-rizontec-purple hover:underline transition-all duration-300 flex items-center mx-auto"
          onClick={() => {
            const event = {
              text: "Rizontec Fest - Evento Online Ao Vivo",
              dates: targetDate,
              details: "Um evento exclusivo sobre inovação tecnológica"
            };
            
            const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${encodeURIComponent(event.dates)}&details=${encodeURIComponent(event.details)}`;
            
            window.open(url, '_blank');
          }}
        >
          + Adicionar ao Google Calendar
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
