import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { RiEBikeLine } from "react-icons/ri";

const Faq = () => {
  return (
    <div className="faq_section padding-block">
      <div className="container px-sm-2 px-4">
        <div className="row">
          <div className="col-lg-7">
            <div className="faq_header d-flex align-items-center justify-content-between">
              <h4 className="font-primary fw-bold text-capitalize mb-4">
                frequently asked questions
              </h4>
              <a href="#" className="text-decoration-none">
                I want to know more{" "}
                <span>
                  {" "}
                  <i className="fa fa-arrow-up"></i>
                </span>
              </a>
            </div>
            <div className="faq_tab d-flex align-items-center gap-3">
                <button type="button" className="faq_tab_btn"><span><IoGridOutline /></span>General</button>
                <button type="button" className="faq_tab_btn"><span><FaCar /></span>Car</button>
                <button type="button" className="faq_tab_btn"><span><IoGridOutline /></span>Motorcycyle</button>
                <button type="button" className="faq_tab_btn"><span><RiEBikeLine /></span>Health</button>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
