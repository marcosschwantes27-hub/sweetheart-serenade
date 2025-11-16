import { useState } from "react";
import { Heart, Star, Cloud, Sparkles } from "lucide-react";
import { MazeGame } from "@/components/MazeGame";
import couplePhoto from "@/assets/couple-photo.jpeg";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [mazeCompleted, setMazeCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body dark">
      {/* Floating hearts animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 text-heart w-6 h-6 animate-pulse" />
        <Heart className="absolute top-40 right-20 text-pastel-pink w-8 h-8 animate-bounce" />
        <Star className="absolute top-20 right-40 text-pastel-yellow w-5 h-5 animate-spin" style={{ animationDuration: "3s" }} />
        <Cloud className="absolute top-60 left-20 text-pastel-blue w-10 h-10 opacity-60" />
        <Sparkles className="absolute bottom-40 right-10 text-pastel-mint w-6 h-6 animate-pulse" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-handwritten text-5xl md:text-7xl text-primary mb-4 animate-fade-in">
            Minha rapunzel... 💕
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Um convite especial do teu amor
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pastel-pink relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Heart className="w-12 h-12 text-heart fill-heart animate-pulse" />
            </div>
            <h2 className="font-handwritten text-4xl text-primary mb-6">
              Por que este momento é tão especial? ✨
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              Porque encontros únicos merecem momentos únicos. E um beijo no primeiro encontro 
              não é precipitação... é conexão, é química, tu não vai parecer atirada por conta disso, muito pelo contrário
              eu vou ficar muito feliz, pois a gente iria ficar muito mais próximos, e isso diria muito sobre a nossa conexão
            </p>
          </div>

          {/* Photo Card */}
          <div className="bg-card rounded-3xl p-4 md:p-6 shadow-xl border-2 border-pastel-pink animate-fade-in max-w-sm mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={couplePhoto} 
                alt="Amanda e Marcos" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-handwritten text-xl md:text-2xl text-white text-center">
                  Amanda & Marcos 💕
                </p>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pastel-pink to-pastel-pink/50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-heart fill-heart" />
                <h3 className="font-handwritten text-3xl text-foreground">
                  A vida é agora
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Não existe momento perfeito, existe o momento que decidimos tornar perfeito. 
                Por que esperar se ja nos sentimos confortáveis um com o outro?
              </p>
            </div>

            <div className="bg-gradient-to-br from-pastel-blue to-pastel-blue/50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-secondary" />
                <h3 className="font-handwritten text-3xl text-foreground">
                  Sem arrependimentos
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                O único arrependimento que existe é o de não ter aproveitado
                quando tivemos a chance. Por que não criamos essa memória?
              </p>
            </div>

            <div className="bg-gradient-to-br from-pastel-yellow to-pastel-yellow/50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-accent" />
                <h3 className="font-handwritten text-3xl text-foreground">
                  Conexão real
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Quando há essa conexão você sente, e quando você sente, por que segurar? 
                (te garanto que eu beijo bem, que o nosso beijo vai ser bom e que tu vai gostar 😂)
              </p>
            </div>

            <div className="bg-gradient-to-br from-pastel-mint to-pastel-mint/50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-8 h-8 text-muted-foreground" />
                <h3 className="font-handwritten text-3xl text-foreground">
                  Tempo
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Provavelmente irá levar muito tempo até conseguirmos nos ver de novo, por quê não aproveitamos
                quando finalmente temos a chance, depois de um mês de conversa?
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20 text-center">
            <p className="font-handwritten text-3xl md:text-4xl text-primary mb-4 italic">
              "o nosso beijo não vai ser só mais um beijo sem sentimento, vai ser algo muito mais especial que isso,
              vai marcar o começo da nossa relação, e pra ser bem sincero eu mal posso esperar por isso
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <Heart className="w-5 h-5 text-heart fill-heart" />
              <Heart className="w-6 h-6 text-heart fill-heart" />
              <Heart className="w-5 h-5 text-heart fill-heart" />
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pastel-blue">
            <h2 className="font-handwritten text-4xl text-primary mb-6 text-center">
              Uma mensagem sincera 💙
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Desde o primeiro momento, la quando reagi teu story na oktober, te achei meio chatinha mas logo 
              vi que tu era uma pessoaa incrível , e mesmo com tantas desavenças a gente passou
              por tudo junto, e nesse tempo eu comecei a gostar de verdade de ti... acho que posso dizer que em um nível
              que eu nunca gostei de alguém antes
             
           
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Não quero forçar ou apressar as coisas, mas se 
              aquela vontade, aquele frio na barriga... deixa acontecer. Vamos fazer de quinta
              o início de algo que vai durar muito e que valha a pena lembrar
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 text-center font-semibold">
              E se rolar aquele beijo? Ah, vai ser perfeito. ✨
            </p>
          </div>

          {/* Maze Game */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pastel-pink">
            <MazeGame onWin={setMazeCompleted} />
            
            {/* Reveal Button */}
            <div className="mt-8 pt-6 border-t border-border/30 text-center">
              <div className="flex flex-col items-center gap-3">
                <p className="text-lg md:text-xl font-handwritten text-foreground/70">
                  Uma frase especial
                </p>
                
                {!showMessage && (
                  <button
                    onClick={() => mazeCompleted && setShowMessage(true)}
                    disabled={!mazeCompleted}
                    className={`px-6 py-3 rounded-full font-handwritten text-lg transition-all shadow-md ${
                      mazeCompleted 
                        ? 'bg-gradient-to-r from-pastel-yellow to-pastel-pink text-foreground hover:scale-105 cursor-pointer' 
                        : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                    }`}
                  >
                    {mazeCompleted ? 'Revelar ✨' : '🔒 Complete o labirinto primeiro'}
                  </button>
                )}
                
                {showMessage && (
                  <div className="animate-fade-in space-y-3 mt-2">
                    <div className="flex justify-center gap-1 mb-2">
                      <span className="text-3xl">💕</span>
                    </div>
                    <p className="font-handwritten text-2xl md:text-3xl text-primary leading-relaxed max-w-2xl">
                      Eu quero muito que aconteça, porque isso muda tudo, vai mudar totalmente a nossa relação, o sentimento 
                      que a gente tem... Se ele ja é forte agora, te garanto que depois que a gente ficar esse sentimento só vai aumentar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pb-12 space-y-6">
            <button
              onClick={() => window.location.href = '/mensagem'}
              className="px-8 py-4 bg-gradient-to-r from-heart to-primary text-white rounded-full font-handwritten text-2xl hover:scale-105 transition-transform shadow-lg animate-pulse"
            >
              tenho algo pra te dizer... 💕
            </button>
            <p className="text-sm text-foreground/60 max-w-md mx-auto">
              Feito com muito carinho 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
