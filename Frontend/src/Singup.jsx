import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Form.css';
import axios from "axios";

import { useAuth } from "./AuthContext";



const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const btnhader = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.post("http://localhost:7000/api/v1/user", data);
      setMessage(response.data.message || "Account created successfully");
      form.reset();

      // Sign up counts as a login: take the user straight into the app.
      login(response.data.user, response.data.token);
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message);
    }
  };

  return (

    <>



     <div className="auth-container">
          <h2>User Login</h2>
          <form onSubmit={btnhader}>
            <div>
              <label>Full Name</label>
              <input type="text" name="name" required ref={name} />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" name="email" required ref={email} />
            </div>
    
            <div>
              <label>Password</label>
              <input type="password" name="password" required ref={password} />
            </div>
    
            <button type="submit" >
              Submit
            </button>
            {message && <p className="form-message">{message}</p>}
          </form>
          <p style={{ textAlign: 'center', marginTop: '12px' }}>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

    
    </>

  );
};

export default Signup;
