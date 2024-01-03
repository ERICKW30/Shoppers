import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Popular.css";

const Popular = () => {
  return (
    <Container className="popular">
      <h1>POPULAR AMONG LADIES</h1>
      <hr className="mb-5" />
      <Row className="popular-item">
        {data_product.map((item, i) => (
          <Col key={i} xs={12} md={4} lg={2} className="mb-2">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text>
                  <span className="text-danger ">Ksh{item.old_price}</span>{" "}
                  <span className="text-success font-weight-bold">
                    Ksh{item.new_price}
                  </span>
                </Card.Text>
                <Button className="btn-block" variant="success mt-3 mb-3">
                  Buy Now
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
