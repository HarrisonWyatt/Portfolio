import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PortfolioHomePage from './Home.jsx'
import WebsitesPage from './pages/websites.jsx'
import SoftwarePage from './pages/software.jsx'
import SecurityPage from './pages/security.jsx'
import CloudPage from './pages/cloud.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHomePage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/cloud" element={<CloudPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
