import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Button, Col, Image, Row } from "react-bootstrap";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Row>
      <Col sm={2} md={6} lg={6} xl={6}>
        <div className="d-flex flex-column gap-1 overflow-auto mt-5">
          <Image src={product.image} alt="" className="mb-3" />
          <Image src={product.image} alt="" className="mb-3" />
          <Image src={product.image} alt="" className="mb-3" />
          <Image src={product.image} alt="" className="mb-2" />
        </div>
      </Col>

      <Col sm={1} md={6}>
        <div>
          <h1>{product.name}</h1>
          <div className="d-flex align-items-center gap-2 mt-5">
            <Image src={star_icon} alt="" />
            <Image src={star_icon} alt="" />
            <Image src={star_icon} alt="" />
            <Image src={star_icon} alt="" />
            <Image src={star_dull_icon} alt="" />
            <p>177</p>
          </div>
          <div
            className="d-flex mt-4 col-sm-12"
            style={{ fontSize: ".8cm", gap: "45px" }}
          >
            <div className="text-decoration-line-through text-danger">
              Ksh.{product.old_price}
            </div>
            <div className="text-success">Ksh.{product.new_price}</div>
          </div>
          <div className="mt-5">
            <h1>Select Size</h1>
            <div className="d-flex gap-4 mt-5 " style={{ margin: "0px 14px" }}>
              <Button
                variant="success"
                className="productdisplay-right-size-option"
              >
                S{" "}
              </Button>
              <Button
                variant="success"
                className="productdisplay-right-size-option"
              >
                M
              </Button>
              <Button
                variant="success"
                className="productdisplay-right-size-option"
              >
                L
              </Button>
              <Button
                variant="success"
                className="productdisplay-right-size-option"
              >
                XL
              </Button>
              <Button
                variant="success"
                className="productdisplay-right-size-option"
              >
                XXL
              </Button>
            </div>
          </div>
          <Button
            variant="success"
            style={{ width: "100%" }}
            onClick={() => {
              addToCart(product.id);
            }}
            className="mt-5"
          >
            Add to cart
          </Button>
          <div className="mt-5 d-flex flex-column gap-2">
            <h5 className="mt-3">Category : Woman, T-shirt, Crop top</h5>
            <h5>Tags : Modern, Latest</h5>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDisplay;
