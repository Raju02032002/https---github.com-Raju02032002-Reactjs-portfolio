import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills-page">
      <h1 className="main-title">
        My <span>Skills</span>
      </h1>

      <div className="skills-container">
        
        <div className="technical-skills">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skill-bar">
            <FaHtml5 className="skill-icon" />
            <span>HTML</span>
            <div className="progress-bar">
              <div className="progress html"></div>
              <span className="percentage">90%</span>
            </div>
          </div>
          <div className="skill-bar">
            <FaCss3Alt className="skill-icon" />
            <span>CSS</span>
            <div className="progress-bar">
              <div className="progress css"></div>
              <span className="percentage">60%</span>
            </div>
          </div>
          <div className="skill-bar">
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
            <div className="progress-bar">
              <div className="progress js"></div>
              <span className="percentage">85%</span>
            </div>
          </div>
          <div className="skill-bar">
            < FaReact className="skill-icon" />
            <span>React</span>
            <div className="progress-bar">
              <div className="progress python"></div>
              <span className="percentage">50%</span>
            </div>
          </div>
          <div className="skill-bar">
            <FaJava className="skill-icon" />
            <span>Java</span>
            <div className="progress-bar">
              <div className="progress react"></div>
              <span className="percentage">75%</span>
            </div>
          </div>
        </div>

        {/* Right Side - Professional Skills */}
        <div className="professional-skills">
          <h2 className="section-title">Professional Skills</h2>
          <div className="circle-skill">
            <div className="circle" style={{ "--percentage": 90 }}>
              <span>90%</span>
            </div>
            <p id="c"> Creativity</p>
          </div>
          <div className="circle-skill">
            <div className="circle" style={{ "--percentage": 65 }}>
              <span>65%</span>
            </div>
            <p id="cc">Communication</p>
          </div>
          <div className="circle-skill">
            <div className="circle" style={{ "--percentage": 75 }}>
              <span>75%</span>
            </div>
            <p id="p">Problem Solving</p>
          </div>
          <div className="circle-skill">
            <div className="circle" style={{ "--percentage": 85 }}>
              <span>85%</span>
            </div>
            <p id="t">Teamwork</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
