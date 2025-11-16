import { Heart, Star, Cloud, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
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
            Querida Amanda... 💕
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Um convite especial do Marcos
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
              não é precipitação... é conexão, é química, é deixar o coração falar mais alto 
              que a razão. É ser autêntico e verdadeiro com o que você está sentindo.
            </p>
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
                Por que esperar se a magia já está acontecendo?
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
                O único arrependimento que existe é o de não ter vivido intensamente 
                quando tivemos a chance. Vamos criar uma memória linda juntos?
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
                Quando há química, você sente. E quando você sente, por que segurar? 
                A espontaneidade é o tempero que torna tudo mais especial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pastel-mint to-pastel-mint/50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-8 h-8 text-muted-foreground" />
                <h3 className="font-handwritten text-3xl text-foreground">
                  Seja você mesma
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                O mais lindo em você é sua autenticidade. Se seu coração está pedindo esse momento, 
                confie nele. Ele sempre sabe o caminho.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20 text-center">
            <p className="font-handwritten text-3xl md:text-4xl text-primary mb-4 italic">
              "O beijo é a forma mais sincera de dizer: 'Estou aqui, presente, 
              me permitindo sentir tudo isso com você.'"
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
              Uma mensagem sincera do Marcos 💙
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Amanda, desde o primeiro momento que conversamos, senti uma conexão especial. 
              Não quero que esse momento seja apenas mais um encontro comum. Quero que seja 
              autêntico, verdadeiro, memorável.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Não estou pedindo nada além do que você já sente. Se houver aquela faísca, 
              aquela vontade, aquele frio na barriga... deixa acontecer. Vamos fazer desse 
              encontro o início de algo que valha a pena lembrar.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 text-center font-semibold">
              E se rolar aquele beijo? Ah, vai ser perfeito. ✨
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6 pb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-pastel-pink to-heart p-8 rounded-full shadow-2xl">
              <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
              <span className="font-handwritten text-4xl text-white">
                Topa viver essa magia comigo?
              </span>
              <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
            </div>
            
            <p className="text-sm text-foreground/60 max-w-md mx-auto">
              Feito com muito carinho e uma pitada de coragem 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
