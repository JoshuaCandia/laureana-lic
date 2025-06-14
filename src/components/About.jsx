import React from "react";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { professionals } from "../mocks/professionals";

const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container">
          <m.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Sobre Nosotras</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Somos un equipo multidisciplinario de profesionales comprometidas
              con el desarrollo integral de las personas, desde la infancia
              hasta la vida adulta.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <m.div
                key={professional.slug}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    Ver perfil completo →
                  </Link>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
