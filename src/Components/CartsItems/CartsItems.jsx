import { Table } from "react-bootstrap";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import remove_icon from "../Assets/cart_cross_icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

const CartsItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8" style={{ width: "100%" }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Products</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img
                          src={e.image}
                          alt=""
                          className="carticon-product-icon"
                        />
                      </td>
                      <td>{e.name}</td>
                      <td>Ksh.{e.new_price}</td>
                      <td>
                        <button className="cartitems-quantity btn btn-light">
                          {cartItems[e.id]}
                        </button>
                      </td>
                      <td>Ksh.{e.new_price * cartItems[e.id]}</td>
                      <td>
                        <img
                          className="cartitems-remove-icon"
                          src={remove_icon}
                          alt="Remove"
                          onClick={() => removeFromCart(e.id)}
                        />
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="cartitems-total mt-3">
          <h1>Cart Totals</h1>
          <Table bordered responsive>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>Ksh{getTotalCartAmount()}</td>
              </tr>
              <tr>
                <td>Shipping Fee</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>Ksh{getTotalCartAmount()}</td>
              </tr>
            </tbody>
          </Table>
          <button className="cartitems-total-button btn btn-danger mt-4 h5">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode mt-4">
          <h4>If you have a promo code, Enter it here.</h4>
          <div className="cartitems-promobox d-flex">
            <input
              type="text"
              className="form-control "
              placeholder="Promo code"
            />
            <button className="btn btn-dark ml-2 ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsItems;
