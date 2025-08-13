import { m } from "framer-motion";
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
            Punto de partida cuenta con especialistas en orientación vocacional, selección de personal, evaluaciones neurocognitivas, asesoramiento institucional, tratamiento psicológico y psicopedagógico.
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
          
          {/* Placeholder para foto del equipo */}
          <div className="bg-secondary/50 rounded-lg p-8 mb-8 text-center">
            <div className="w-full h-64 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary/60">Foto del equipo de coordinación</span>
            </div>
            <p className="text-primary/60">Aquí irá la foto de las 3 coordinadoras</p>
          </div>
          
          {/* Perfiles del equipo */}
          <div className="grid md:grid-cols-3 gap-6">
            <TeamMemberCard
              name="Jimena Inés Castiñeiras"
              credentials={[
                "Lic en psicología (m.n: 32289 / mp: 82095)",
                "Especialista en evaluación neuropsicológica (universidad Favaloro)",
                "Docente (en la UTN)",
                "Diplomada en estrategias de comunicación y liderazgo organizacional (USAL)",
                "Selectora de personal (UBA)",
                "Esp. en clínica psicoanalítica de la infancia y la adolescencia (Asappia)"
              ]}
            />
            
            <TeamMemberCard
              name="M. Ricarda Cazón"
              credentials={[
                "Lic. en Psicopedagogía (RN: 7084/02 RP: 319)",
                "Profesora en Psicopedagogía",
                "Magister en neuropsicología infantil y neuroeducación (universidad de morón)",
                "Diplomatura en inteligencia emocional aplicada a la educación (universidad abierta interamericana)"
              ]}
            />
            
            <TeamMemberCard
              name="M. Laureana Cazón"
              credentials={[
                "Lic en psicología (mp: 86.305)",
                "Magister en Psicología organizacional con orientación gerencial (en curso)"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente para las tarjetas de miembros del equipo
const TeamMemberCard = ({ name, credentials }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-light">
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
        <h4 className="text-lg font-medium text-primary text-center mb-4">{name}</h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
        >
          Ver perfil
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-light">
            <ul className="space-y-2 text-sm text-primary/80">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default About;
