import { AnimatePresence, m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../contexts/AnimationContext";
import { professionals } from "../mocks/professionals";
import AnimatedCard from "./AnimatedCard";

const About = () => {
  const { animationConfig } = useAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <m.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={animationConfig.slideUp.transition}
        >
          <h2 className="section-title">Sobre Nosotras</h2>
          <div className="divider" />
          <p className="section-subtitle mb-8">
            Punto de partida cuenta con especialistas en orientación vocacional,
            selección de personal, evaluaciones neurocognitivas, asesoramiento
            institucional, tratamiento psicológico y psicopedagógico.
          </p>
        </m.div>

        {/* Sección de Coordinación */}
        <m.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ ...animationConfig.slideUp.transition, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-8 text-center">
            Coordinación
          </h3>

          {/* Fotos del equipo de coordinación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-3 transition-transform hover:scale-105 max-w-[200px]">
                <img
                  src="/jimena_ines.jpeg"
                  alt="Jimena Inés Castiñeiras - Lic en Psicología"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-center text-primary font-medium text-sm">
                Jimena Inés Castiñeiras
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-3 transition-transform hover:scale-105 max-w-[200px]">
                <img
                  src="/ricarda_cazon.jpeg"
                  alt="Maria Ricarda Cazón - Lic. en Psicopedagogía"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-center text-primary font-medium text-sm">
                Maria Ricarda Cazón
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-3 transition-transform hover:scale-105 max-w-[200px]">
                <img
                  src="/laureana_cazon.jpeg"
                  alt="M. Laureana Cazón - Lic en Psicología"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-center text-primary font-medium text-sm">
                M. Laureana Cazón
              </p>
            </div>
          </div>

          {/* Perfiles del equipo */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
            <TeamMemberCard
              key="jimena"
              name="Jimena Inés Castiñeiras"
              index={0}
              credentials={[
                "Lic en Psicología (MN: 32289 / MP: 82095)",
                "Especialista en evaluación neuropsicológica (Universidad Favaloro)",
                "Docente (UTN)",
                "Diplomada en estrategias de comunicación y liderazgo organizacional (USAL)",
                "Selectora de personal (UBA)",
                "Esp. en clínica psicoanalítica de la infancia y la adolescencia (Asappia)",
              ]}
            />

            <TeamMemberCard
              key="ricarda"
              name="Maria Ricarda Cazón"
              index={1}
              credentials={[
                "Lic. en Psicopedagogía (RN: 7084/02 RP: 319)",
                "Profesora en Psicopedagogía",
                "Magister en neuropsicología infantil y neuroeducación (UM)",
                "Diplomatura en inteligencia emocional aplicada a la educación (UAI)",
              ]}
            />

            <TeamMemberCard
              key="laureana"
              name="M. Laureana Cazón"
              index={2}
              credentials={[
                "Lic en Psicología (mp: 86.305)",
                "Magister en Psicología organizacional con orientación gerencial (UAI)",
              ]}
            />
          </div>
        </m.div>
      </div>
    </section>
  );
};

// Componente para las tarjetas de miembros del equipo
const TeamMemberCard = ({ name, credentials, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <m.div
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
        <h4 className="text-lg font-medium text-primary text-center mb-4">
          {name}
        </h4>
        <m.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver perfil
          <m.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </m.svg>
        </m.button>

        <AnimatePresence>
          {isExpanded && (
            <m.div
              className="mt-4 pt-4 border-t border-light overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="space-y-2 text-sm text-primary/80">
                {credentials.map((credential, idx) => (
                  <m.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{credential}</span>
                  </m.li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
};
export default About;
