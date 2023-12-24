import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './Components/About/about'
import Home from './Components/Home/home'
import Portfolio from './Components/Portfolio/portfolio';
import linkedInIcon from './icons/linkedin.png';
import FBicon from './icons/facebook.png';
import emailIcon from './icons/email.png';
import GHicon from './icons/github.png';
const CV = '/CV_Ahlam.pdf';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Ahlam Fazlu Rahman</h1>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li className="right underline"><a href={CV} target="_blank" rel="noopener noreferrer">Download CV</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes> {/* Add the Routes component here */}
            <Route path="/home" exact element={<Home />} /> {/* Wrap Route inside Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes> {/* Close the Routes component */}
        </main>
        <footer>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ahlam-banu-2208401a3/"><img src={linkedInIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/Ahlam-Banu"><img src={GHicon} alt="GitHub" /></a>
            <a href="mailto:ahlambanu.univ@gmail.com"><img src={emailIcon} alt="E-mail"/></a>
            <a href="https://www.facebook.com/"><img src={FBicon} alt="Facebook" /></a>
          </div>
          <p>&copy; 2024 All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
