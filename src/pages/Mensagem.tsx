import { useState } from "react";

const Mensagem = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body dark flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        {!showReveal && (
          <button
            onClick={() => setShowReveal(true)}
            className="px-12 py-6 bg-gradient-to-r from-pastel-yellow to-pastel-pink text-foreground rounded-full font-handwritten text-3xl md:text-4xl hover:scale-105 transition-transform shadow-2xl"
          >
            Revelar ✨
          </button>
        )}
        
        {showReveal && (
          <div className="animate-fade-in text-center space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-5xl md:text-6xl">😅</span>
            </div>
            <p className="font-handwritten text-3xl md:text-5xl text-primary leading-relaxed max-w-3xl px-4">
              Ops, algo deu errado... quem sabe depois de um beijo 💋
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mensagem;
