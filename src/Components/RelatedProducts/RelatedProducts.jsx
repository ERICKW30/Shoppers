// RelatedProducts.js
import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <section className="related-products-container">
      <h1>Related Products</h1>
      <hr className="separator" />
      <div className="related-products-list">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;