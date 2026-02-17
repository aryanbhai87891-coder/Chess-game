import React from 'react';
import { GameMode, Difficulty, GameProgress } from '../types';
import { Brain, Users, Trophy, ChevronRight, Zap } from 'lucide-react';

interface MainMenuProps {
  onStartGame: (mode: GameMode, difficulty?: Difficulty) => void;
  progress: GameProgress;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame, progress }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-[0_0_40px_rgba(245,158,11,0.6)] mb-4 rotate-3 hover:rotate-6 transition-transform">
            <Zap className="w-10 h-10 text-white drop-shadow-md" />
        </div>
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          GM FLASH
        </h1>
        <p className="text-purple-200 font-medium tracking-wide">Next-gen Colorful Chess</p>
      </div>

      <div className="space-y-5">
        <button
          onClick={() => onStartGame(GameMode.VS_FRIEND)}
          className="group w-full p-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 hover:scale-[1.02] transition-transform duration-200"
        >
          <div className="w-full h-full bg-slate-900/90 hover:bg-slate-900/80 rounded-xl p-4 flex items-center gap-4 text-left backdrop-blur-sm">
            <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg">Play vs Friend</h3>
              <p className="text-sm text-slate-400 group-hover:text-cyan-200">Pass and play locally</p>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transition-colors" />
          </div>
        </button>

        <div className="space-y-4 pt-2">
            <h2 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest pl-1">Challenge AI</h2>
            
            {/* Easy Mode */}
            <button
            onClick={() => onStartGame(GameMode.VS_COMPUTER, Difficulty.EASY)}
            className="group w-full p-1 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-green-900/20"
            >
             <div className="w-full h-full bg-slate-900/90 hover:bg-slate-900/80 rounded-xl p-4 flex items-center gap-4 text-left backdrop-blur-sm">
                <div className="p-3 rounded-lg bg-green-500/20 text-green-400 group-hover:text-white group-hover:bg-green-500 transition-colors">
                    <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-white">Easy Mode</h3>
                        <span className="text-xs font-mono bg-black/40 px-2 py-1 rounded text-green-300 border border-green-500/30">Lvl {progress.easyLevel}/100</span>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-green-200">Perfect for beginners</p>
                </div>
              </div>
            </button>

             {/* Medium Mode */}
             <button
            onClick={() => onStartGame(GameMode.VS_COMPUTER, Difficulty.MEDIUM)}
            className="group w-full p-1 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-orange-900/20"
            >
              <div className="w-full h-full bg-slate-900/90 hover:bg-slate-900/80 rounded-xl p-4 flex items-center gap-4 text-left backdrop-blur-sm">
                <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400 group-hover:text-white group-hover:bg-orange-500 transition-colors">
                    <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-white">Medium Mode</h3>
                        <span className="text-xs font-mono bg-black/40 px-2 py-1 rounded text-orange-300 border border-orange-500/30">Lvl {progress.mediumLevel}/100</span>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-orange-200">For club players</p>
                </div>
              </div>
            </button>

             {/* Hard Mode */}
             <button
            onClick={() => onStartGame(GameMode.VS_COMPUTER, Difficulty.HARD)}
            className="group w-full p-1 rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-red-900/20"
            >
              <div className="w-full h-full bg-slate-900/90 hover:bg-slate-900/80 rounded-xl p-4 flex items-center gap-4 text-left backdrop-blur-sm">
                <div className="p-3 rounded-lg bg-red-500/20 text-red-400 group-hover:text-white group-hover:bg-red-500 transition-colors">
                    <Trophy className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-white">Hard Mode</h3>
                        <span className="text-xs font-mono bg-black/40 px-2 py-1 rounded text-red-300 border border-red-500/30">Lvl {progress.hardLevel}/100</span>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-red-200">Grandmaster challenge</p>
                </div>
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;