import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <Card className="item-card " style={{ width: "100%" }}>
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
          className="mt-auto btn-block btn-sm"
          onClick={() => alert(`Add to Cart: ${name}`)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
