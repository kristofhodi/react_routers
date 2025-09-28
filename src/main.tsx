import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Szamologep from './Szamologep.tsx';
import Atvalto from './Atvalto.tsx';
import Homerseklet from './Homerseklet.tsx';
import Bmi from './Bmi.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/szamologep" element={<Szamologep />} />
            <Route path="/atvalto" element={<Atvalto />} />
            <Route path="/bmi" element={<Bmi />} />
            <Route path="/homerseklet" element={<Homerseklet />} />

            <Route path="*" element={<h1>404, az oldal nem található</h1>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
