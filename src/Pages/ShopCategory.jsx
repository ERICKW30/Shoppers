// Import the necessary dependencies
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Image } from "react-bootstrap";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

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
          Showing 1-12 out of 36 products
        </h4>
      </div>
      <div className="shopcategory-IndexSort px-4 py-2 mt-4 rounded border">
        Sort by <Image className="img-fluid" src={dropdown_icon} alt="" />
      </div>
      <div className="shopcategory row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 g-3">
        {all_product
          .filter((item) => category === item.category)
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
      <div className="shopcategory-loadmore text-center mt-5">
        Explore Mengine.
      </div>
    </div>
  );
};

export default ShopCategory;
