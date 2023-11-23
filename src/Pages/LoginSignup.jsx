import { InputGroup } from "react-bootstrap";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginSignup-container">
        <h1>SIgn Up</h1>
        <div className="loginsignup-fields">
          <InputGroup type="text" placeholder="Jina Lako" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Endelea</button>
        <p className="loginsignup-login">
          Uko na account Jamaa? <span>Login hapa</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Kwa kuendelea, unakubaliana na Terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
