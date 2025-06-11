import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    slug: "orientacion-vocacional",
    title: "Orientación Vocacional",
    description: "Acompañamiento personalizado para descubrir tu vocación y elegir la carrera que mejor se adapte a tus intereses y habilidades.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    fullDescription: "Nuestro programa de orientación vocacional está diseñado para acompañar a adolescentes y jóvenes adultos en uno de los momentos más importantes de sus vidas: la elección de su futuro profesional. A través de un proceso integral que combina evaluaciones psicométricas, exploración de intereses y análisis de aptitudes, ayudamos a cada persona a descubrir su verdadera vocación.",
    target: "Adolescentes y jóvenes adultos (15-25 años)",
    duration: "4-6 sesiones individuales de 60 minutos",
    methodology: [
      "Entrevista inicial para conocer expectativas y contexto familiar",
      "Aplicación de tests de intereses vocacionales (Kuder, Holland)",
      "Evaluación de aptitudes específicas",
      "Exploración de valores personales y estilo de vida deseado",
      "Información detallada sobre carreras y campo laboral",
      "Elaboración de un plan de acción personalizado"
    ],
    benefits: [
      "Mayor claridad sobre intereses y aptitudes personales",
      "Reducción de la ansiedad ante la elección vocacional",
      "Información actualizada sobre carreras y mercado laboral",
      "Desarrollo de habilidades para la toma de decisiones",
      "Acompañamiento en el proceso de transición",
      "Seguimiento post-elección"
    ],
    includes: [
      "Evaluación psicométrica completa",
      "Informe detallado de resultados",
      "Guía de carreras personalizada",
      "Material informativo sobre universidades",
      "Sesión de seguimiento a los 6 meses",
      "Acceso a plataforma online con recursos"
    ]
  },
  // Add other services here with similar structure...
]

const ServicePage = () => {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Servicio no encontrado</h1>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const scrollToSection = (url) => {
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">
                  {service.title}
                </h1>
                <p className="text-primary/80 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="#detalles" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('#detalles')
                    }}
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.a>
                  <motion.a 
                    href="/#contact" 
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Consultar ahora
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Información General */}
        <section id="detalles" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Dirigido a</h3>
                <p className="text-primary/80">{service.target}</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Duración</h3>
                <p className="text-primary/80">{service.duration}</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Modalidad</h3>
                <p className="text-primary/80">Presencial y Online</p>
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
                ¿Estás interesado en este servicio?
              </h3>
              <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
                Contáctanos para obtener más información sobre {service.title.toLowerCase()} 
                y descubre cómo podemos ayudarte a alcanzar tus objetivos.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a 
                  href="/#contact" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar información
                </motion.a>
                <motion.a 
                  href="https://wa.me/5491123456789" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ServicePage