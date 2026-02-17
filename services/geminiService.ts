import { GoogleGenAI } from "@google/genai";
import { Difficulty } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are a chess engine. Your goal is to play chess moves based on a provided FEN string. 
You will be given the current FEN, the difficulty level, and a list of valid moves.
You MUST return ONLY the best move in UCI format (e.g. "e2e4", "a7a8q").
Do not provide any explanation, markdown, or extra text. Just the move string.
`;

export const getBestMove = async (
  fen: string,
  difficulty: Difficulty,
  validMoves: string[]
): Promise<string> => {
  try {
    let difficultyPrompt = "";
    switch (difficulty) {
      case Difficulty.EASY:
        difficultyPrompt = "Play like a beginner (Elo ~600). Make occasional sub-optimal moves but avoid immediate blunder unless forced.";
        break;
      case Difficulty.MEDIUM:
        difficultyPrompt = "Play like a strong club player (Elo ~1500). Play solid moves.";
        break;
      case Difficulty.HARD:
        difficultyPrompt = "Play like a Grandmaster (Elo ~2500+). Find the absolute best move possible.";
        break;
    }

    const prompt = `
Current FEN: ${fen}
Difficulty: ${difficulty}
${difficultyPrompt}
Valid Moves: ${validMoves.join(', ')}

Return the single best move from the Valid Moves list in UCI format.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: difficulty === Difficulty.EASY ? 0.8 : 0.2, // Higher randomness for easy
        topK: 1,
      }
    });

    const move = response.text?.trim();
    if (!move) {
        throw new Error("Empty response from AI");
    }
    
    // Basic cleanup just in case
    const cleanMove = move.replace(/['"]/g, '').replace(/\s/g, '').toLowerCase();
    
    return cleanMove;

  } catch (error) {
    console.error("Error getting AI move:", error);
    // Fallback to random move if AI fails
    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    return randomMove;
  }
};