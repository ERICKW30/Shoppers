import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Container className="new-collections text-center my-5">
      <h1 className="text-success">NEW COLLECTIONS</h1>
      <hr className="bg-dark w-25 mx-auto my-3" />
      <Row className="collections mt-4">
        {new_collection.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="card">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewCollections;
