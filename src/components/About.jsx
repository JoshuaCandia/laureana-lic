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
          <p className="section-subtitle">
            Somos un equipo multidisciplinario de profesionales comprometidas
            con el desarrollo integral de las personas, desde la infancia hasta
            la vida adulta.
          </p>
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
