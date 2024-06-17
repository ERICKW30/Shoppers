import { Container, Row, Col, Button, Image } from "react-bootstrap";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <Container className="offers-container  p-4">
      <h2 className="text-center text-success  h2 mt-4 mb-4 font-weight-bold">
        OFFERS
      </h2>
      <hr
        className="bg-dark w-25
        "
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Row className="offers " style={{ backgroundColor: " #e09965 " }}>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h1 className="text-dark font-weight-bold ">EXCLUSIVE</h1>
          <h1 className="text-dark font-weight-bold mt-4">OFFERS</h1>
          <h3 className="text-light font-weight-bold mt-4 mb-4">
            BEST OFFERS BY SELLERS
          </h3>
          <Button className="btn-success mt-5">TAKE A LOOK</Button>
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
