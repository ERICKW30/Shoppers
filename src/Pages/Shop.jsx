import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import LoginSignup from "./LoginSignup";

const Shop = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />

      {/* Product Links */}
      <div>
        <h2>Featured Products</h2>
        <div className="product-list">
          {all_product.map((product) => (
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
      </div>

      <NewsLetter />
      <LoginSignup />
    </div>
  );
};

export default Shop;
