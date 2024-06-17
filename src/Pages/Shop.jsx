import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import LoginSignup from "./LoginSignup";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Shop = () => {
  const { all_product } = useContext(ShopContext);
  const [displayedProducts, setDisplayedProducts] = useState(
    all_product.slice(0, 10)
  );

  const handleMoreButtonClick = () => {
    const nextProducts = all_product.slice(
      displayedProducts.length,
      displayedProducts.length + 10
    );
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
  };

  return (
    <Container className="shop-container">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />

      <div className="text-center text-success mt-4 h2">Featured Product</div>
      <hr
        className="bg-dark w-25"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mt-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body style={{ height: "260px" }}>
                <Link to={`/product/${product.id}`} className="text-dark">
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <h4 className="text-danger">Ksh.{product.old_price}</h4>
                    <h4 className="text-success">Ksh.{product.new_price}</h4>
                  </div>
                  <p
                    style={{
                      maxHeight: "100px",
                      overflow: "scroll",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.description}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {all_product.length > 10 &&
        displayedProducts.length < all_product.length && (
          <Button
            variant="success"
            className="more-button mt-4"
            style={{
              margin: "10px 120px",
              fontFamily: "fantasy",
              fontSize: ".5cm",
            }}
            onClick={handleMoreButtonClick}
          >
            More
          </Button>
        )}

      <NewsLetter />
      <LoginSignup />
    </Container>
  );
};

export default Shop;
