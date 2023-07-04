import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-f">
        <div className="row-f">
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#FAQ">FAQ</a></li>
              <li><a href="#support">Support center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#product">Our Services</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#whatsapp"><i className="fab fa-whatsapp"></i></a>
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright text-center">
          <h5>
            {new Date().getFullYear()} all rights reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
