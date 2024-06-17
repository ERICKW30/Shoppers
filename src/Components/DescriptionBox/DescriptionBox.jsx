import { Button, Col, Row } from "react-bootstrap";
import "./DescriptionBox.css";

//
const DescriptionBox = ({ product }) => {
  return (
    <div className="container descriptionbox ">
      <Row className="descriptionbox-navigator ">
        <Col>
          <Button
            variant="outline-success"
            className="descriptionbox-nav-button"
          >
            Description
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            className="descriptionbox-nav-button"
          >
            Reviews (107)
          </Button>
        </Col>
      </Row>
      <div
        className="descriptionbox-description mt-5 h6"
        style={{ borderRadius: "10px" }}
      >
        {product.description}
      </div>
    </div>
  );
};

export default DescriptionBox;
