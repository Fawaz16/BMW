import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
  return (
    <div className="explore">
      {" "}
      <video
        src=" https://cdn.pixabay.com/vimeo/837413029/car-167659.mp4?width=960&hash=43ba1043ee19fa970e154967bbbb973f7d1bb536"
        autoPlay
        loop
        muted
      ></video>
      <div className="desc" data-aos="zoom-in" data-aos-duration="0.4s">
        <h2>Create your perfect lexus</h2>
        <h1>Build Yours</h1>
        <button> Build your lexus</button>
      </div>
      <div className="recommend" data-aos="fade-up" data-aos-duration="0.4s">
        <h1>Our recommendation</h1>
        <div className="details">
          <img
            src="https://bmw.scene7.com/is/image/BMW/Nx-X5-Home-3000x3000?wid=3000&hei=3000"
            alt=""
          />
          <div
            className="detail2"
            data-aos="fade-left"
            data-aos-duration="0.4s"
          >
            <h3>Rc 230</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              quidem vitae, enim est repellat mollitia quaerat unde sunt neque
              molestias asperiores ratione, officiis doloribus sed cum. Aperiam
              quas sequi soluta.
            </p>
            <button data-aos="fade-right" data-aos-duration="0.4s">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
