import React, { useState } from 'react';
import screenshotImg1 from './img/Screenshot 2024-11-23 222836.png';
import screenshotImg2 from './img/preview.png';
import screenshotImg3 from './img/amazon.jpg'; 

const Projects = () => {
  const [shakeProject, setShakeProject] = useState(null);

  const handleClick = (projectId) => {
    setShakeProject(projectId);
    setTimeout(() => {
      setShakeProject(null); 
    }, 500); 
  };

  return (
    <div id="projects-page">
      <div className="projects-container">
        <div 
          className={`project-card ${shakeProject === 1 ? 'shake' : ''}`} 
          onClick={() => handleClick(1)}
        >
          <img src={screenshotImg1} alt="Project 1" />
          <h3>Anon is a fully responsive ecommerce website, maximum compatiblities in all mobile devices, built using HTML, CSS, and JavaScript.</h3>
        </div>

        <div 
          className={`project-card ${shakeProject === 2 ? 'shake' : ''}`} 
          onClick={() => handleClick(2)}
        >
          <img src={screenshotImg2} alt="Project 2" />
          <h3>Discover the finest coffee experience with us. Our carefully curated selection of premium beans brings you bold, smooth around the world.</h3>
        </div>

        <div 
          className={`project-card ${shakeProject === 3 ? 'shake' : ''}`} 
          onClick={() => handleClick(3)}
        >
          <img src={screenshotImg3} alt="Project 3" />
          <h3>An e-commerce platform designed to mirror Amazon's user interface and features, offering a seamless shopping experience with product listings, a cart system, and secure checkout using modern web technologies</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
