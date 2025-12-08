// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingClassic from "./pages/LandingClassic";
import LandingNeon from "./pages/LandingNeon";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingClassic />} />
        <Route path="/neon" element={<LandingNeon />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* fallback */}
        <Route path="*" element={<LandingClassic />} />
      </Routes>
    </BrowserRouter>
  );
}