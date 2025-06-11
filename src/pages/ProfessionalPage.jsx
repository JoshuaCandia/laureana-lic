import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const professionals = [
  {
    slug: "maria-elena-rodriguez",
    name: "Dra. María Elena Rodríguez",
    title: "Neuropsicóloga Clínica",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    description:
      "Especialista en evaluaciones neurocognitivas y desarrollo infantil con más de 15 años de experiencia en el campo de la neuropsicología clínica.",
    strengths: [
      "Evaluaciones neurocognitivas integrales",
      "Diagnóstico diferencial de trastornos del neurodesarrollo",
      "Intervención temprana en dificultades de aprendizaje",
      "Trabajo interdisciplinario con equipos médicos",
      "Investigación en neuroplasticidad infantil",
    ],
    cv: {
      education: [
        "Doctorado en Neuropsicología - Universidad de Buenos Aires (2008)",
        "Licenciatura en Psicología - Universidad de Buenos Aires (2003)",
        "Especialización en Neuropsicología Infantil - Hospital Italiano (2005)",
      ],
      experience: [
        "Neuropsicóloga Senior - Hospital de Niños Ricardo Gutiérrez (2010-presente)",
        "Coordinadora del Área de Evaluación Neurocognitiva - Punto de Partida (2018-presente)",
        "Docente de Neuropsicología - Universidad del Salvador (2012-presente)",
        "Investigadora - CONICET (2015-presente)",
      ],
      certifications: [
        "Certificación en WISC-V y WAIS-IV",
        "Especialista en Test de Rorschach",
        "Formación en Terapia Cognitivo-Conductual",
        "Certificación en Mindfulness para niños",
      ],
      publications: [
        "Evaluación neurocognitiva en trastornos del espectro autista (2022)",
        "Intervención temprana en dificultades de aprendizaje (2021)",
        "Neuroplasticidad y desarrollo cognitivo (2020)",
      ],
    },
  },
  {
    slug: "ana-sofia-martinez",
    name: "Lic. Ana Sofía Martínez",
    title: "Psicopedagoga y Orientadora Vocacional",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
    description:
      "Experta en orientación vocacional y estrategias de aprendizaje, dedicada a acompañar a jóvenes en la construcción de su proyecto de vida.",
    strengths: [
      "Orientación vocacional integral",
      "Diseño de estrategias de aprendizaje personalizadas",
      "Capacitación docente en neuroeducación",
      "Intervención en dificultades de aprendizaje",
      "Asesoramiento familiar en procesos educativos",
    ],
    cv: {
      education: [
        "Licenciatura en Psicopedagogía - Universidad Católica Argentina (2011)",
        "Especialización en Orientación Vocacional - Universidad de Belgrano (2013)",
        "Maestría en Neuroeducación - Universidad Favaloro (2016)",
      ],
      experience: [
        "Coordinadora de Orientación Vocacional - Punto de Partida (2018-presente)",
        "Psicopedagoga - Colegio San Patricio (2012-2018)",
        "Orientadora Vocacional - Centro de Orientación Vocacional UCA (2013-presente)",
        "Capacitadora en Neuroeducación - Ministerio de Educación CABA (2017-presente)",
      ],
      certifications: [
        "Certificación en Test de Intereses y Aptitudes",
        "Especialista en Técnicas de Estudio",
        "Formación en Coaching Educativo",
        "Certificación en Mindfulness Educativo",
      ],
      publications: [
        "Orientación vocacional en la era digital (2023)",
        "Estrategias de aprendizaje basadas en neurociencias (2022)",
        "El rol de la familia en la elección vocacional (2021)",
      ],
    },
  },
  {
    slug: "carolina-fernandez",
    name: "Lic. Carolina Fernández",
    title: "Psicóloga Organizacional",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    description:
      "Especialista en selección de personal y neuroliderazgo, con amplia experiencia en el desarrollo de equipos de alto rendimiento.",
    strengths: [
      "Selección de personal por competencias",
      "Desarrollo de liderazgo organizacional",
      "Evaluación de clima laboral",
      "Diseño de programas de capacitación",
      "Consultoría en gestión del cambio",
    ],
    cv: {
      education: [
        "Licenciatura en Psicología - Universidad del Salvador (2013)",
        "Especialización en Psicología Organizacional - Universidad de Palermo (2015)",
        "Maestría en Neuroliderazgo - Universidad Austral (2018)",
      ],
      experience: [
        "Consultora Senior en RRHH - Punto de Partida (2019-presente)",
        "Gerente de Recursos Humanos - Empresa Multinacional (2016-2019)",
        "Analista de Selección - Consultora de RRHH (2013-2016)",
        "Facilitadora de Neuroliderazgo - Diversos clientes corporativos (2018-presente)",
      ],
      certifications: [
        "Certificación en Assessment Center",
        "Especialista en Evaluación 360°",
        "Formación en Coaching Ejecutivo",
        "Certificación en Neuroliderazgo",
      ],
      publications: [
        "Neuroliderazgo: La ciencia del liderazgo efectivo (2023)",
        "Selección por competencias en la era digital (2022)",
        "Gestión del talento humano (2021)",
      ],
    },
  },
];

const ProfessionalPage = () => {
  const { slug } = useParams();
  const professional = professionals.find((p) => p.slug === slug);

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
              <motion.div
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
              </motion.div>

              <motion.div
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
                <p className="text-primary/80 text-lg leading-relaxed mb-8">
                  {professional.description}
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
                  Agendar consulta
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
                Áreas de Especialización
              </h2>
              <div className="divider" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professional.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-light text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CV Resumido */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
                Curriculum Vitae
              </h2>
              <div className="divider" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formación */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-primary mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  Formación Académica
                </h3>
                <ul className="space-y-4">
                  {professional.cv.education.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-primary/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Experiencia */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-primary mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                  Experiencia Profesional
                </h3>
                <ul className="space-y-4">
                  {professional.cv.experience.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-primary/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Certificaciones */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-primary mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Certificaciones
                </h3>
                <ul className="space-y-4">
                  {professional.cv.certifications.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-primary/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Publicaciones */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-primary mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent mr-3"
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
                  Publicaciones Recientes
                </h3>
                <ul className="space-y-4">
                  {professional.cv.publications.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-primary/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="bg-accent/10 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-medium text-primary mb-4">
                ¿Quieres agendar una consulta?
              </h3>
              <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
                Contáctanos para coordinar una cita con{" "}
                {professional.name.split(" ")[1]}{" "}
                {professional.name.split(" ")[2]}y comenzar tu proceso de
                acompañamiento profesional.
              </p>
              <motion.a
                href="/#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar ahora
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProfessionalPage;
