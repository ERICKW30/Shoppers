import "./CSS/LoginSignup.css";
import Button from "react-bootstrap/Button";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginSignup-container">
        <h1>SIgn Up</h1>
        <div className="loginsig nup-fields">
          <input type="text" placeholder="Jina Lako" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <Button variant="warning">Endelea</Button>
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
