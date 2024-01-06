import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { Container, Row, Col } from "react-bootstrap";

const NewCollections = () => {
  return (
    <Container className="new-collections text-center my-5">
      <h1 className="text-success">NEW COLLECTIONS</h1>
      <hr
        className="bg-dark w-25"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Row
        xs={1}
        sm={2}
        md={4}
        lg={4}
        className="collections"
        style={{ marginTop: "30px" }}
      >
        {new_collection.map((item, i) => (
          <Col key={i} className="text-center mb-2 ">
            <div className="card ">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewCollections;
