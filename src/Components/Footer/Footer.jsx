// Import the necessary dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <Container className="footer">
      <Row className="footer-logo">
        <Col xs={12} sm={4} className="d-flex align-items-center gap-3">
          <img src={footer_logo} alt="" />
          <p className="text-warning">SHOPPER</p>
        </Col>
      </Row>
      <Row className="foot-links">
        <Col xs={12} sm={8} className="d-flex justify-content-around">
          <ul className="list-unstyled">Offices</ul>
          <ul className="list-unstyled">Products</ul>
          <ul className="list-unstyled">About</ul>
          <ul className="list-unstyled">Company</ul>
          <ul className="list-unstyled">Contact</ul>
        </Col>
      </Row>
      <Row className="footer-social-icon">
        <Col xs={12} className="d-flex gap-3">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </Col>
      </Row>
      <Row className="footer-copyright">
        <hr className="w-80" />
        <p className="text-dark">Copyright @ 2023 - All Rights Reserved</p>
      </Row>
    </Container>
  );
};

export default Footer;
