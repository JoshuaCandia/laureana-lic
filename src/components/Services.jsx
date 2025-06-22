import { m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../contexts/AnimationContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { getServicesByCategory, getCategories } from "../mocks/services";
import AnimatedCard from "./AnimatedCard";

const Services = () => {
  const { animationConfig } = useAnimation();
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  const categories = getCategories();

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
          <p className="section-subtitle mb-8">
            Ofrecemos una variedad de servicios dirigidos a individuos, instituciones educativas y organizaciones. 
            Nuestro trabajo se basa en principios de las neurociencias, la innovación educativa y la psicología 
            organizacional, buscando siempre intervenciones efectivas, éticas y basadas en la evidencia.
          </p>
        </m.div>

        {categories.map((category, categoryIndex) => {
          const categoryServices = getServicesByCategory(category.key);
          
          return (
            <div key={category.key} className="mb-20">
              {/* Título de categoría */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                    category.key === 'educativo' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {category.key === 'educativo' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Servicios de la categoría */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => (
                  <AnimatedCard key={service.slug} index={index + categoryIndex * 10}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        category.key === 'educativo' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 ${
                            category.key === 'educativo' ? 'text-blue-600' : 'text-green-600'
                          }`}
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
                      <h4 className="text-xl font-medium text-primary mb-3">
                        {service.title}
                      </h4>
                      <p className="text-primary/80 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>

                      {service.highlights && (
                        <div className="mb-4">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start mb-2">
                              <span className="text-accent mr-2 mt-1 text-xs">👉</span>
                              <span className="text-primary/70 text-xs">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {service.target && (
                        <p className="text-accent font-medium text-sm mb-4">
                          Ideal para: {service.target}
                        </p>
                      )}

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
            </div>
          );
        })}

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