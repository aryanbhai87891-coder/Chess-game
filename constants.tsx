import React from 'react';

// White Pieces -> Golden/Amber Theme
// Black Pieces -> Cyan/Neon Blue Theme

export const PIECE_SVGS: Record<string, React.ReactNode> = {
  // White Pieces (Gold)
  wP: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  wN: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 18c.38 2.32-2.41 5.11-4.5 6-4.18 1.78-5.83 2.82-7.5 7.5-1.25 3.5-.5 7 .5 7H9c-1.5-6-4-10-3-14 1-4 6-10 16-6.5z" fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  wB: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 36c3.39-.47 6.88-.47 10.25-.47 3.38 0 6.88 0 10.25.47M14 32c2.5 0 8.5-5.5 14.5.5M25 10c0-2.5-1.5-4.5-3.5-4.5S18 7.5 18 10c0 1.5 1 2.5 1 2.5V19c0 4.5 6.5 7.5 9 10 1.5-2.5 2.5-4.5 2.5-7.5v-6.5s1-1 1-2.5z" />
        <path d="M17.5 26h10M20 30h5M22.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#FFFBEB" />
      </g>
    </svg>
  ),
  wR: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 39h27v-3H9v3zM12 36v-4h21v4M11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt" />
        <path d="M34 14l-3 3H14l-3-3" />
        <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter" />
        <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
        <path d="M11 14h23" fill="none" stroke="#78350F" strokeLinejoin="miter" />
      </g>
    </svg>
  ),
  wQ: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM10.5 19.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM38.5 19.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25l-7-11zM9 26c0 2 1.5 2 2.5 4 1 2.5 3 1 2.5 3.5.5-2.5 1.5-1 2.5-.5 1-1.5 2.5-2.5 2.5-2.5-.5 2 1 2.5 3 2.5 2 0 2.5-.5 3-2.5 0 0 1.5 1 2.5 2.5 1-.5 2-2 2.5.5.5-2.5 2.5-1 2.5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0zM11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="#FBBF24" />
      </g>
    </svg>
  ),
  wK: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#FBBF24" stroke="#78350F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
        <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#FBBF24" />
        <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-5 2-8 2s-4-10-10.5-10S13.5 13 10.5 13s-5 2-9 6c-3 6 5.5 9 5.5 9z" fill="#FBBF24" />
        <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
      </g>
    </svg>
  ),
  // Black Pieces (Cyan/Blue)
  bP: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  bN: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 18c.38 2.32-2.41 5.11-4.5 6-4.18 1.78-5.83 2.82-7.5 7.5-1.25 3.5-.5 7 .5 7H9c-1.5-6-4-10-3-14 1-4 6-10 16-6.5z" fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  bB: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 36c3.39-.47 6.88-.47 10.25-.47 3.38 0 6.88 0 10.25.47M14 32c2.5 0 8.5-5.5 14.5.5M25 10c0-2.5-1.5-4.5-3.5-4.5S18 7.5 18 10c0 1.5 1 2.5 1 2.5V19c0 4.5 6.5 7.5 9 10 1.5-2.5 2.5-4.5 2.5-7.5v-6.5s1-1 1-2.5z" />
        <path d="M17.5 26h10M20 30h5M22.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#06B6D4" />
      </g>
    </svg>
  ),
  bR: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 39h27v-3H9v3zM12 36v-4h21v4M11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt" />
        <path d="M34 14l-3 3H14l-3-3" />
        <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter" />
        <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
        <path d="M11 14h23" fill="none" stroke="#0F172A" strokeLinejoin="miter" />
      </g>
    </svg>
  ),
  bQ: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM10.5 19.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM38.5 19.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25l-7-11zM9 26c0 2 1.5 2 2.5 4 1 2.5 3 1 2.5 3.5.5-2.5 1.5-1 2.5-.5 1-1.5 2.5-2.5 2.5-2.5-.5 2 1 2.5 3 2.5 2 0 2.5-.5 3-2.5 0 0 1.5 1 2.5 2.5 1-.5 2-2 2.5.5.5-2.5 2.5-1 2.5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0zM11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="#06B6D4" />
      </g>
    </svg>
  ),
  bK: (
    <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <g fill="#06B6D4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
        <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#06B6D4" />
        <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-5 2-8 2s-4-10-10.5-10S13.5 13 10.5 13s-5 2-9 6c-3 6 5.5 9 5.5 9z" fill="#06B6D4" />
        <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
      </g>
    </svg>
  )
};