import React from 'react';
import './about.css';
import ImageSwitcher from "../ImageSwitcher/imageswitcher";
import secondPic from '../../images/Picture2.jpg';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Portfolio from '../Portfolio/portfolio';
import p1 from "../../images/p1.jpeg";
import p2 from "../../images/p2.jpeg";
import p3 from "../../images/p3.jpeg";
import p4 from "../../images/p4.jpeg";


const About = () => {
  const images5 = [
    p1,
    p2,
    p3,
    p4,
  ];

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me - Ahlam Banu</title>
      </head>

      <body>
        <main>
          <div className="SmallEllipse"></div>
          <h1 style={{ fontSize: '20px', position: 'absolute', left: '70px', top: '130px' }}>MY BACKGROUND</h1>
          <p style={{ position: 'absolute', left: '80px', top: '160px' }}>
          Embarking on my IT journey at a young age, I'm now deeply immersed in software development.<br />Based in Finland with Indian-Moroccan roots, I cherish diverse perspectives and find joy in exploring new cultures through my travels.
          </p>
          <p style={{ position: 'absolute', left: '650px', top: '230px' }}>Collaboration is the key of my growth, refining communication, cooperation, and attitude towards challenges. Diligence, reliability, and dedication to self-improvement characterize my approach.<br />
          <br />Moving forward, I aspire to flourish within a culture of continuous learning, consistently staying ahead in this dynamic realm of technology.
          </p>
          <div className="center-container">
            <h1 style={{ fontSize: '82px', position: 'absolute', top: '50px', fontWeight: 'normal' }}>ABOUT ME</h1>
            <div style={{ position: 'absolute', left: '100px', top: '220px' }}>
           <ImageSwitcher images={images5}/>
           </div>
          </div>
          
          <Link to="/portfolio">
            <div className="BigEllipse">
              <p style={{ color: 'black', textAlign:'center', fontSize:'25px' }}>VIEW MY PORTFOLIO</p>
            </div>
          </Link>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </main>
      </body>
    </div>
  );
};

export default About;
