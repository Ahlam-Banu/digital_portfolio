import React from "react";
import VideoPlayer from "../../VideoPlayer/videoplayer";
import ImageSwitcher from "../ImageSwitcher/imageswitcher";
import "./portfolio.css";
import ahlamgpt from "../../images/ahlamgpt.jpg"
import ahlamgpt2 from "../../images/ahlamgpt2.png"
import scms from "../../images/StudentCourseMS.jpg"
import pingpong from "../../images/TTgame.jpg"
import demola from "../../images/demola.png";
import gantt from "../../images/gantt.png";
import gantt2 from "../../images/gantt2.png";
import ppvid from "../../images/PingPongvid.mp4"
import developer from "../../images/P2.jpg";
import P3 from "../../images/P3.jpg";
import vit from "../../images/vit.jpg";
import python from "../../images/pythonprog.jpg";
import supermarket from "../../images/supermarket.jpg";
import timeDisplay from "../../images/timeDisplay.jpeg";
import scms1 from "../../images/scms1.png";
import scms2 from "../../images/scms2.png";
import scms3 from "../../images/scms3.png";
import demolavid from "../../images/demola.mp4";

const Portfolio = () => {
  const images = [
    python,
    supermarket,
  ];

  const images2 = [
    gantt,
    gantt2,
  ];

  const images3 = [
    ahlamgpt,
    ahlamgpt2,
  ];

  const images4 = [
    scms1,
    scms2,
    scms3,
    scms,
  ];

  const videoUrl1 = ppvid;
  const videoUrl2 = demolavid;


  return (
    <main className="portfolio-content">
      <h1 style={{ fontSize: "60px", textAlign: "center", paddingTop: "40px" }}>
        PORTFOLIO
      </h1>

      <img
        src={developer}
        alt="Picture 2"
        style={{
          width: "270px",
          height: "355px",
          position: "absolute",
          right: "150px",
          top: "-5px",
        }}
      />
      <div style={{
          position: "absolute",
          left: "50px",
          top: "310px",}}>
           <ImageSwitcher images={images3}/>
      </div>
      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "670px",
          top: "370px",
        }}
      >
        AhlamGPT - ChatGPT Clone
      </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "680px",
          top: "430px",
        }}
      >
        Understood and learnt how to use the OpenAI API by building a ChatGPT clone<br />
        <b>Front-end:</b> React<br />
        <b>Back-end:</b> Node.js<br />
        <br />
        <b>
          <a href="https://react-chatgpt-clone-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here to View in Action!
          </a>
        </b><br />
        <br />
        <b>
          <a href="https://github.com/Ahlam-Banu/react-chatgpt-clone" target="_blank" rel="noopener noreferrer">
            Github repository link
          </a>
        </b>
      </p>
      <div style={{
          position: "absolute",
          right: "50px",
          top: "725px"}}>
           <ImageSwitcher images={images2}/>
      </div>
      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "50px",
          top: "785px",
        }}
      >
        Gantt Chart Tool for Pinja
      </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "60px",
          top: "845px",
        }}
      >
        Developed a Gantt Chart Tool as a collaborative effort between Pinja Company and the <br />Software Engineering Project course at Vaasa University of Applied Sciences.<br /> 
        <br />
        <b>Primary goal:</b> To explore the effective utilization of Gantt charts in project management<br /> and to develop a robust solution that assists in allocating and tracking project processing <br />resources efficiently.<br />
        <b>Front-end:</b> Integration of Bryntum library with Vue.js (JavaScript framework)<br />
        <br />
        <b>
          <a href="https://dev.azure.com/e2001332/_git/Pinja%201%20Gantt%20chart%20tool" target="_blank" rel="noopener noreferrer">
            Git URL
          </a>
        </b>
      </p>
      <div
      style={{
        width: "620px",
        height: "500px",
        position: "absolute",
        left: "50px",
        top: "1140px",
      }}>
      <VideoPlayer videoUrl={videoUrl2} />
      </div>

      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "690px",
          top: "1190px",
        }}
      >
        Teamwork in the Metaverse
      </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "700px",
          top: "1245px",
        }}
      >
        Co-creation with the help of <a href="https://www.demola.net/" target="_blank" rel="noopener noreferrer">Demola Global</a> to empower seamless collaboration in the metaverse through Yuri, an adaptive AI assistant, revolutionizing cross-industry meetings, overcoming language barriers and tech complexities in the Metaverse<br />
        <br />
        <b>Augmented Reality Tools for demo:</b> studio.gometa.io<br />
        <br />
        <b>
          <a href="https://ebrahim-hossain.notion.site/ebrahim-hossain/Yuri-Your-Virtual-Assistant-4fe40becb1654331b848fc2cdf82fed2" target="_blank" rel="noopener noreferrer">
            Concept Documentation
          </a>
        </b>
      </p>

      <div style={{
          position: "absolute",
          right: "50px",
          top: "1500px",}}>
           <ImageSwitcher images={images4}/>
      </div>

      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "50px",
          top: "1550px",
        }}
      >
        Student Course Management System
      </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "60px",
          top: "1600px",
        }}
      >
        A streamlined student and course management system using Java Spring.<br />
        <br />

        <b>Front-end:</b> React with TypeScript<br />
        <b>Back-end:</b> Java Spring, REST API<br />
        <b>Database:</b> MariaDB<br />

        <br />
        <b>
          <a href="https://github.com/Ahlam-Banu/Student_Course_Management_System" target="_blank" rel="noopener noreferrer">
            Github repository link
          </a>
        </b>
      </p>

      <div
      style={{
        position: "absolute",
        left: "50px",
        top: "1915px",
      }}>
      <VideoPlayer videoUrl={videoUrl1} />
      </div>
      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "690px",
          top: "1995px",
        }}
      >
        Digital Table Tennis Game
        </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "690px",
          top: "2045px",
        }}
      >
        A ping pong game created using object oriented programming (OOPs) concepts in Java programming language.<br />
        <br />
        <b>
          <a href="https://github.com/Ahlam-Banu/Digital_TableTennis_game" target="_blank" rel="noopener noreferrer">
            Github repository link
          </a>
        </b>
      </p>
      <div style={{
          position: "absolute",
          right: "50px",
          top: "2330px",
        }}>
      <ImageSwitcher images={images} />
      </div>
      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "50px",
          top: "2450px",
        }}
      >
        SuperMarket Simulation
        </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "50px",
          top: "2505px",
        }}
      >
        Used Data Structures and Algorithms concepts to develop Python code for optimizing<br /> cashier numbers in a supermarket simulation, maximizing profit by considering customer<br /> behavior and randomization.<br />
        <br />
        <b>
          <a href="https://github.com/Ahlam-Banu/Supermarket-Simulation" target="_blank" rel="noopener noreferrer">
            Github repository link
          </a>
        </b>
      </p>
      <img
        src={timeDisplay}
        alt="time display app"
        style={{
          width: "430px",
          height: "590px",
          position: "absolute",
          left: "50px",
          top: "2745px",
        }}
      />
      <h2
        style={{
          fontSize: "30px",
          position: "absolute",
          left: "640px",
          top: "2800px",
        }}
      >
        Prayer Time Display
      </h2>
      <p
        style={{
          fontSize: "23px",
          position: "absolute",
          left: "650px",
          top: "2850px",
        }}
      >
        Developed a web app using python libraries and API. Enhanced user experience by 15% and turned in project an average of 5% faster than targets.<br />
        <b>Front-end:</b> HTML, CSS<br />
        <b>Back-end:</b> Node.js,  Python using the Flask web framework<br />
        <br />
        <b>
          <a href="https://rpi-prayer-time.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here to View in Action!
          </a>
        </b><br />
        <br />
        <b>
          <a href="https://github.com/3TEKK/rpi_prayerTime" target="_blank" rel="noopener noreferrer">
            Github repository link
          </a>
        </b>
      </p>

    </main>
  );
};
export default Portfolio;
