import React from "react";
import "./portfolio.css";
import P2 from "../../images/P2.jpg";
import P4 from "../../images/P4.jpg";
import P1 from "../../images/P1.jpg";
import P3 from "../../images/P3.jpg";

const Portfolio = () => {
  return (
    <main className="portfolio-content">
      <h1 style={{ fontSize: "60px", textAlign: "center", paddingTop: "40px" }}>
        PORTFOLIO
      </h1>

      <img
        src={P2}
        alt="Picture 2"
        style={{
          width: "255px",
          height: "378px",
          position: "absolute",
          right: "50px",
          top: "80px",
        }}
      />
      <img
        src={P4}
        alt="Picture 4"
        style={{
          width: "255px",
          height: "378px",
          position: "absolute",
          left: "50px",
          top: "310px",
        }}
      />
      <h2
        style={{
          fontSize: "20px",
          position: "absolute",
          left: "370px",
          top: "370px",
        }}
      >
        DESIGN
      </h2>
      <p
        style={{
          fontSize: "15px",
          position: "absolute",
          left: "380px",
          top: "390px",
        }}
      >
        The quick brown fox jumps over the lazy dog. This sentence is Often used
        as a test to <br />
        demonstrate. he quick brown fox jumps over <br />
        the lazy dog. This sentence is Often used as a <br />
        to demonstrate.
      </p>
      <h2
        style={{
          fontSize: "20px",
          position: "absolute",
          left: "370px",
          top: "500px",
        }}
      >
        CODING
      </h2>
      <p
        style={{
          fontSize: "15px",
          position: "absolute",
          left: "380px",
          top: "520px",
        }}
      >
        The quick brown fox jumps over the lazy dog. This sentence is Often used
        as a test to <br />
        demonstrate. he quick brown fox jumps over the lazy dog. This sentence
        is Often used as a <br />
        to demonstrate.
      </p>
      <img
        src={P1}
        alt="Picture 1"
        style={{
          width: "390px",
          height: "290px",
          position: "absolute",
          right: "50px",
          top: "725px",
        }}
      />
      <h2
        style={{
          fontSize: "20px",
          position: "absolute",
          left: "50px",
          top: "825px",
        }}
      >
        PROJECT 1
      </h2>
      <p
        style={{
          fontSize: "15px",
          position: "absolute",
          left: "70px",
          top: "845px",
        }}
      >
        The quick brown fox jumps over the lazy dog. This sentence is Often used
        as a test to <br />
        demonstrate. he quick brown fox jumps over the lazy dog. This sentence
        is Often used as a <br />
        to demonstrate.
      </p>
      <img
        src={P3}
        alt="Picture 3"
        style={{
          width: "455px",
          height: "378px",
          position: "absolute",
          left: "50px",
          top: "1050px",
        }}
      />
      <h2
        style={{
          fontSize: "20px",
          position: "absolute",
          left: "540px",
          top: "1220px",
        }}
      >
        PROJECT 2
      </h2>
      <p
        style={{
          fontSize: "15px",
          position: "absolute",
          left: "560px",
          top: "1250px",
        }}
      >
        The quick brown fox jumps over the lazy dog. This sentence is Often used
        as a test to <br />
        demonstrate. he quick brown fox jumps over the lazy dog. This sentence
        is Often used as a <br />
        to demonstrate.
      </p>
    </main>
  );
};
export default Portfolio;
