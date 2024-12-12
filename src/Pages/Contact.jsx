import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [infoData, setInfoData] = useState({
    phone: "+8870531570",
    email: "rajkumarm02032002@gmail.com",
    address: "Rajajinagar, Bangalore",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",  // Corrected: added phone field here
    message: "",
  });

  const handleInfoChange = (e) => {
    setInfoData({ ...infoData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data to Submit:", formData);

    try {
      const response = await axios.post("http://localhost:3000/user", formData);
      console.log("Response from server:", response);  // 
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div>
          <label htmlFor="phone">📞</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={infoData.phone}
            onChange={handleInfoChange}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="email">📧</label>
          <input
            type="email"
            id="email"
            name="email"
            value={infoData.email}
            onChange={handleInfoChange}
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="address">📍</label>
          <input
            type="text"
            id="address"
            name="address"
            value={infoData.address}
            onChange={handleInfoChange}
            placeholder="Address"
          />
        </div>
      </div>
      <div className="center-line"></div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"  // Corrected: type should be 'text' for phone input
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
