import { Container, Row, Col } from "react-bootstrap";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <Container className="related-products-container text-center">
      <h1 className="mb-4">Related Products</h1>
      <hr
        className="separator"
        style={{ margin: "0 auto", marginBottom: "40px" }}
      />
      <Row className="related-products-list">
        {data_product.map((item, i) => (
          <Col key={i} xs={12} md={6} lg={3} className="mb-3">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedProducts;
