import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    slug: "orientacion-vocacional",
    title: "Orientación Vocacional",
    description: "Acompañamiento personalizado para descubrir tu vocación y elegir la carrera que mejor se adapte a tus intereses y habilidades.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
  },
  {
    slug: "seleccion-personal",
    title: "Selección de Personal",
    description: "Procesos de reclutamiento y selección basados en competencias, utilizando herramientas psicométricas y entrevistas especializadas.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    slug: "evaluaciones-neurocognitivas",
    title: "Evaluaciones Neurocognitivas",
    description: "Evaluaciones integrales para niños y adolescentes con dificultades de aprendizaje, atención o desarrollo.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
  },
  {
    slug: "asesoramiento-escuelas",
    title: "Asesoramiento a Escuelas",
    description: "Consultoría especializada para instituciones educativas en estrategias de enseñanza y manejo de dificultades de aprendizaje.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    image: "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg"
  },
  {
    slug: "capacitacion-docente",
    title: "Capacitación Docente",
    description: "Formación en estrategias didácticas cerebro-compatibles para optimizar el proceso de enseñanza-aprendizaje.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
  },
  {
    slug: "neuroliderazgo",
    title: "Neuroliderazgo",
    description: "Capacitación para directivos en liderazgo basado en neurociencias, mejorando la gestión de equipos y toma de decisiones.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    slug: "charlas-padres",
    title: "Charlas para Padres",
    description: "Encuentros informativos sobre crianza respetuosa, manejo de límites y tolerancia a la frustración en niños y adolescentes.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    image: "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg"
  }
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (url) => {
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios especializados para acompañarte en cada etapa de tu desarrollo personal y profesional.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
                <p className="text-primary/80 leading-relaxed mb-4 text-sm">{service.description}</p>
                
                <Link 
                  to={`/servicio/${service.slug}`}
                  className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  Ver más información →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-warm rounded-lg">
            <h3 className="text-xl font-medium text-primary mb-4">¿Necesitas más información?</h3>
            <p className="text-primary/80 mb-6">
              Cada persona y situación es única. Contáctanos para una consulta personalizada 
              y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <motion.a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar consulta
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services