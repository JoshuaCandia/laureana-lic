import { m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../contexts/AnimationContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { professionals } from "../mocks/professionals";
import AnimatedCard from "./AnimatedCard";

const About = () => {
  const { animationConfig } = useAnimation();
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <m.div
          ref={sectionRef}
          className="text-center mb-16"
          {...animationConfig.slideUpOnScroll(isSectionVisible)}
        >
          <h2 className="section-title">Sobre Nosotras</h2>
          <div className="divider" />
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-primary/80 leading-relaxed">
              <strong>PUNTO DE PARTIDA</strong> es una consultora formada por profesionales de la salud mental y la educación, 
              con amplia trayectoria en orientación vocacional, selección de personal educativo, evaluaciones neurocognitivas 
              y asesoramiento institucional.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Creemos que cada inicio merece acompañamiento, escucha y herramientas concretas para tomar decisiones con propósito.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Trabajamos con niños, adolescentes, familias, instituciones educativas y organizaciones, poniendo foco en el 
              desarrollo humano, el bienestar y el crecimiento profesional y personal.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Nuestro trabajo se basa en la escucha activa, el respeto por los tiempos de cada proceso y el diseño de 
              intervenciones a medida, pensadas para potenciar recursos y abrir caminos.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Trabajamos en conjunto desde una mirada integral y articulada, ofreciendo espacios de evaluación, orientación 
              y asesoramiento para acompañar a personas e instituciones en la toma de decisiones, la mejora del desempeño 
              y el bienestar general.
            </p>
            <p className="text-primary/80 leading-relaxed font-medium">
              Contamos con oficinas en Ciudad de Buenos Aires y Zona Oeste, nuestro trabajo se desarrolla de forma 
              presencial, virtual e híbrida.
            </p>
          </div>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <AnimatedCard key={professional.slug} index={index}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-primary mb-2">
                  {professional.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {professional.title}
                </p>
                <p className="text-primary/80 text-sm mb-4">
                  {professional.description}
                </p>

                <Link
                  to={`/profesional/${professional.slug}`}
                  className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-200"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;