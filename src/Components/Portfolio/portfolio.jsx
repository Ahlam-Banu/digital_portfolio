import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio - Ahlam Banu</title>
      </head>

      <body>
        <main>
          <h1 style={{ fontSize: '55px', textAlign: 'center', paddingTop: '40px' }}>PORTFOLIO</h1>

          <div className="center-container">
            <img src="./assets/P2.jpg" alt="Picture 2" style={{ width: '255px', height: '378px', position: 'absolute', right: '0px', top: '80px' }} />
            <img src="./assets/P4.jpg" alt="Picture 4" style={{ width: '255px', height: '378px', position: 'absolute', left: '50px', top: '310px' }} />
            <h1 style={{ fontSize: '20px', position: 'absolute', left: '370px', top: '370px' }}>DESIGN</h1>
            <p style={{ fontSize: '15px', position: 'absolute', left: '380px', top: '390px' }}>
              The quick brown fox jumps over the lazy dog. This sentence is Often used as a test to <br />
              demonstrate. he quick brown fox jumps over <br />
              the lazy dog. This sentence is Often used as a <br />
              to demonstrate.
            </p>
            <h1 style={{ fontSize: '20px', position: 'absolute', left: '370px', top: '500px' }}>CODING</h1>
            <p style={{ fontSize: '15px', position: 'absolute', left: '380px', top: '520px' }}>
              The quick brown fox jumps over the lazy dog. This sentence is Often used as a test to <br />
              demonstrate. he quick brown fox jumps over the lazy dog. This sentence is Often used as a <br />
              to demonstrate.
            </p>
            <img src="./assets/P1.jpg" alt="Picture 1" style={{ width: '390px', height: '290px', position: 'absolute', right: '50px', top: '725px' }} />
            <h1 style={{ fontSize: '20px', position: 'absolute', left: '50px', top: '825px' }}>PROJECT 1</h1>
            <p style={{ fontSize: '15px', position: 'absolute', left: '70px', top: '845px' }}>
              The quick brown fox jumps over the lazy dog. This sentence is Often used as a test to <br />
              demonstrate. he quick brown fox jumps over the lazy dog. This sentence is Often used as a <br />
              to demonstrate.
            </p>
            <img src="./assets/P3.jpg" alt="Picture 3" style={{ width: '455px', height: '378px', position: 'absolute', left: '50px', top: '1050px' }} />
            <h1 style={{ fontSize: '20px', position: 'absolute', left: '540px', top: '1220px' }}>PROJECT 2</h1>
            <p style={{ fontSize: '15px', position: 'absolute', left: '560px', top: '1250px' }}>
              The quick brown fox jumps over the lazy dog. This sentence is Often used as a test to <br />
              demonstrate. he quick brown fox jumps over the lazy dog. This sentence is Often used as a <br />
              to demonstrate.
            </p>
          </div>
        </main>
    </body>
    </div>
  );
};
export default Portfolio;
