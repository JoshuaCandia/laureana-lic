import { m } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { services } from "../mocks/services";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Animación de entrada de página
  useEffect(() => {
    document.body.classList.add('page-enter');
    return () => document.body.classList.remove('page-enter');
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Servicio no encontrado
          </h1>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const scrollToSection = (url) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categoryColor = service.category === 'educativo' ? 'blue' : 'green';

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  categoryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      categoryColor === 'blue' ? 'text-blue-600' : 'text-green-600'
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
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">
                  {service.title}
                </h1>
                <p className="text-primary/80 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.fullDescription && (
                  <p className="text-primary/80 leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  <m.a
                    href="#detalles"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#detalles");
                    }}
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </m.a>
                  <m.a
                    href="/#contact"
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Consultar ahora
                  </m.a>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Detalles del servicio */}
        <section id="detalles" className="py-16">
          <div className="container">
            {/* Highlights */}
            {service.highlights && (
              <div className="mb-12">
                <h3 className="text-2xl font-medium text-primary mb-6 text-center">
                  Características principales
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-light">
                      <div className="flex items-start">
                        <span className="text-accent mr-3 mt-1">👉</span>
                        <p className="text-primary/80">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Servicios específicos */}
            {service.services && (
              <div className="mb-12">
                <h3 className="text-2xl font-medium text-primary mb-6 text-center">
                  Servicios incluidos
                </h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-light">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-3 mt-1">•</span>
                        <span className="text-primary/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {service.target && (
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    categoryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 ${
                        categoryColor === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">
                    Dirigido a
                  </h3>
                  <p className="text-primary/80">{service.target}</p>
                </div>
              )}

              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  categoryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      categoryColor === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">
                  Modalidad
                </h3>
                <p className="text-primary/80">Presencial, Virtual e Híbrida</p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  categoryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      categoryColor === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">
                  Ubicación
                </h3>
                <p className="text-primary/80">CABA y Zona Oeste</p>
              </div>
            </div>

            {service.note && (
              <div className="bg-accent/10 p-6 rounded-lg text-center mb-12">
                <p className="text-primary font-medium">{service.note}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-medium text-primary mb-4">
                ¿Estás interesado en este servicio?
              </h3>
              <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
                Contáctanos para obtener más información sobre{" "}
                {service.title.toLowerCase()} y descubre cómo podemos ayudarte a
                alcanzar tus objetivos.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/#contact" className="btn-primary">
                  Solicitar información
                </a>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;