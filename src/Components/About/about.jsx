import React from 'react';
import './about.css';
import secondPic from '../../images/Picture2.jpg';

const About = () => {
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
          <h1 style={{ fontSize: '20px', position: 'absolute', left: '70px', top: '140px' }}>MY BACKGROUND</h1>
          <p style={{ position: 'absolute', left: '80px', top: '160px' }}>
            The quick brown fox jumps over the lazy dog.<br />
            This sentence is Often used as a test to <br />
            demonstrate. he quick brown fox jumps over <br />
            the lazy dog. This sentence is Often used as a <br />
            to demonstrate.
          </p>
          <div className="center-container">
            <h1 style={{ fontSize: '82px', position: 'absolute', top: '210px', fontWeight: 'normal' }}>ABOUT ME</h1>
            <img src={secondPic} alt="Second" style={{ width: '363px', height: '525px' }} />
          </div>
          <a href="portfolio.jsx">
            <div className="BigEllipse">
              <p style={{ color: 'black' }}>VIEW MY PORTFOLIO</p>
            </div>
          </a>
        </main>
      </body>
    </div>
  );
};

export default About;
