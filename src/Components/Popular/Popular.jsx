import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Popular.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import data_product from "../Assets/data";

const Popular = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Container className="popular">
      <h2 className="text-center font-weight-bold text-success mt-3">
        POPULAR AMONG LADIES
      </h2>
      <hr className="mb-3" />
      <Row
        className="popular-item overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        {data_product.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center">
                  <div className="price">
                    <span className="text-danger">Ksh.{item.old_price}</span>{" "}
                    <span className="text-success font-weight-bold">
                      Ksh.{item.new_price}
                    </span>
                  </div>
                </Card.Text>
                <Button
                  variant="success"
                  style={{ width: "100%" }}
                  block
                  onClick={() => {
                    addToCart(item.id);
                  }}
                  className="mt-3"
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
