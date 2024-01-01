import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  const renderMenuLink = (menuItem, label, color) => (
    <li onClick={() => handleMenuClick(menuItem)}>
      <Link
        to={`/${menuItem}`}
        style={{
          textDecoration: "none",
          color: menu === menuItem ? color : "black",
        }}
      >
        {label}
      </Link>
      {menu === menuItem ? <hr /> : null}
    </li>
  );

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {renderMenuLink("", "Shop", "black")}
        {renderMenuLink("mens", "Men", "purple")}
        {renderMenuLink("womens", "Women", "orange")}
        {renderMenuLink("kids", "Kids", "blue")}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <Button id="btn-warn" variant="outline-success">
            LOGIN
          </Button>
        </Link>
        <Link to="/cart">
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
