import React, { useState, useEffect } from 'react';
import ChessBoard from './components/ChessBoard';
import MainMenu from './components/MainMenu';
import { GameMode, Difficulty, GameProgress } from './types';
import { getProgress, incrementLevel } from './services/storageService';
import { ArrowLeft, RefreshCw, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.MENU);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [gameKey, setGameKey] = useState(0); // To reset board
  const [progress, setProgress] = useState<GameProgress>(getProgress());
  const [gameResult, setGameResult] = useState<{winner: 'w' | 'b' | 'draw', message: string} | null>(null);

  useEffect(() => {
    // Load progress on mount
    setProgress(getProgress());
  }, []);

  const handleStartGame = (mode: GameMode, diff?: Difficulty) => {
    setGameMode(mode);
    if (diff) setDifficulty(diff);
    setGameResult(null);
    setGameKey(prev => prev + 1);
  };

  const handleGameOver = (winner: 'w' | 'b' | 'draw') => {
    let message = "";
    if (winner === 'draw') {
      message = "Game Drawn!";
    } else if (gameMode === GameMode.VS_FRIEND) {
      message = `${winner === 'w' ? 'Golden Sun' : 'Neon Moon'} Wins!`;
    } else {
      // Vs Computer
      if (winner === 'w') {
        message = "Victory! Level Up!";
        const newProgress = incrementLevel(difficulty);
        setProgress(newProgress);
      } else {
        message = "Defeat! Try Again.";
      }
    }
    setGameResult({ winner, message });
  };

  const handleReset = () => {
    setGameResult(null);
    setGameKey(prev => prev + 1);
  };

  const handleBackToMenu = () => {
    setGameMode(GameMode.MENU);
    setGameResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 text-slate-100">
      
      {/* Header */}
      {gameMode !== GameMode.MENU && (
        <header className="w-full max-w-[600px] flex items-center justify-between mb-8 glass-panel p-4 rounded-xl">
            <button 
                onClick={handleBackToMenu}
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
                    {gameMode === GameMode.VS_FRIEND ? "Vs Friend" : `Vs AI (${difficulty})`}
                </h2>
                {gameMode === GameMode.VS_COMPUTER && (
                   <span className="text-xs font-mono text-cyan-300">
                     Level {
                       difficulty === Difficulty.EASY ? progress.easyLevel :
                       difficulty === Difficulty.MEDIUM ? progress.mediumLevel :
                       progress.hardLevel
                     }
                   </span> 
                )}
            </div>

            <button 
                onClick={handleReset}
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
                <RefreshCw className="w-6 h-6" />
            </button>
        </header>
      )}

      {/* Main Content */}
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {gameMode === GameMode.MENU ? (
          <MainMenu onStartGame={handleStartGame} progress={progress} />
        ) : (
          <div className="relative">
            <ChessBoard 
              gameMode={gameMode} 
              difficulty={difficulty} 
              onGameOver={handleGameOver}
              gameKey={gameKey}
            />
            
            {/* Game Over Modal Overlay */}
            {gameResult && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-xl animate-in fade-in zoom-in duration-300 border border-white/10">
                    <div className="bg-slate-900/90 border border-indigo-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(79,70,229,0.4)] text-center max-w-sm mx-4">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 shadow-lg">
                            <Trophy className="w-10 h-10 text-white animate-bounce" />
                        </div>
                        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-2">{gameResult.message}</h2>
                        <div className="flex gap-4 mt-8 justify-center">
                            <button 
                                onClick={handleBackToMenu}
                                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-indigo-200 hover:text-white hover:bg-indigo-500/20 transition-colors border border-indigo-500/20"
                            >
                                Menu
                            </button>
                            <button 
                                onClick={handleReset}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/40 transition-all hover:scale-105"
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            )}
          </div>
        )}
      </main>

        {/* Footer info */}
        {gameMode === GameMode.VS_COMPUTER && (
            <div className="mt-8 text-center glass-panel px-6 py-3 rounded-full">
                <p className="text-xs text-indigo-200/70">
                    AI powered by <span className="font-bold text-cyan-400">Gemini Flash Lite</span>
                </p>
            </div>
        )}
    </div>
  );
};

export default App;