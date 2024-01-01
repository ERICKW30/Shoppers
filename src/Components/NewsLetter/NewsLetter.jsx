import "./NewsLetter.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get EXCLUSIVE OFFERS ON OUR SITE</h1>
      <p>Subscribe to our newsletter to stay upto date with us.</p>
      <div>
        <Form.Control
          className="form-control"
          placeholder="Your Email Address..."
          aria-label="Recipient's username"
        />
        <div>
          <Button className="btn-letter">SUBSCRIBE</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
