import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { RiEBikeLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Faq = () => {
  const btn = document.querySelectorAll(".faq_tab_btn");
  btn.forEach((element) => {
    element.addEventListener("click", () => {
      btn.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    });
  });

  return (
    <div className="faq_section padding-block">
      <div className="container px-sm-2 px-4">
        <div className="row g-4">
          <div className="col-lg-7 pe-lg-4 mb-lg-0 mb-4">
            <div className="faq_header d-flex align-items-center justify-content-between flex-wrap mb-4">
              <h4 className="font-primary fw-bold text-capitalize">
                frequently asked questions
              </h4>
              <a href="#home" className="text-decoration-none">
                I want to know more{" "}
                <span>
                  {" "}
                  <i className="fa fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className="faq_tab d-flex align-items-center justify-content-sm-start justify-content-center flex-wrap gap-3">
              <button type="button" className="faq_tab_btn">
                <span className="me-2">
                  <IoGridOutline />
                </span>
                General
              </button>
              <button type="button" className="faq_tab_btn">
                <span className="me-2">
                  <FaCar />
                </span>
                Car
              </button>
              <button type="button" className="faq_tab_btn">
                <span className="me-2">
                  <RiEBikeLine />
                </span>
                Motorcycyle
              </button>
              <button type="button" className="faq_tab_btn">
                <span className="me-2">
                  <MdOutlineHealthAndSafety />
                </span>
                Health
              </button>
            </div>
            <div className="faq mt-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item shadow-sm mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Qoala?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classNamees that we use to style each element. These
                      classNamees control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item shadow-sm mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Why should I renewing insurance online with Qoala?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the second item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classNamees that we use to style each element. These
                      classNamees control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item shadow-sm mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      What are the types of payment options available?
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the third item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this
                      with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item shadow-sm mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Who are Qoala insurance and takeful provider?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the third item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this
                      with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      Are my personal details safe when renewing insurance
                      online?
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the third item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this
                      with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-3">
            <div className="detail_section">
              <h4 className="font-primary fw-bold text-capitalize mb-4">
                We are here for you.
              </h4>
              <p>
                Have any questions or complaints, contact us because we are
                always ready to help you.
              </p>
              <div className="row mt-5">
                <div className="col-sm-6 mb-sm-0 mb-4">
                  <div className="detail_card">
                    <i className="fa fa-envelope"></i>
                    <h5 className="font-primary">General Enquiries</h5>
                    <a href="mailto:cs@qoala.com">cs@qoala.com</a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="detail_card">
                    <i className="fa fa-phone"></i>
                    <h5 className="font-primary">Sale Enquiries</h5>
                    <a href="phone:cs@qoala.com">(+60) 38605 3353</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
