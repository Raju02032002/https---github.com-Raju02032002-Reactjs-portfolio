import React from 'react'
import img from "./img/im-photoaidcom-cropped.jpeg"
import { LiaLinkedinIn } from "react-icons/lia";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Navbar from '../Component/Navbar';
const About = () => {
  return (
    <div>
    <div className="about-page">
      <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>React Developer</h2>
            <p>Highly motivated and resourceful IT graduate with a strong foundation in HTML, CSS,
            JavaScript, and experience in developing innovative web designs and features. Passionate
            about creating user-friendly interfaces and eager to contribute to web development
            projects while expanding my technical expertise</p>
          </div>
          
          <div id="img2">
                  <img src={img} alt="" height="300px" width="250px"/>
               </div>
          </div> 
          <div className="personalinfo">
            <h3>Personal Information</h3>
            <ul>
              <li><strong>Name:</strong> Raj Kumar</li>
              <li><strong>Age:</strong> 22</li>
              <li><strong>Address:</strong> India</li>
              <li><strong>Email:</strong> rajkumarm02032002@gmail.com</li>
              <li><strong>Contact:</strong> 8870531570</li>
            </ul>
            </div>     
            <div className="icons">
            <div id="ic1"><LiaLinkedinIn /></div>
               
               <MdFacebook />
               <FaInstagram />
               <FaTwitter />
               </div>
               </div>
     </div>
  )
}

export default About