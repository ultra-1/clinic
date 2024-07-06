import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './AboutUs';
import BookSlots from './BookSlots';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <button onClick={() => scrollToSection('about-us')}>About</button>
            <button onClick={() => scrollToSection('contact-us')}>Contact</button>
          </nav>
        </header>
        <main>
          <section id="about-us">
            <AboutUs />
          </section>
          
          <section id="contact-us">
            <ContactUs />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;