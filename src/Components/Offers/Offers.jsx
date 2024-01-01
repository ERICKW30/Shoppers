import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>CRAZY OFFERS</h1>
        <p>BEST OFFERS BY SELLERS </p>
        <button> TAKE A LOOK</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
