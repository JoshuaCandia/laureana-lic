import { m } from "framer-motion";
import React from "react";

const Contact = () => {
  // Función para abrir WhatsApp con mensaje predefinido
  const openWhatsApp = (formData) => {
    const message = `Hola, me interesa contactarlos desde su sitio web:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}
Servicio de interés: ${formData.service || "No especificado"}
Mensaje: ${formData.message}

¿Podrían contactarme?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Función para abrir Google Forms
  const openGoogleForm = () => {
    // Reemplaza esta URL con la URL de tu Google Form
    const googleFormUrl = "https://forms.gle/TU_FORM_ID_AQUI";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Contacto</h2>
          <div className="divider" />
          <p className="section-subtitle">
            ¿Tienes alguna consulta o quieres agendar una cita? Elige la forma
            que prefieras para contactarnos.
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-light">
              <h3 className="text-2xl font-medium text-primary mb-8 text-center">
                Formas de contacto
              </h3>

              <div className="space-y-6">
                {/* Opción 1: Google Forms */}
                <m.div
                  className="group p-6 border-2 border-light rounded-xl hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-accent/10 to-accent/5"
                  onClick={openGoogleForm}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mr-4 group-hover:bg-accent/90 transition-colors duration-300">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14,2 14,8 20,8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">
                        Formulario de contacto
                      </h4>
                      <p className="text-sm text-primary/70">
                        Completa nuestro formulario online
                      </p>
                    </div>
                  </div>
                  <p className="text-primary/80 text-sm leading-relaxed">
                    Llena nuestro formulario con tus datos y consulta. Te
                    responderemos en menos de 24 horas con toda la información
                    que necesites.
                  </p>
                </m.div>

                {/* Opción 2: WhatsApp Directo */}
                <m.div
                  className="group p-6 border-2 border-light rounded-xl hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-accent/10 to-accent/5"
                  onClick={() =>
                    openWhatsApp({
                      name: "Usuario del sitio web",
                      email: "No proporcionado",
                      phone: "",
                      service: "Consulta general",
                      message:
                        "Hola, me gustaría obtener más información sobre sus servicios.",
                    })
                  }
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mr-4 group-hover:bg-accent/90 transition-colors duration-300">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">
                        WhatsApp directo
                      </h4>
                      <p className="text-sm text-primary/70">
                        Chatea con nosotros ahora
                      </p>
                    </div>
                  </div>
                  <p className="text-primary/80 text-sm leading-relaxed">
                    Envíanos un mensaje directo por WhatsApp. Te responderemos
                    al instante con la información que necesites.
                  </p>
                </m.div>

                {/* Opción 3: Email directo */}
                <m.div
                  className="group p-6 border-2 border-light rounded-xl hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-accent/10 to-accent/5"
                  onClick={() =>
                    window.open(
                      "mailto:info@puntodepartida.com?subject=Consulta desde sitio web&body=Hola, me gustaría obtener más información sobre sus servicios.",
                      "_blank"
                    )
                  }
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mr-4 group-hover:bg-accent/90 transition-colors duration-300">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">
                        Email directo
                      </h4>
                      <p className="text-sm text-primary/70">
                        Envíanos un correo
                      </p>
                    </div>
                  </div>
                  <p className="text-primary/80 text-sm leading-relaxed">
                    Abre tu cliente de email con un mensaje predefinido listo
                    para enviar. Ideal si prefieres el contacto tradicional.
                  </p>
                </m.div>
              </div>
            </div>
          </m.div>

          {/* Columna derecha con las dos cards */}
          <div className="flex flex-col justify-between h-full">
            {/* Card 1: Ubicación */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-light">
                <h3 className="text-xl font-medium text-primary mb-6 text-center">
                  Nuestras Oficinas
                </h3>

                <div className="space-y-6">
                  {/* Oficina Ituzaingó - Primera */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent"
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
                      <h4 className="font-semibold text-primary text-base mb-2">
                        Zona Oeste - Ituzaingó
                      </h4>
                      <p className="text-primary/80 leading-relaxed text-sm">
                        General Félix Olazábal 1044 3° piso Oficina 308.
                        <br />
                        Edificio Los Manzanos.
                        <br />
                        (1714) Ituzaingó Norte - Zona Oeste
                      </p>
                    </div>
                  </div>

                  {/* Oficina CABA - Segunda */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent"
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
                      <h4 className="font-semibold text-primary text-base mb-2">
                        CABA - Puerto Madero
                      </h4>
                      <p className="text-primary/80 leading-relaxed text-sm">
                        Alicia M. de Justo 1150 2° piso Oficina 205 A<br />
                        (C1107AAX) Puerto Madero - CABA
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 text-xs transition-colors px-3 py-1.5 border border-accent/30 rounded-lg hover:bg-accent/5"
                    >
                      <svg
                        className="h-3 w-3 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Ver ubicaciones en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Card 2: Horarios */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-light">
                <h3 className="text-xl font-medium text-primary mb-6 text-center">
                  Horarios de atención
                </h3>

                <div className="flex flex-col items-center text-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary text-base mb-3">
                        Cuándo atendemos
                      </h4>
                      <div className="text-primary/80 leading-relaxed space-y-2">
                        <div className="p-2 bg-accent/5 rounded-lg">
                          <p className="font-medium text-primary text-sm">
                            Lunes a Viernes
                          </p>
                          <p className="text-base">9:00 - 19:00</p>
                        </div>
                        <div className="p-2 bg-accent/5 rounded-lg">
                          <p className="font-medium text-primary text-sm">
                            Sábados
                          </p>
                          <p className="text-base">9:00 - 13:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
