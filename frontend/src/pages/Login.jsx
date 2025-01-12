import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import '../App.css';

export default function Login() {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user already has a token
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await login({ email: emailText, password: passwordText });
      const { token } = response;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back!</h2>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordText}
            onChange={(e) => setPasswordText(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}