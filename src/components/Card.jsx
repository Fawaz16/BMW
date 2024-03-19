import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";

const Card = ({ item }) => {
  return (
    <div className="container-fluid  mt-5">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div
            key={val.id}
            className="col-md-4 col-sm-6 my-3 border-0"
            data-aos="zoom-in"
            data-aos-duration="0.8s"
          >
            <div className="card-img-top  text-center">
              <img src={val.image} alt="" className="w-100" />

              <div className="card-body">
                <div className="card-title fw-bold fs-4">
                  {val.title} -- {val.price}
                </div>
                <div className="card-text">{val.description}</div>
                <button className="button2">
                  <a href="">Read more</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
