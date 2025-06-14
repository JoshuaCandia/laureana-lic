import React from "react";
import { LazyMotion, m, domAnimation } from "framer-motion";

const scrollToSection = (url) => {
  const element = document.querySelector(url);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="hero"
        className="min-h-screen relative overflow-hidden pt-16 md:pt-20 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-1/3 md:w-1/2 h-screen bg-secondary opacity-50 -z-10" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent opacity-10 -z-10" />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <m.div
              className="text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary mb-4 md:mb-6">
                Punto de Partida
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-accent font-serif italic mb-6 md:mb-8">
                Un inicio con propósito
              </p>
              <p className="text-base sm:text-lg md:text-xl text-primary/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Consultora especializada en educación y evaluaciones
                neurocognitivas. Brindamos orientación, evaluación y
                acompañamiento para potenciar el desarrollo de niños,
                adolescentes y adultos.
              </p>
              <m.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar ahora
              </m.a>
            </m.div>

            <m.div
              className="relative order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-md"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                  alt="Evaluación neurocognitiva y orientación educativa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-accent/20 rounded-lg -z-10" />
            </m.div>
          </div>

          {/* Elemento corregido para centrado en móvil */}
          <m.div
            className="w-full flex justify-center mt-12 md:mt-0 md:absolute md:bottom-4 md:left-0 md:right-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
              className="group flex flex-col items-center text-primary/60 hover:text-accent transition-colors"
            >
              <span className="text-sm mb-2">Conocé nuestro equipo</span>
              <m.div
                className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </m.div>
            </a>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Hero;
