import { Container, Row, Col, Button, Image } from "react-bootstrap";
import exclusive_image from "../Assets/exclusive_image.png";
import "./Offer.css";

const Offers = () => {
  return (
    <Container className="offers-container">
      <Row className="offers">
        <Col xs={12} md={6} className="offers-left">
          <h1>EXCLUSIVE</h1>
          <h1>CRAZY OFFERS</h1>
          <p>BEST OFFERS BY SELLERS </p>
          <Button>TAKE A LOOK</Button>
        </Col>
        <Col xs={12} md={6} className="offers-right">
          <Image src={exclusive_image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Offers;
