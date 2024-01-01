import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import LoginSignup from "./LoginSignup";
import "./CSS/Shop.css";

const Shop = () => {
  const { all_product } = useContext(ShopContext);
  const [displayedProducts, setDisplayedProducts] = useState(
    all_product.slice(0, 10)
  );

  const handleMoreButtonClick = () => {
    // Implement your logic to display more products here
    // For example, you can display the next 10 products
    const nextProducts = all_product.slice(
      displayedProducts.length,
      displayedProducts.length + 10
    );
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
  };

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />

      <div className="featured">
        <h2>Featured Products</h2>
        <div className="product-list">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
        {all_product.length > 5 &&
          displayedProducts.length < all_product.length && (
            <button className="more-button" onClick={handleMoreButtonClick}>
              More
            </button>
          )}
      </div>

      <NewsLetter />
      <LoginSignup />
    </div>
  );
};

export default Shop;
