import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimationProvider } from "./contexts/AnimationContext";
import HomePage from "./pages/HomePage";
import ProfessionalPage from "./pages/ProfessionalPage";
import ServicePage from "./pages/ServicePage";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Solo hacer scroll al inicio si NO estamos en la home
    if (location.pathname !== "/") {
      // Animación suave hacia arriba
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [location.pathname]);

  return (
    <AnimationProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profesional/:slug" element={<ProfessionalPage />} />
          <Route path="/servicio/:slug" element={<ServicePage />} />
        </Routes>
      </div>
    </AnimationProvider>
  );
}

export default App;