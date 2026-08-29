import React, { useRef, useState } from 'react';
import axios from 'axios';
import './Creatusers.css';

const CreateUsers = ({ onAddUser }) => {
  const [message, setMessage] = useState("");



  // Creating references for each input field
  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();
  const semesterRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gathering data values from inputs
    const newStudent = {
      student_id: idRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      course: courseRef.current.value,
      semester: semesterRef.current.value,
    };


//    "syudent_id" : "1",
//   "name": "rohit",
//   "email" : "32rohit@gmail.com",
//   "course" :"BCA",
//   "semesrer" :"4"






    const fromData = e.currentTarget;

    try {
      const response = await axios.post("http://localhost:7000/api/v1/student", newStudent);
      setMessage(response.data.message || "Data sent successfully");
      fromData.reset();
    } catch (error) {
      setMessage(error?.message || 'Request failed');
    }





    // Passing data back to parent handler function
    // if (onAddUser) {
    //   onAddUser(newStudent);
    // }

    // Form Reset execution
  
  };

  return (
    <div className="create-user-container">
      <h2>Register New Student</h2>
      <p className="subtitle">Fill out the credentials below to add a student to the roster database.</p>
      
      <form onSubmit={handleSubmit} className="create-user-form">
        <div className="form-group">
          <label>Student ID</label>
          <input 
            type="text" 
            ref={idRef} 
            placeholder="e.g., STU005" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            ref={nameRef} 
            placeholder="e.g., Rohit Saini" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            ref={emailRef} 
            placeholder="e.g., student@example.com" 
            required 
          />
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label>Course Program</label>
            <select ref={courseRef} required defaultValue="">
              <option value="" disabled>Select Course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BTech">B.Tech</option>
              <option value="BSc">B.Sc CS</option>
            </select>
          </div>

          <div className="form-group half-width">
            <label>Current Semester</label>
            <select ref={semesterRef} required defaultValue="">
              <option value="" disabled>Select Term</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Student Record</button>
        {message && <p className="form-message success">{message}</p>}
      </form>
    </div>
  );
};

export default CreateUsers;