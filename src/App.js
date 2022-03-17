import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryRose from './routes/galleryRose';
import StartView from './routes/startView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartView />} />
        <Route path="/roses" element={<GalleryRose />} />
      </Routes>
    </Router>
  );
};

export default App;
