import React from 'react';
import './Home.css'; // Optional: for your styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Student Management System</h1>
        <p>Your all-in-one portal for managing student records, courses, and attendance.</p>
      </header>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Easy Enrollment</h3>
          <p>Register new students and manage their profiles seamlessly.</p>
        </div>
        <div className="feature-card">
          <h3>Course Tracking</h3>
          <p>Monitor class schedules, subjects, and academic performance.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Access</h3>
          <p>Role-based authentication for students, teachers, and admins.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;