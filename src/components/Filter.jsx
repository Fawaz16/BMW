import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import Card from "./Card";
import Button from "./Button";

const Filter = () => {
  const [item, setItem] = useState(Data);
  const menuItem = [...new Set(Data.map((val) => val.category))];

  const filterItem = (cat) => {
    const newItem = Data.filllllter((newval) => newval.category === cat);
    setItem(newItem);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1
          className="text-center col-12 fw-bold my-3 mb-5 selection"
          data-aos="zoom-in"
          data-aos-duration="0.6s"
        >
          Select your Car
        </h1>
        <Button menuItem={menuItem} filterItem={filterItem} setItem={setItem} />
        <Card item={item} />
      </div>
    </div>
  );
};

export default Filter;
