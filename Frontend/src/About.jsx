import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h2>About the System</h2>
      <p>
        The Student Management System (SMS) is designed to streamline administrative tasks 
        and foster better communication between students, faculty, and administration.
      </p>
      
      <h3>Key Objectives</h3>
      <ul>
        <li>Reduce paperwork and automate student data handling.</li>
        <li>Provide real-time access to grades and attendance logs.</li>
        <li>Maintain high data security and integrity.</li>
      </ul>

      <h3>Version</h3>
      <p>v1.0.0 (BCA Final Year Project)</p>
    </div>
  );
};

export default About;