import { m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../contexts/AnimationContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { services } from "../mocks/services";
import AnimatedCard from "./AnimatedCard";

const Services = () => {
  const { animationConfig } = useAnimation();
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  const scrollToSection = (url) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="container">
        <m.div
          ref={sectionRef}
          className="text-center mb-16"
          {...animationConfig.slideUpOnScroll(isSectionVisible)}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios especializados para
            acompañarte en cada etapa de tu desarrollo personal y profesional.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.slug} index={index}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-primary/80 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>

                <Link
                  to={`/servicio/${service.slug}`}
                  className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-200"
                >
                  Ver más información →
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <m.div
          className="mt-16 text-center"
          {...animationConfig.slideUpOnScroll(isSectionVisible)}
          transition={{
            ...animationConfig.slideUpOnScroll(isSectionVisible).transition,
            delay: 0.5,
          }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-warm rounded-lg">
            <h3 className="text-xl font-medium text-primary mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-primary/80 mb-6">
              Cada persona y situación es única. Contáctanos para una consulta
              personalizada y descubre cómo podemos ayudarte a alcanzar tus
              objetivos.
            </p>
            <m.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="btn-primary"
              {...animationConfig.hover}
            >
              Solicitar consulta
            </m.a>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Services;
