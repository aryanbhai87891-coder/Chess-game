export enum GameMode {
  MENU = 'MENU',
  VS_COMPUTER = 'VS_COMPUTER',
  VS_FRIEND = 'VS_FRIEND'
}

export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

export interface GameProgress {
  easyLevel: number;
  mediumLevel: number;
  hardLevel: number;
}

export interface Move {
  from: string;
  to: string;
  promotion?: string;
}

export type PieceColor = 'w' | 'b';

export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

export interface Piece {
  type: PieceType;
  color: PieceColor;
}