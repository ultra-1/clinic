import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import BookSlots from './BookSlots';
import './App.css';

function App() {
  // Get current path using React Router's useLocation hook
  const { pathname } = window.location;

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Jeevan Project</h1>
        </header>
        <main>
          <Routes>
            {/* Route for /book-slots */}
            <Route path="/book-slots" element={<BookSlots />}/>
            {/* Default route (exact path /) */}
            <Route exact path="/" element={<AboutUs />} />
            {/* Handle unknown routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
