import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const ChildComponent = ({ index, isActive }) => {
    return (
      <div style={{ display: isActive ? "block" : "none" }}>
        Child {index + 1}
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };
  return (
    <div className="container">
      <div className="slide">
        {/* items */}

        <div className="item">
          <div className="content">
            <div className="name">BMW I</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptas provident rem nemo mollitia suscipit sit quisquam nam eos
              nostrum quasi commodi eius perspiciatis, hic, et error enim nobis
              officia.
            </div>
            <button>See more</button>
          </div>
        </div>

        <div className="item2">
          <div className="content">
            <div className="name">BMW IX</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptas provident rem nemo mollitia suscipit sit quisquam nam eos
              nostrum quasi commodi eius perspiciatis, hic, et error enim nobis
              officia.
            </div>
            <button>See more</button>
          </div>
        </div>

        <div className="item3">
          <div className="content">
            <div className="name">BMW IXM60</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptas provident rem nemo mollitia suscipit sit quisquam nam eos
              nostrum quasi commodi eius perspiciatis, hic, et error enim nobis
              officia.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item4">
          <div className="content">
            <div className="name">BMW I7</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptas provident rem nemo mollitia suscipit sit quisquam nam eos
              nostrum quasi commodi eius perspiciatis, hic, et error enim nobis
              officia.
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item5">
          <div className="content">
            <div className="name">BMW I5</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptas provident rem nemo mollitia suscipit sit quisquam nam eos
              nostrum quasi commodi eius perspiciatis, hic, et error enim nobis
              officia.
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>

      {/*  */}
      {/* next button */}
      <div className="button">
        <ChildComponent index={currentIndex} isActive={true} />
        <button className="prev" onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
