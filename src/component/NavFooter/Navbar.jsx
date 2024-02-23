import React, { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <nav className="position-relative bg-white position-sticky top-0 left-0">
      <div className={`nav_body ${activeNav ? "active" : " "}`}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <ul className="list-unstyled nav_items">
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Accounts</a>
                </li>
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Credits</a>
                </li>
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Mortages</a>
                </li>
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Borrowing</a>
                </li>
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Investment</a>
                </li>
                <li>
                  <a href="#home" onClick={() => setActiveNav(false)}>Banking Simplii</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="nav_content">
                    <h5 className="font-primary mb-4 fw-bold">
                      Products and services
                    </h5>
                    <ul className="list-unstyled nav_items border-0" >
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Accounts</a>
                      </li>
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Credits</a>
                      </li>
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Mortages</a>
                      </li>
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Borrowing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nav_content">
                    <h5 className="font-primary mb-4 fw-bold">
                      Tools and resources
                    </h5>
                    <ul className="list-unstyled nav_items border-0">
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Accounts</a>
                      </li>
                      <li>
                        <a href="#home" onClick={() => setActiveNav(false)}>Credits</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 d-lg-block d-none">
              <div className="nav_card  overflow-hidden ">
                <img src="/image/nav-img.avif" className="img-fluid" alt="" />
                <div className="nav_card_body">
                  <h5 className="font-primary fw-bold my-3">Borring can be simple</h5>
                  <p>Find a borrowing option that fits your needs and financial goals.</p>
                  <a href="#home" className="d-flex align-items-center">Learn more<i className="fa fa-arrow-right ps-2"></i></a>
                </div>
                </div>              
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-sm-5 px-4">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 col-3 ">
            {activeNav ? null : (
              <div
                className="nav_icon d-flex align-items-center justify-content-start"
                onClick={() => setActiveNav(true)}
              >
                <i className="fa fa-bars"></i> &nbsp; MENU
              </div>
            )}
          </div>
          <div className="col-md-4 col-5 px-0 d-flex align-items-center justify-content-center">
            <a className="navbar-brand order-0" href="#home">
              <h3 className="fw-bold mb-0 text-center ">digit</h3>
            </a>
          </div>
          <div className="col-md-4 col-4 px-0">
            {activeNav ? (
              <div
                className="nav_icon d-flex align-items-center justify-content-end"
                onClick={() => setActiveNav(false)}
              >
                <i class="fa-solid fa-xmark"></i> &nbsp; CLOSE
              </div>
            ) : (
              <div className="navbar_buton d-flex align-items-center justify-content-end gap-3">
                <button className="btn btn-secondary">Sign On</button>
                <button className="btn btn-primary d-md-block d-none">
                  Join Simplii
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

{
  /*

 <nav
      id="navbar-section"
      className={`navbar navbar-expand-lg ${
        scrollAnimation ? "nav-scroll" : ""
      }`}
    >
      <div className="container-fluid d-flex align-item-center px-md-5 px-4">
        <a className="navbar-brand order-0" href="#home">
          <h3 className="fw-bold">digit</h3>
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
*/
}

export default Navbar;
