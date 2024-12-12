import React from 'react';
import video from './videos/7020341_Luminous_Luxury_3840x2160.mp4';
import image1 from './img/IMG20241115231029-photoaidcom-cropped.jpg';

const Home = () => {
  return (
    <div>
      <div id="backvideo">
        <video autoPlay muted>
          <source src={video}></source>
        </video>
        <div className="content">
          <h1 className="animated-text">
            Hello, I'm Raj Kumar, <br /> React Developer
          </h1>
          <a href="/RAJ KUMAR M_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="animated-button">Resume</button>
          </a>
        </div>
        <div id="img1">
          <img src={image1} alt="Profile" height="300px" width="250px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
