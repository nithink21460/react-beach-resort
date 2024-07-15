import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from '../Pages/Home';
import Room from '../Pages/Room';
import SingleRoom from '../Pages/SingleRoom';
import Error from '../Pages/Error';

// Import components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/" element={<Room />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;