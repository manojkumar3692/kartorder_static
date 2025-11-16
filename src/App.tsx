// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingClassic from "./pages/LandingClassic";
import LandingNeon from "./pages/LandingNeon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingClassic />} />
        <Route path="/neon" element={<LandingNeon />} />
        {/* fallback */}
        <Route path="*" element={<LandingClassic />} />
      </Routes>
    </BrowserRouter>
  );
}