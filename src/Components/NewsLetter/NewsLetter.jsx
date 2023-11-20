import "./NewsLetter.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Pata Exclusive OFFERS katika mtandao</h1>
      <p>Subscribe kwenye newsletter na ukuwe upto Date nasi</p>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Customer Hapa..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div>
            <InputGroup.Text id="basic-addon2">
              <Button className="btn-letter" variant="outline-info">
                SUBSCRIBE
              </Button>{" "}
            </InputGroup.Text>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

export default NewsLetter;
