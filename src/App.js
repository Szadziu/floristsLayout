import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryRose from './routes/galleryRose';
import StartView from './routes/startView';

const App = () => {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/roses" element={<GalleryRose />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default App;
