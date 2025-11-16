import { useState } from "react";
import { Heart, Star, Sparkles, Cloud, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Mensagem = () => {
  const navigate = useNavigate();
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body dark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <Heart className="absolute top-10 left-10 text-heart w-8 h-8 animate-pulse" />
        <Heart className="absolute top-20 right-20 text-pastel-pink w-6 h-6 animate-bounce" style={{ animationDelay: "0.5s" }} />
        <Heart className="absolute bottom-20 left-20 text-heart w-7 h-7 animate-pulse" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-32 right-32 text-pastel-pink w-5 h-5 animate-bounce" style={{ animationDelay: "1.5s" }} />
        
        <Star className="absolute top-32 right-40 text-pastel-yellow w-6 h-6 animate-spin" style={{ animationDuration: "4s" }} />
        <Star className="absolute bottom-40 left-32 text-pastel-yellow w-5 h-5 animate-spin" style={{ animationDuration: "5s", animationDelay: "0.5s" }} />
        <Star className="absolute top-1/2 left-10 text-pastel-yellow w-4 h-4 animate-spin" style={{ animationDuration: "3s", animationDelay: "1s" }} />
        
        <Sparkles className="absolute top-1/4 right-16 text-pastel-mint w-7 h-7 animate-pulse" style={{ animationDelay: "0.3s" }} />
        <Sparkles className="absolute bottom-1/4 left-16 text-pastel-mint w-6 h-6 animate-pulse" style={{ animationDelay: "0.8s" }} />
        
        <Cloud className="absolute top-16 left-1/3 text-primary/30 w-10 h-10 animate-pulse" style={{ animationDuration: "3s" }} />
        <Cloud className="absolute bottom-24 right-1/4 text-primary/20 w-12 h-12 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>
      
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm text-foreground/70 hover:text-foreground rounded-full transition-all hover:scale-105 shadow-lg border border-border/50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-handwritten text-lg">Voltar</span>
      </button>
      
      {/* Main content */}
      <div className="flex flex-col items-center gap-8 relative z-10">
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
