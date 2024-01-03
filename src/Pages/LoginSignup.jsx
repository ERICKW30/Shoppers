// Import the necessary dependencies

import { Button, Form } from "react-bootstrap";
import "./CSS/LoginSignup.css";

// Define the LoginSignup component
const LoginSignup = () => {
  return (
    <div className="loginsignup container">
      <div className="loginSignup-container">
        <h1
          className="text-uppercase"
          style={{ fontWeight: "bold", marginLeft: "70px" }}
        >
          Sign Up
        </h1>
        <Form className="loginsignup-form" style={{ fontWeight: "bold" }}>
          <Form.Group className="loginsignup-fields" controlId="formName">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="loginsignup-fields" controlId="formEmail">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="loginsignup-fields" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group
            className="loginsignup-agree mt-4"
            controlId="formCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="By continuing, you agree to our Terms of use and privacy policy"
            />
          </Form.Group>

          <Button
            variant="warning mt-4"
            style={{ marginLeft: "38px", fontSize: ".5cm", fontWeight: "bold" }}
            type="submit"
          >
            Continue
          </Button>
        </Form>

        <h3 className="loginsignup-login">
          Do you have an account?
          <Button
            variant="success mt-5"
            style={{ marginLeft: "38px", fontSize: ".5cm", fontWeight: "bold" }}
          >
            Login here
          </Button>
        </h3>
      </div>
    </div>
  );
};

export default LoginSignup;
