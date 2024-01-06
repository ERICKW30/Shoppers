import { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { Image, Button } from "react-bootstrap";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import "./CSS/ShopCategory.css";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(12);

  const loadMoreProducts = () => {
    // Increase the number of visible products by 4
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  return (
    <div className="shop-category">
      <Image className="img-fluid shopcategory-banner" src={banner} alt="" />
      <div
        className="shopcategory"
        style={{
          fontSize: ".5cm",
          marginLeft: "10px",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
      >
        <h4 className="shopcategory-title mt-3 px-1 ">
          Showing 1-{visibleProducts} out of {all_product.length} products
        </h4>
      </div>
      <div className="shopcategory-IndexSort px-4 py-2 mt-4 rounded border">
        Sort by <Image className="img-fluid" src={dropdown_icon} alt="" />
      </div>
      <div className="shopcategory row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 g-3">
        {all_product
          .filter((item) => category === item.category)
          .slice(0, visibleProducts)
          .map((item) => (
            <div key={item.id} className="col">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
      </div>
      {visibleProducts < all_product.length && (
        <div className="text-center mt-5 ">
          <Button
            className="btn btn-success "
            onClick={loadMoreProducts}
            size="lg"
          >
            Explore More.
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
