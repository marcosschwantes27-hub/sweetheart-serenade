import { useState, useEffect, useCallback } from "react";
import { Heart, Sparkles } from "lucide-react";
import { toast } from "sonner";

const MAZE_SIZE = 10;

// 0 = caminho livre, 1 = parede
const MAZE_LAYOUT = [
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
];

interface Position {
  x: number;
  y: number;
}

interface MazeGameProps {
  onWin?: () => void;
}

export const MazeGame = ({ onWin }: MazeGameProps) => {
  const [amandaPos, setAmandaPos] = useState<Position>({ x: 0, y: 0 });
  const [marcosPos] = useState<Position>({ x: 9, y: 9 });
  const [hasWon, setHasWon] = useState(false);
  const [moves, setMoves] = useState(0);

  const checkWin = useCallback((pos: Position) => {
    if (pos.x === marcosPos.x && pos.y === marcosPos.y) {
      setHasWon(true);
      onWin?.();
      toast.success("💕 Amanda encontrou o Marcos! Hora do beijo! 💋", {
        duration: 5000,
      });
    }
  }, [marcosPos, onWin]);

  const moveAmanda = useCallback((dx: number, dy: number) => {
    if (hasWon) return;

    setAmandaPos((prev) => {
      const newX = prev.x + dx;
      const newY = prev.y + dy;

      // Verificar limites do labirinto
      if (newX < 0 || newX >= MAZE_SIZE || newY < 0 || newY >= MAZE_SIZE) {
        return prev;
      }

      // Verificar se não é parede
      if (MAZE_LAYOUT[newY][newX] === 1) {
        toast.error("Ops! Parede na frente! 🧱", { duration: 1000 });
        return prev;
      }

      const newPos = { x: newX, y: newY };
      setMoves((m) => m + 1);
      checkWin(newPos);
      return newPos;
    });
  }, [hasWon, checkWin]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasWon) return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          moveAmanda(0, -1);
          break;
        case "ArrowDown":
          e.preventDefault();
          moveAmanda(0, 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          moveAmanda(-1, 0);
          break;
        case "ArrowRight":
          e.preventDefault();
          moveAmanda(1, 0);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveAmanda, hasWon]);

  const resetGame = () => {
    setAmandaPos({ x: 0, y: 0 });
    setHasWon(false);
    setMoves(0);
    toast.info("Jogo reiniciado! Boa sorte! 🎮");
  };

  return (
    <div className="relative">
      {/* Instructions */}
      <div className="text-center mb-6 space-y-2">
        <h3 className="font-handwritten text-3xl text-primary mb-4">
          Ajude Amanda a encontrar o Marcos! 💕
        </h3>
        <p className="text-foreground/80">
          Use as setas do teclado (↑ ↓ ← →) para mover Amanda pelo labirinto
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-pastel-pink flex items-center justify-center text-xs font-bold">
              A
            </div>
            <span className="text-foreground/70">Amanda</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-pastel-blue flex items-center justify-center text-xs font-bold">
              M
            </div>
            <span className="text-foreground/70">Marcos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🚶‍♀️</span>
            <span className="text-foreground/70">{moves} passos</span>
          </div>
        </div>
      </div>

      {/* Maze */}
      <div className="flex justify-center mb-6">
        <div
          className="inline-grid gap-1 p-4 bg-card rounded-2xl shadow-xl border-2 border-pastel-pink"
          style={{
            gridTemplateColumns: `repeat(${MAZE_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {MAZE_LAYOUT.map((row, y) =>
            row.map((cell, x) => {
              const isAmanda = amandaPos.x === x && amandaPos.y === y;
              const isMarcos = marcosPos.x === x && marcosPos.y === y;
              const isWall = cell === 1;

              return (
                <div
                  key={`${x}-${y}`}
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center
                    transition-all duration-200 text-sm md:text-base
                    ${isWall ? "bg-muted" : "bg-background"}
                    ${isAmanda || isMarcos ? "relative z-10" : ""}
                  `}
                >
                  {isAmanda && (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-pastel-pink flex items-center justify-center animate-pulse font-bold text-white shadow-lg">
                      A
                    </div>
                  )}
                  {isMarcos && !hasWon && (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-pastel-blue flex items-center justify-center animate-pulse font-bold text-foreground shadow-lg">
                      M
                    </div>
                  )}
                  {isMarcos && hasWon && (
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="text-2xl animate-bounce">💋</div>
                      <div className="absolute -top-2 -left-2 text-sm animate-ping">💕</div>
                      <div className="absolute -top-2 -right-2 text-sm animate-ping animation-delay-150">💕</div>
                      <div className="absolute -bottom-2 -left-2 text-sm animate-ping animation-delay-300">💕</div>
                      <div className="absolute -bottom-2 -right-2 text-sm animate-ping animation-delay-450">💕</div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Win Screen */}
      {hasWon && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-2xl animate-fade-in z-20">
          <div className="text-center space-y-6 p-8 relative">
            {/* Floating hearts animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 text-2xl animate-float">💕</div>
              <div className="absolute top-10 right-1/4 text-3xl animate-float animation-delay-300">💖</div>
              <div className="absolute bottom-20 left-1/3 text-2xl animate-float animation-delay-150">💗</div>
              <div className="absolute bottom-10 right-1/3 text-3xl animate-float animation-delay-450">💝</div>
            </div>
            
            {/* Main kiss animation */}
            <div className="flex justify-center gap-4 mb-4 relative">
              <div className="text-6xl animate-bounce">😘</div>
              <div className="text-6xl animate-pulse">💋</div>
              <div className="text-6xl animate-bounce animation-delay-150">😘</div>
            </div>
            
            <div className="flex justify-center gap-2 mb-4">
              <Heart className="w-12 h-12 text-heart fill-heart animate-bounce" />
              <Sparkles className="w-12 h-12 text-pastel-yellow animate-pulse" />
              <Heart className="w-12 h-12 text-heart fill-heart animate-bounce animation-delay-150" />
            </div>
            
            <h2 className="font-handwritten text-5xl text-primary animate-pulse">
              Eles se beijaram! 💋
            </h2>
            <p className="text-xl text-foreground/80">
              Amanda completou o labirinto em {moves} passos!
            </p>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-primary to-heart text-white rounded-full font-handwritten text-xl hover:scale-105 transition-transform shadow-lg"
            >
              Jogar novamente ✨
            </button>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {!hasWon && moves > 0 && (
        <div className="text-center">
          <button
            onClick={resetGame}
            className="text-sm text-foreground/60 hover:text-foreground transition-colors underline"
          >
            Reiniciar jogo
          </button>
        </div>
      )}
    </div>
  );
};
