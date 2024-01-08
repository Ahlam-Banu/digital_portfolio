import React from 'react';
import myPic from '../../images/me.jpeg';
import '../Home/home.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from '../About/about';

const Home = () => {
  return (
      <div>
      <main>
        <div className="ellipse">
          <h1 style={{ fontSize: '16px', textAlign: 'center' }}>HI &#x1F44B; I'M AHLAM.</h1>
        </div>
        <div className="center-container">
          <img src={myPic} alt="Me" style={{ width: '363px', height: '525px' }} />
        </div>
        
        <Link to="/about">
          <button className="circle-button">
            <span className="arrow"></span>
          </button>
        </Link>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
        
        <span className="AboutMe">About Me</span> 
      </main>
    </div>
    );
  };
    

export default Home;
