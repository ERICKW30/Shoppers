import "./DescriptionBox.css";

const DescriptionBox = ({ product }) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (107)</div>
      </div>
      <div className="descriptionbox-description">{product.description}</div>
    </div>
  );
};

export default DescriptionBox;
