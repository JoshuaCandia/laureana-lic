import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../mocks/services";

const Services = () => {
  const scrollToSection = (url) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios especializados para
            acompañarte en cada etapa de tu desarrollo personal y profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  Ver más información →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-warm rounded-lg">
            <h3 className="text-xl font-medium text-primary mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-primary/80 mb-6">
              Cada persona y situación es única. Contáctanos para una consulta
              personalizada y descubre cómo podemos ayudarte a alcanzar tus
              objetivos.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar consulta
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
