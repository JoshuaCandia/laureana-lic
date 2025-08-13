@@ .. @@
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre Nosotras</h2>
-          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
-            En Punto de Partida, creemos que cada persona tiene un potencial único por descubrir. 
-            Nuestro equipo multidisciplinario combina experiencia clínica, educativa y organizacional 
-            para ofrecer un enfoque integral y personalizado en cada intervención.
+          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
+            Punto de partida cuenta con especialistas en orientación vocacional, selección de personal, evaluaciones neurocognitivas, asesoramiento institucional, tratamiento psicológico y psicopedagógico.
           </p>
         </div>
+        
+        {/* Coordinación Section */}
+        <div className="mb-16">
+          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Coordinación</h3>
+          
+          {/* Placeholder for team photo */}
+          <div className="bg-gray-100 rounded-lg p-8 mb-8 text-center">
+            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
+              <span className="text-gray-500">Foto del equipo de coordinación</span>
+            </div>
+            <p className="text-gray-600">Aquí irá la foto de las 3 coordinadoras</p>
+          </div>
+          
+          {/* Team profiles buttons */}
+          <div className="grid md:grid-cols-3 gap-6">
+            <TeamMemberCard
+              name="Jimena Inés Castiñeiras"
+              credentials={[
+                "Lic en psicología (m.n: 32289 / mp: 82095)",
+                "Especialista en evaluación neuropsicológica (universidad Favaloro)",
+                "Docente (en la UTN)",
+                "Diplomada en estrategias de comunicación y liderazgo organizacional (USAL)",
+                "Selectora de personal (UBA)",
+                "Esp. en clínica psicoanalítica de la infancia y la adolescencia (Asappia)"
+              ]}
+            />
+            
+            <TeamMemberCard
+              name="M. Ricarda Cazón"
+              credentials={[
+                "Lic. en Psicopedagogía (RN: 7084/02 RP: 319)",
+                "Profesora en Psicopedagogía",
+                "Magister en neuropsicología infantil y neuroeducación (universidad de morón)",
+                "Diplomatura en inteligencia emocional aplicada a la educación (universidad abierta interamericana)"
+              ]}
+            />
+            
+            <TeamMemberCard
+              name="M. Laureana Cazón"
+              credentials={[
+                "Lic en psicología (mp: 86.305)",
+                "Magister en Psicología organizacional con orientación gerencial (en curso)"
+              ]}
+            />
+          </div>
import { Users, Heart, Target, User, ChevronDown, ChevronUp } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  credentials: string[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, credentials }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">{name}</h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Ver perfil
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <ul className="space-y-2 text-sm text-gray-600">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
 
         <div className="grid md:grid-cols-3 gap-8">