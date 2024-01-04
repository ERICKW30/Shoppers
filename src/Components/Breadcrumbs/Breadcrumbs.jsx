import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumbs = () => {
  const location = useLocation();
  const { productId } = useParams();

  // Extract the pathname from the location

  const pathnames = location.pathname.split("/").filter((x) => x);

  // Capitalize the first letter of each word
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="Breadcrumbs">
      <Link to="/">HOME</Link>
      {pathnames.map((path, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label =
          index === pathnames.length - 1
            ? capitalizeFirstLetter(path)
            : capitalizeFirstLetter(path);
        return (
          // Add the arrow icon to all links except the last one
          <React.Fragment key={path}>
            <Image src={arrow_icon} alt="" />
            {index === pathnames.length - 1 ? (
              <span>{label}</span>
            ) : (
              <Link to={to}>{capitalizeFirstLetter(path)}</Link>
            )}
          </React.Fragment>
        );
      })}
      {productId && (
        <>
          <Image src={arrow_icon} alt="" />
          <span>{productId}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
