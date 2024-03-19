import React from "react";
import Data from "./Data";

const Button = ({ menuItem, filterItem, setItem }) => {
  return (
    <div className="d-flex justify-content-center button " data-aos="zoom-in" data-aos-duration="0.8s">
      {menuItem.map((val) => (
        <button className="btn " onClick={() => filterItem(val)}>
          {val}
        </button>
      ))}
      <button className="btn " onClick={() => setItem(Data)}>
        All
      </button>
    </div>
  );
};

export default Button;
