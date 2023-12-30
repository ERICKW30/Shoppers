import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("productId:", productId);

  const product = all_product.find((e) => e.id === Number(productId));

  // Add some logging to help diagnose any issues
  console.log("Product:", product);
  console.log("productId:", productId);

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
