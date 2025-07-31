import React from "react";
import "./LoginPage.css";

function LoginPage() {
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
        <form className="login-form">
          <p className="welcome">WELCOME BACK</p>
          <h2>Log In to your KrishiSetu Account</h2>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">CONTINUE</button>

          <div className="divider">OR</div>

          <div className="social-logins">
            <button>Log in with Facebook</button>
            <button>Log in with Google</button>
            <button>Log in with Apple</button>
          </div>

          <p className="new-user">
            New User? <a href="#">SIGN UP HERE</a>
          </p>

          <button className="lang-switch">English | हिंदी</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
