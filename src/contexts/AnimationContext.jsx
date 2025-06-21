import { LazyMotion, domAnimation } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext();

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation debe ser usado dentro de AnimationProvider");
  }
  return context;
};

export const AnimationProvider = ({ children }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Marcar como cargado después de un breve delay
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      clearTimeout(timer);
    };
  }, []);

  // Configuraciones de animación optimizadas
  const animationConfig = {
    // Animaciones de entrada
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.6,
        ease: "easeOut",
      },
    },

    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.6,
        ease: "easeOut",
      },
    },

    slideInLeft: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.8,
        ease: "easeOut",
      },
    },

    slideInRight: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.8,
        ease: "easeOut",
      },
    },

    // Animaciones de hover
    hover: {
      whileHover: isReducedMotion ? {} : { scale: 1.02, y: -2 },
      whileTap: isReducedMotion ? {} : { scale: 0.98 },
    },

    // Animaciones de tarjetas
    card: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.5,
        ease: "easeOut",
      },
      whileHover: isReducedMotion ? {} : { y: -4 },
    },

    // Animación de rebote suave
    bounce: {
      animate: isReducedMotion ? {} : { y: [0, -10, 0] },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },

    // Animaciones con Intersection Observer
    fadeInOnScroll: (isVisible) => ({
      initial: { opacity: 0, y: 30 },
      animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.6,
        ease: "easeOut",
      },
    }),

    slideUpOnScroll: (isVisible) => ({
      initial: { opacity: 0, y: 50 },
      animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.7,
        ease: "easeOut",
      },
    }),

    staggerContainer: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },

    staggerItem: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: isReducedMotion ? 0.1 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const value = {
    isReducedMotion,
    isLoaded,
    animationConfig,
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimationContext.Provider value={value}>
        {children}
      </AnimationContext.Provider>
    </LazyMotion>
  );
};
