import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout.jsx';

import Home from '../pages/public/Home.jsx';
import About from '../pages/public/About.jsx';
import Programs from '../pages/public/Programs.jsx';
import Membership from '../pages/public/Membership.jsx';
import Gallery from '../pages/public/Gallery.jsx';
import Contact from '../pages/public/Contact.jsx';

function AppRoutes() {
  return (
    <Routes>
      {/* ── Public Website Routes ──────────────────────────────────── */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Catch-all fallback: redirect any unknown/legacy route to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
