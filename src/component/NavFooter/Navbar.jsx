import React, { useState } from "react";

const Navbar = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setScrollAnimation(true) : setScrollAnimation(false);
  });


  return (
    <nav
      id="navbar-section"
      className={`navbar navbar-expand-lg ${
        scrollAnimation ? "nav-scroll" : ""
      }`}
    >
      <div className="container d-flex align-item-center px-sm-2 px-4">
        <a className="navbar-brand order-0" href="#">
          <h3 className="fw-bold">digit</h3>
          {/* <img src="Images/logo.png" alt="" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa-solid fa-bars-staggered "></i>
        </button>
        <div
          className="collapse navbar-collapse order-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#policy">
                Preview Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#claim">
               Claims
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#help">
                Help Center
              </a>
            </li>
          </ul>
          <div className="d-lg-block d-none">
          <p className="mb-0 nav-num" >90645665</p>
        </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
