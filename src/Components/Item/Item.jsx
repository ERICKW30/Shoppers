import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <Card className="item" style={{ width: "100%" }}>
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} alt={name} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="item-prices">
          <div className="item-price-new text-danger">Ksh.{new_price}</div>
          <div className="item-price-old text-success">Ksh.{old_price}</div>
        </div>
        <Button
          variant="success"
          style={{ alignItems: "center", marginLeft: "0px" }}
          onClick={() => alert(`Add to Cart: ${name}`)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
