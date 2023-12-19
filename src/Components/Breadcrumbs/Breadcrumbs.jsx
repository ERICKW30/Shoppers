import "./Breadcrumbs.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumbs = ({ category, name }) => {
  return (
    <div className="Breadcrumbs">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {category} <img src={arrow_icon} alt="" /> {name}
    </div>
  );
};

export default Breadcrumbs;
