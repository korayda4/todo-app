export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 350,
} as const;

export const EASING = {
  EASE_OUT: [0.16, 1, 0.3, 1],
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
} as const;

export const TODO_ANIMATION = {
  INITIAL: { opacity: 0, y: -10, scale: 0.95 },
  ANIMATE: { opacity: 1, y: 0, scale: 1 },
  EXIT: { opacity: 0, scale: 0.95 },
} as const;
