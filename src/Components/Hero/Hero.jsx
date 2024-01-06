import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow_icon.png";
import hero_image from "../Assets/hero_image.png";
import { Button, Card } from "react-bootstrap";

const Hero = () => {
  return (
    <Container
      className="bg-success text-light p-2"
      style={{
        marginTop: "50px",
      }}
    >
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Img
              variant="top"
              src={hero_image}
              style={{ height: "100%" }}
            />
          </Card>
        </Col>
        <Col>
          <div
            className="hero-left"
            style={{ marginLeft: "50px", color: "black", fontWeight: "bold" }}
          >
            <h2 className="mt-3 sm-6s font-weight-bold ">
              NEWEST ARRIVALS IN KENYA
            </h2>
            <div className="mt-6">
              <div className="hero-hand-icon">
                <Image
                  className="mt-5"
                  src={hand_icon}
                  thumbnail
                  style={{ width: "15%", height: "10%" }}
                  alt=" "
                />
              </div>
              <h3 className="mt-5 font-weight-bold">Collections</h3>
              <h3 className="mt-5 font-weight-bold">For Everyone</h3>
            </div>
            <div className="hero-latest-btn">
              <Button
                className="btn-success font-weight-bold mt-5"
                style={{ marginLeft: "0px" }}
              >
                New Arrivals{" "}
                <Image src={arrow_icon} style={{ width: "10%" }} alt="" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
