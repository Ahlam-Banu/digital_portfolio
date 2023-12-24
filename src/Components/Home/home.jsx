import React from 'react';
import myPic from '../../images/MyPic.jpg';

const Home = () => {
  return (
    <div>
      <main>
        <div className="ellipse">
          <h1 style={{ fontSize: '16px', textAlign: 'center' }}>HI &#x1F44B; I'M AHLAM.</h1>
        </div>
        <div className="center-container">
          <img src={myPic} alt="My Picture" style={{ width: '363px', height: '525px' }} />
        </div>
        
        <a href="about.tsx">
          <button className="circle-button">
            <span className="arrow"></span>
          </button>
        </a>
        
        <span className="AboutMe">About Me</span> 
      </main>
    </div>
  );
};

export default Home;
