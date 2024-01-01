// Import the necessary dependencies
import React from "react";
import "./CSS/LoginSignup.css";
import Button from "react-bootstrap/Button";

// Define the LoginSignup component
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agreeCheckbox" />
          <label htmlFor="agreeCheckbox">
            By continuing, you agree to our Terms of use and privacy policy
          </label>
          <Button variant="warning">Continue</Button>
        </div>
        <p className="loginsignup-login">
          Do you have an account?
          <Button variant="success">Login here</Button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
