// NewsLetter.js

import { Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div className="newsletter bg-gradient">
      <h2 className="text-dark" style={{ fontFamily: "cursive" }}>
        GET EXCLUSIVE OFFERS ON OUR SITE.
      </h2>
      <h3 className="text-dark mt-4">
        Subscribe to our newsletter to stay up-to-date with us.
      </h3>
      <div>
        <Form.Group className="mb-3 mt-4" style={{ font: "menu" }}>
          <Form.Control
            type="email"
            placeholder="Your Email Address..."
            className="form-control"
          />
        </Form.Group>
        <div>
          <Button
            variant="success"
            className="btn-letter"
            style={{
              alignItems: "center",
              marginLeft: "50px",
              fontFamily: "fantasy",
            }}
          >
            SUBSCRIBE
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
