import { Heart, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Mensagem = () => {
  const navigate = useNavigate();
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body dark">
      {/* Floating hearts animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 text-heart w-6 h-6 animate-pulse" />
        <Heart className="absolute top-40 right-20 text-pastel-pink w-8 h-8 animate-bounce" />
        <Star className="absolute top-20 right-40 text-pastel-yellow w-5 h-5 animate-spin" style={{ animationDuration: "3s" }} />
        <Sparkles className="absolute bottom-40 right-10 text-pastel-mint w-6 h-6 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-8 text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
          >
            ← Voltar
          </button>

          {/* Main Message Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pastel-pink space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                <Heart className="w-12 h-12 text-heart fill-heart animate-bounce" />
                <Sparkles className="w-12 h-12 text-pastel-yellow animate-pulse" />
                <Heart className="w-12 h-12 text-heart fill-heart animate-bounce animation-delay-150" />
              </div>
            </div>

            <h1 className="font-handwritten text-4xl md:text-5xl text-primary text-center mb-8">
              Uma mensagem especial... 💕
            </h1>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                Amanda, se você chegou até aqui, é porque dedicou um tempo para 
                ver tudo isso que eu preparei com tanto carinho...
              </p>

              <p>
                E isso significa muito pra mim. Porque mais do que um site, 
                mais do que um joguinho bobo de labirinto, isso é uma forma de 
                te mostrar o quanto eu estou animado para esse encontro.
              </p>

              <p className="font-handwritten text-2xl text-primary text-center py-4">
                Você é especial, Amanda. ✨
              </p>

              <p>
                Não quero que esse seja só mais um encontro comum. Quero que seja 
                leve, divertido, verdadeiro. Quero que a gente se permita ser 
                autêntico, sem medo de sentir o que estamos sentindo.
              </p>

              <p>
                E se rolar aquela vontade de nos beijarmos? Que a gente não deixe 
                passar. Porque momentos assim, com pessoas especiais, merecem ser 
                vividos intensamente.
              </p>

              <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/20 text-center my-8">
                <p className="font-handwritten text-3xl text-primary italic">
                  "Não é sobre seguir regras, é sobre seguir o coração."
                </p>
              </div>

              <p className="text-center font-semibold text-xl">
                Mal posso esperar para te ver, Amanda! 💫
              </p>

              <p className="text-center text-foreground/70 text-base mt-8">
                Com todo carinho,<br />
                <span className="font-handwritten text-2xl text-primary">Marcos</span>
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gradient-to-r from-primary to-heart text-white rounded-full font-handwritten text-xl hover:scale-105 transition-transform shadow-lg"
              >
                Voltar ao início 💕
              </button>
            </div>

            {/* Interactive Reveal Section */}
            <div className="mt-12 pt-8 border-t border-border/30 text-center">
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-handwritten text-foreground/70">
                  Uma surpresa especial
                </p>
                
                {!showReveal && (
                  <button
                    onClick={() => setShowReveal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-pastel-yellow to-pastel-pink text-foreground rounded-full font-handwritten text-lg hover:scale-105 transition-transform shadow-md"
                  >
                    Revelar ✨
                  </button>
                )}
                
                {showReveal && (
                  <div className="animate-fade-in space-y-3 mt-2">
                    <div className="flex justify-center gap-1 mb-2">
                      <span className="text-3xl">😅</span>
                    </div>
                    <p className="font-handwritten text-2xl md:text-3xl text-primary leading-relaxed max-w-2xl">
                      Ops, algo deu errado... quem sabe depois de um beijo 💋
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensagem;
