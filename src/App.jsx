import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AgeRating from './pages/AgeRating';
import AppStoreChecklist from './pages/AppStoreChecklist';
import MonetizationPolicy from './pages/MonetizationPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/age-rating" element={<AgeRating />} />
        <Route path="/app-store-checklist" element={<AppStoreChecklist />} />
        <Route path="/monetization-policy" element={<MonetizationPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
