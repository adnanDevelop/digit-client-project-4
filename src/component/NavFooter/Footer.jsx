import React from "react";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="container px-sm-2 px-4">
        <div className="row py-4">
          <div className="col-lg-6 col-md-4 mb-5">
            <div className="footer_logo">
              <h2 className="text-white">digit</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="footer_link_section">
              <div className="footer_input d-flex align-items-center gap-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="footer_btn d-flex align-items-center justify-content-center">
                  Subscribe{" "}
                  <span>
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button>
              </div>
              <div className="footer_link">
                <div className="row">
                  <div className="col-sm-4 col-6 border-right">
                    <ul className="list-unstyled">
                      <li className="footer_item"><a href="#home">Board of Directors</a></li>
                      <li className="footer_item"><a href="#home">Leadership team</a></li>
                      <li className="footer_item"><a href="#home">Careers</a></li>
                      <li className="footer_item"><a href="#home">About us</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 col-6 border-right ">
                     <ul className="list-unstyled">
                      <li className="footer_item"><a href="#home">Contact us</a></li>
                      <li className="footer_item"><a href="#home">FAQs</a></li>
                      <li className="footer_item"><a href="#home">News</a></li>
                      <li className="footer_item"><a href="#home">Refer a friend</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4  mt-sm-0 mt-4 border-right ">
                     <ul className="list-unstyled">
                      <li className="footer_item"><a href="#home">Privacy policy</a></li>
                      <li className="footer_item"><a href="#home">Legal</a></li>
                      <li className="footer_item"><a href="#home">Accessibility</a></li>
                      <li className="footer_item"><a href="#home">Sitemap</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter py-4 d-flex align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column">
          <div className="footer_icon d-flex align-items-center gap-4 pb-3">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-linkedin"></i>
          </div>
          <div className="subfooter_content text-sm-start text-center ">
            <p className="mb-0">&copy; 2024, All rights reserved</p>
            <p className="mb-0">Embark is a trademark of Embark Student Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
