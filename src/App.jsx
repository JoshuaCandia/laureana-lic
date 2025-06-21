import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimationProvider } from "./contexts/AnimationContext";
import HomePage from "./pages/HomePage";
import ProfessionalPage from "./pages/ProfessionalPage";
import ServicePage from "./pages/ServicePage";

function App() {
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
