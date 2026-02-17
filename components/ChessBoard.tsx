import React, { useState, useEffect, useCallback } from 'react';
import { Chess, Square, Move } from 'chess.js';
import { PIECE_SVGS } from '../constants';
import clsx from 'clsx';
import { getBestMove } from '../services/geminiService';
import { Difficulty, GameMode } from '../types';

interface ChessBoardProps {
  gameMode: GameMode;
  difficulty: Difficulty;
  onGameOver: (winner: 'w' | 'b' | 'draw') => void;
  gameKey: number; // Used to reset board
}

const ChessBoard: React.FC<ChessBoardProps> = ({ gameMode, difficulty, onGameOver, gameKey }) => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [lastMove, setLastMove] = useState<{from: string, to: string} | null>(null);

  // Reset game when gameKey changes
  useEffect(() => {
    const newGame = new Chess();
    setGame(newGame);
    setSelectedSquare(null);
    setPossibleMoves([]);
    setLastMove(null);
    setIsAiThinking(false);
  }, [gameKey]);

  // AI Turn Logic
  useEffect(() => {
    const makeAiMove = async () => {
      if (gameMode === GameMode.VS_COMPUTER && game.turn() === 'b' && !game.isGameOver()) {
        setIsAiThinking(true);
        
        // Slight artificial delay for UX if the response is too instant
        const validMovesVerbose = game.moves({ verbose: true }) as Move[];
        const validMovesUci = validMovesVerbose.map(m => m.from + m.to + (m.promotion || ''));

        const bestMoveUci = await getBestMove(game.fen(), difficulty, validMovesUci);
        
        const from = bestMoveUci.substring(0, 2) as Square;
        const to = bestMoveUci.substring(2, 4) as Square;
        const promotion = bestMoveUci.length > 4 ? bestMoveUci.substring(4, 5) : undefined;

        safeMakeMove(from, to, promotion);
        setIsAiThinking(false);
      }
    };

    makeAiMove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.fen(), gameMode, difficulty]);

  // Check Game Over
  useEffect(() => {
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        onGameOver(game.turn() === 'w' ? 'b' : 'w');
      } else {
        onGameOver('draw');
      }
    }
  }, [game, onGameOver]);

  const safeMakeMove = (from: Square, to: Square, promotion?: string) => {
    try {
      const moveResult = game.move({ from, to, promotion: promotion || 'q' });
      if (moveResult) {
        const newGame = new Chess(game.fen());
        setGame(newGame);
        setLastMove({ from, to });
        return true;
      }
    } catch (e) {
      console.error("Invalid move attempt", e);
    }
    return false;
  };

  const onSquareClick = (square: Square) => {
    if (game.isGameOver() || (gameMode === GameMode.VS_COMPUTER && game.turn() === 'b' && isAiThinking)) return;

    if (selectedSquare === square) {
      setSelectedSquare(null);
      setPossibleMoves([]);
      return;
    }

    if (selectedSquare) {
      const moveSuccess = safeMakeMove(selectedSquare, square);
      if (moveSuccess) {
        setSelectedSquare(null);
        setPossibleMoves([]);
        return;
      }
    }

    const piece = game.get(square);
    if (piece && piece.color === game.turn()) {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true }) as Move[];
      setPossibleMoves(moves.map(m => m.to));
    } else {
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  const renderBoard = () => {
    const board = [];
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const square = `${files[f]}${ranks[r]}` as Square;
        const isDark = (r + f) % 2 === 1;
        const piece = game.get(square);
        const isSelected = selectedSquare === square;
        const isPossibleMove = possibleMoves.includes(square);
        const isLastMoveFrom = lastMove?.from === square;
        const isLastMoveTo = lastMove?.to === square;
        const isCheck = game.inCheck() && piece?.type === 'k' && piece?.color === game.turn();

        board.push(
          <div
            key={square}
            onClick={() => onSquareClick(square)}
            className={clsx(
              "relative w-full h-full flex items-center justify-center cursor-pointer select-none transition-all duration-300",
              // Fancy Board Colors
              isDark ? "bg-[#4c1d95]" : "bg-[#c4b5fd]", // Deep violet & soft purple
              
              // Highlight selected (Electric Pink)
              isSelected && "bg-[#ec4899] ring-inset ring-4 ring-[#be185d] shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]",
              
              // Highlight last move (Glowing Yellow)
              (isLastMoveFrom || isLastMoveTo) && !isSelected && "bg-[#facc15]/60",
              
              // Check highlight (Bright Red Gradient)
              isCheck && "bg-gradient-to-br from-red-600 to-red-900",
            )}
          >
             {/* Rank/File Labels */}
             {f === 0 && (
                <span className={clsx("absolute top-0.5 left-0.5 text-[8px] md:text-[10px] font-bold opacity-70", isDark ? "text-violet-200" : "text-violet-900")}>
                  {ranks[r]}
                </span>
              )}
              {r === 7 && (
                <span className={clsx("absolute bottom-0 right-0.5 text-[8px] md:text-[10px] font-bold opacity-70", isDark ? "text-violet-200" : "text-violet-900")}>
                  {files[f]}
                </span>
              )}

            {/* Possible Move Indicator (Bright Neon Green) */}
            {isPossibleMove && !piece && (
              <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]" />
            )}
            {isPossibleMove && piece && (
              <div className="absolute w-full h-full border-4 border-[#4ade80] rounded-full shadow-[0_0_15px_#4ade80]" />
            )}

            {/* Piece */}
            {piece && (
              <div className="w-[85%] h-[85%] z-10 pointer-events-none transition-transform duration-200 hover:scale-110 drop-shadow-2xl">
                {PIECE_SVGS[`${piece.color}${piece.type.toUpperCase()}`]}
              </div>
            )}
          </div>
        );
      }
    }
    return board;
  };

  return (
    <div className="relative w-full max-w-[90vw] md:max-w-[600px] aspect-square rounded-xl overflow-hidden border-[12px] border-[#2e1065] shadow-[0_0_50px_rgba(139,92,246,0.5)]">
      <div className="w-full h-full grid grid-cols-8 grid-rows-8">
        {renderBoard()}
      </div>
      
      {/* AI Thinking Overlay */}
      {isAiThinking && (
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/50 text-xs px-3 py-1.5 rounded-full animate-pulse flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"/>
            AI Thinking...
        </div>
      )}
    </div>
  );
};

export default ChessBoard;