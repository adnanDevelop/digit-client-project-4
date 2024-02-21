import React from "react";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 col-xl-6">
            <div className="hero_content">
              <h1>Canada deserves more</h1>
              <h2 className="font-primary">More Saings, More Happiness</h2>
              <div className="hero_btn d-flex align-items-center gap-3">
                <button type="button">Car Quote</button>
                <button type="button">Home Quote</button>
                <button type="button">Bundle to Save</button>
              </div>
              <button className="hero_main_btn">
                Chat with an epxert{" "}
                <span>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </button>
              <p className="small_text">Save upto 35% on your premium</p>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6 px-0">
            <div className="hero_img">
                <img src="/image/hero-img.avif"  alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
