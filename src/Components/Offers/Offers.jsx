import { Container, Row, Col, Button, Image } from "react-bootstrap";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <Container className="offers-container bg-warning p-4">
      <Row className="offers">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h1 className="text-dark font-weight-bold">EXCLUSIVE</h1>
          <h1 className="text-dark font-weight-bold">CRAZY OFFERS</h1>
          <p className="text-secondary font-weight-bold">
            BEST OFFERS BY SELLERS
          </p>
          <Button className="btn-success" style={{ marginRight: "150px" }}>
            TAKE A LOOK
          </Button>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={exclusive_image} alt="" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Offers;
