import { Container, Row, Col, Image } from "react-bootstrap";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <Container className="footer mt-5">
      <Row className="footer-logo">
        <Col xs={12} sm={4} className="d-flex align-items-center ">
          <Image className="fluid" src={footer_logo} alt="Logo" />
          <p className="text-success">SHOPPER</p>
        </Col>
      </Row>
      <Row className="foot-links">
        <Col xs={12} sm={8} className="h4 justify-content-around">
          <li className="list-unstyled">Office</li>
          <li className="list-unstyled">Products</li>
          <li className="list-unstyled">About</li>
          <li className="list-unstyled">Company</li>
          <li className="list-unstyled">Contact</li>
        </Col>
      </Row>
      <Row className="footer-social-icon">
        <Col xs={12} className="d-flex gap-3">
          <div className="footer-icons-container">
            <Image className="fluid" src={instagram_icon} alt="Instagram" />
          </div>
          <div className="footer-icons-container">
            <Image className="fluid" src={pintester_icon} alt="Pinterest" />
          </div>
          <div className="footer-icons-container">
            <Image className="fluid" src={whatsapp_icon} alt="WhatsApp" />
          </div>
        </Col>
      </Row>
      <Row className="footer-copyright">
        <h5 className="text-dark text-center">
          Copyright @ 2024 - All Rights Reserved.
        </h5>
      </Row>
    </Container>
  );
};

export default Footer;
