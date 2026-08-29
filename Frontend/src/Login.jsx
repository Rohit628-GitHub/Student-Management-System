import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './Form.css';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const btnHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post('http://localhost:7000/api/v1/login', data);
      login(response.data.user, response.data.token);
      navigate('/');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form onSubmit={btnHandler}>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" required ref={emailRef} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" required ref={passwordRef} />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Logging in...' : 'Login'}
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
      <p style={{ textAlign: 'center', marginTop: '12px' }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
