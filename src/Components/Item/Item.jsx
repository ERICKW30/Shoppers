import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Item = ({ id, image, name, new_price, old_price }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Card className="item-card" style={{ width: "100%" }}>
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{name}</Card.Title>
        <div className="item-prices">
          <div className="item-price-new text-success">Ksh.{new_price}</div>
          <div className="item-price-old text-danger">Ksh.{old_price}</div>
        </div>
        <Button
          variant="success"
          style={{ width: "100%" }}
          block
          onClick={() => {
            addToCart(id); // Fixed typo here
          }}
          className="mt-3"
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
