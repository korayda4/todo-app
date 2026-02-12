'use client';

import { useCallback } from 'react';

export const useAnimations = () => {
  const animateIn = useCallback((element: HTMLElement) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px) scale(0.95)';

    requestAnimationFrame(() => {
      element.style.transition = 'all 0.3s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) scale(1)';
    });
  }, []);

  const animateOut = useCallback((element: HTMLElement, callback: () => void) => {
    element.style.transition = 'all 0.2s ease-out';
    element.style.opacity = '0';
    element.style.transform = 'scale(0.95)';

    setTimeout(() => {
      callback();
    }, 200);
  }, []);

  return {
    animateIn,
    animateOut,
    shouldAnimate: true,
  };
};
