import React from 'react';
import './Login.css';

const Login = ({ btnHandler, emailRef, passwordRef, message }) => {
  return (
    <div className="auth-container">
      <h2>Student Login</h2>
      <form onSubmit={btnHandler}>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" required ref={emailRef} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" required ref={passwordRef} />
        </div>

        <button type="submit">Login</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;