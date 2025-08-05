import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // ✅ Import the custom context hook
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth(); // ✅ Get setUser from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      if (res.data.success) {
        alert("Login successful!");
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user); // ✅ Set user in context
        navigate('/home');
      } else {
        alert(res.data.message || "Login failed.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="login-container">
      <div
        className="left-panel"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        <div className="left-text">
          <h1>KrishiSetu – A Bridge from Soil to Sale…</h1>
          <p>
            A voice-enabled platform for farmers to sell directly to buyers — no middlemen, just opportunity.
          </p>
        </div>
      </div>

      <div className="right-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <p className="welcome">WELCOME BACK</p>
          <h2>Log In to your KrishiSetu Account</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn" type="submit">CONTINUE</button>

          <div className="divider">OR</div>

          <div className="social-logins">
            <button type="button">Log in with Facebook</button>
            <button type="button">Log in with Google</button>
            <button type="button">Log in with Apple</button>
          </div>

          <p className="new-user">
            New User? <a href="#">SIGN UP HERE</a>
          </p>

          <button className="lang-switch" type="button">English | हिंदी</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
