import React from 'react';
import Skills from './components/Skills';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialMediaLinks from './components/SocialMediaLinks'; 
import Certifications from './components/Certifications'; 
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills /> 
      <SocialMediaLinks />
      <Certifications /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;