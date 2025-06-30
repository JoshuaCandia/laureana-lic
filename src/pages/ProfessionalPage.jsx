import { m } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { professionals } from "../mocks/professionals";

const ProfessionalPage = () => {
  const { slug } = useParams();
  const professional = professionals.find((p) => p.slug === slug);

  // Animación de entrada de página
  useEffect(() => {
    document.body.classList.add("page-enter");
    return () => document.body.classList.remove("page-enter");
  }, []);

  if (!professional) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Profesional no encontrado
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
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
                  {professional.name}
                </h1>
                <p className="text-xl text-accent font-medium mb-6">
                  {professional.title}
                </p>
                <p className="text-primary/80 text-lg leading-relaxed mb-4">
                  {professional.description}
                </p>
                {professional.fullDescription && (
                  <p className="text-primary/80 text-lg leading-relaxed mb-8">
                    {professional.fullDescription}
                  </p>
                )}
                <m.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar consulta
                </m.a>
              </m.div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
                Áreas de Especialización
              </h2>
              <div className="divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professional.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-light text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-primary font-medium">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oficinas */}
        {professional.offices && (
          <section className="py-16 bg-secondary/30">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
                  Oficinas de Atención
                </h2>
                <div className="divider" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {professional.offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-sm border border-light hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
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
                      <div>
                        <h3 className="text-lg font-medium text-primary mb-2">
                          {index === 0 ? "Zona Oeste" : "CABA - Puerto Madero"}
                        </h3>
                        <p className="text-primary/80 leading-relaxed">
                          {office}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-accent/10">
          <div className="container">
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-medium text-primary mb-4">
                ¿Quieres agendar una consulta?
              </h3>
              <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
                Contáctanos para coordinar una cita con {professional.name} y
                comenzar tu proceso de acompañamiento profesional.
              </p>
              <a href="/#contact" className="btn-primary">
                Contactar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProfessionalPage;
