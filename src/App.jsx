import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Assuming you have a Home component
import Residential_Projects from './Pages/Residential_Projects';
import Footer from './Layout/Footer';
import CallistoSapphire from './Pages/CallistoSapphire';
import Alexa from './Pages/Alexa'; // Added import for Alexa
import TheCrest from './Pages/TheCrest'; // Added import for TheCrest
import NadiadBungalow from './Pages/NadiadBungalow.jsx';
import YogeshwarHomes2Bhk from './Pages/YogeshwarHomes2Bhk'; // Added import for YogeshwarHomes2Bhk
import Dharmadev from './Pages/Dharmadev.jsx'; // Added import for Dharmadev
import ShreejiHeights from './Pages/ShreejiHeights.jsx'; // Added import for ShreejiHeights
import SankalpGrace3 from './Pages/SankalpGrace3.jsx'; // Added import for SankalpGrace3
import YogeshwarHome from './Pages/YogeshwarHome';
import WhatsAppButton from './Layout/WhatsApp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Assuming you want the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential-projects" element={<Residential_Projects />} />
          <Route path="/yogeshwar-home/" element={<YogeshwarHome />} />
          <Route path="/callisto-sapphire/" element={<CallistoSapphire />} />
          <Route path="/alexa/" element={<Alexa />} />
          <Route path="/the-crest/" element={<TheCrest />} />
          <Route path="/nadiad-bungalow/" element={<NadiadBungalow />} />
          <Route path="/yogeshwar-homes-2-bhk/" element={<YogeshwarHomes2Bhk />} />
          <Route path="/dharmadev/" element={<Dharmadev />} />
          <Route path="/shreeji-heights/" element={<ShreejiHeights />} />
          <Route path="/sankalp-grace-3/" element={<SankalpGrace3 />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
