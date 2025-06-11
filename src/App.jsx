import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfessionalPage from './pages/ProfessionalPage'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profesional/:slug" element={<ProfessionalPage />} />
        <Route path="/servicio/:slug" element={<ServicePage />} />
      </Routes>
    </div>
  )
}

export default App