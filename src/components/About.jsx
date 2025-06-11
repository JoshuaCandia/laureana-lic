import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const professionals = [
  {
    slug: "maria-elena-rodriguez",
    name: "Dra. María Elena Rodríguez",
    title: "Neuropsicóloga Clínica",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    description: "Especialista en evaluaciones neurocognitivas y desarrollo infantil",
    strengths: [
      "Evaluaciones neurocognitivas integrales",
      "Diagnóstico diferencial de trastornos del neurodesarrollo",
      "Intervención temprana en dificultades de aprendizaje",
      "Trabajo interdisciplinario con equipos médicos",
      "Investigación en neuroplasticidad infantil"
    ]
  },
  {
    slug: "ana-sofia-martinez",
    name: "Lic. Ana Sofía Martínez",
    title: "Psicopedagoga y Orientadora Vocacional",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
    description: "Experta en orientación vocacional y estrategias de aprendizaje",
    strengths: [
      "Orientación vocacional integral",
      "Diseño de estrategias de aprendizaje personalizadas",
      "Capacitación docente en neuroeducación",
      "Intervención en dificultades de aprendizaje",
      "Asesoramiento familiar en procesos educativos"
    ]
  },
  {
    slug: "carolina-fernandez",
    name: "Lic. Carolina Fernández",
    title: "Psicóloga Organizacional",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    description: "Especialista en selección de personal y neuroliderazgo",
    strengths: [
      "Selección de personal por competencias",
      "Desarrollo de liderazgo organizacional",
      "Evaluación de clima laboral",
      "Diseño de programas de capacitación",
      "Consultoría en gestión del cambio"
    ]
  }
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre Nosotras</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Somos un equipo multidisciplinario de profesionales comprometidas con el desarrollo 
            integral de las personas, desde la infancia hasta la vida adulta.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {professionals.map((professional, index) => (
            <motion.div
              key={professional.slug}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-primary mb-2">{professional.name}</h3>
                <p className="text-accent font-medium mb-3">{professional.title}</p>
                <p className="text-primary/80 text-sm mb-4">{professional.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary mb-2 text-sm">Especialidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {professional.strengths.slice(0, 3).map((strength, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/profesional/${professional.slug}`}
                  className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About