import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow_icon.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEEWEST ARRIVALS IN KENYA</h2>
        <div>
          <div className="hero-hand-icon">
            <p>NEW</p>
            <img id="imageOne" src={hand_icon} alt=" " />
          </div>
          <p>Collections</p>
          <p>FOr Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>New Arrivals</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
