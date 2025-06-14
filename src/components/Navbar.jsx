import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Importamos useLocation y useNavigate

const navItems = [
  { name: "Inicio", url: "#hero" },
  { name: "Sobre Nosotras", url: "#about" },
  { name: "Servicios", url: "#services" },
  { name: "Contacto", url: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Obtenemos la ubicación actual
  const navigate = useNavigate(); // Obtenemos la función de navegación

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (url) => {
    // Si estamos en la página de inicio (/), simplemente hacemos scroll
    if (location.pathname === "/") {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no estamos en la página de inicio, navegamos a ella con el hash
      navigate(`/${url}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="/#hero" // Cambiamos a href estándar
              onClick={(e) => {
                e.preventDefault();
                navigate("/#hero"); // Navegamos a la página de inicio
              }}
              className="text-primary font-serif font-medium text-lg sm:text-xl md:text-2xl relative z-10"
            >
              Punto de Partida
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center text-primary p-2 rounded-lg hover:bg-stone-light relative z-10"
            aria-label="Toggle menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={`/${item.url}`} // Usamos href estándar
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.url);
                  }}
                  className="text-primary hover:text-accent transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.3 }}
            >
              <a
                href="/#contact" // Usamos href estándar
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-primary"
              >
                Contáctanos
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      <motion.div
        className="lg:hidden"
        initial={false}
        animate={
          isMobileMenuOpen
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm">
          <div className="container py-4 pt-20">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`/${item.url}`} // Usamos href estándar
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.url);
                    }}
                    className="text-primary hover:text-accent transition-colors block py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="/#contact" // Usamos href estándar
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="btn-primary w-full text-center mt-2"
                >
                  Contáctanos
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
