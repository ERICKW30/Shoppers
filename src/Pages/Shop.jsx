import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import LoginSignup from "./LoginSignup";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./CSS/Shop.css";

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

      <h2 className="text-center text-success mt-4">Featured Products</h2>
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link
              to={`/product/${product.id}`}
              className="product-item text-dark"
            >
              <Image src={product.image} alt={product.name} fluid />
              <h3 className="mt-3">{product.name}</h3>
              <p>Ksh.{product.price}</p>
              <p>{product.description}</p>
            </Link>
          </Col>
        ))}
      </Row>
      {all_product.length > 10 &&
        displayedProducts.length < all_product.length && (
          <Button
            variant="success"
            className="more-button mt-4"
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
