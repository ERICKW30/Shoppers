import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Image from "react-bootstrap/Image";

const CustomNavbar = () => {
  const [menu, setMenu] = useState("shop");
  const [expanded, setExpanded] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setExpanded(false); // Close the navbar after clicking a link
  };

  const renderMenuLink = (menuItem, label, color) => (
    <Nav.Link
      as="li"
      key={menuItem}
      className={`nav-item ${menu === menuItem ? "active" : ""}`}
      onClick={() => handleMenuClick(menuItem)}
    >
      <Link to={`/${menuItem}`} className={`nav-link`} style={{ color }}>
        {label}
      </Link>
    </Nav.Link>
  );

  return (
    <Navbar bg="warning" expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Image src={logo} alt="Shopper Logo" style={{ width: "70px" }} />
          <p
            className="mb-0"
            style={{ color: "white", fontSize: "1cm", fontFamily: "fantasy" }}
          >
            BEST SHOPPER
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          style={{ marginLeft: "10px" }}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="navbarNav"
          className="justify-content-end"
          expanded={expanded}
        >
          <Nav
            className="ml-auto"
            style={{
              fontSize: "0.5cm",
              fontWeight: "bold",
              color: "black",
              fontFamily: "monospace",
              gap: "40px",
              marginTop: "50px",
            }}
          >
            {renderMenuLink("", "Shop", "black")}
            {renderMenuLink("mens", "Men")}
            {renderMenuLink("womens", "Women")}
            {renderMenuLink("kids", "Kids")}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Link to="/login">
            <Button
              variant="outline-success"
              style={{
                fontSize: "0.5cm",
                width: "100px",
                height: "40px",
                marginLeft: "50px",
                marginTop: "20px",
                background: " hsl(108, 60%, 50%)",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Button>
          </Link>
          <Link
            to="/cart"
            className="position-flex"
            style={{
              color: " hsl(10, 100%, 50%)",
              fontSize: ".5cm",
              fontWeight: "bold",
              marginLeft: "140px",
              marginBottom: "46px",
            }}
          >
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            <img
              src={cartIcon}
              alt="Cart Icon"
              style={{ width: "34px", marginRight: "10px" }}
            />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
