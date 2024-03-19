import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <a href="#" class="footer-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
              alt=""
            />
          </a>

          <p>Welcome to the Future</p>
          <ul className="social-links">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Contact Us</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact BMW Financial Services</a>
            </li>
            <li>
              <a href="#">Find a BMW center</a>
            </li>
            <li>
              <a href="#">Local genius</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Quick links</h3>

          <ul>
            <li>
              <a href="#">Book a Test Drive</a>
            </li>
            <li>
              <a href="#">Get a Brochure</a>
            </li>
            <li>
              <a href="#">Book a service</a>
            </li>
            <li>
              <a href="#">Bmw Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Legal</h3>
          <ul>
            <li>
              <a href="#">Service Booking legal information</a>
            </li>
            <li>
              <a href="#">Connected Drive legal information</a>
            </li>
            <li>
              <a href="#">Product safety inquiry</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2024 Rockstar Entertainment. All Reserved.Rockstar in US
            ansnd other countries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
