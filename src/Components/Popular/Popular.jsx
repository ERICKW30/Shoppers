import React from "react";
import data_product from "../Assets/data";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Popular.css";

const Popular = () => {
  return (
    <Container className="popular">
      <h2
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontWeight: "bold",
          color: "green",
        }}
      >
        POPULAR AMONG LADIES
      </h2>
      <hr className="mb-3" />
      <Row
        className="popular-item"
        style={{ overflowY: "auto", maxHeight: "400px" }}
      >
        {data_product.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={3} lg={3} className="mb-2">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text>
                  <div
                    className="price"
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                  >
                    <span className="text-danger">Ksh.{item.old_price}</span>{" "}
                    <span
                      className="text-success font-weight-bold"
                      style={{ marginLeft: "40px" }}
                    >
                      Ksh.{item.new_price}
                    </span>
                  </div>
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
