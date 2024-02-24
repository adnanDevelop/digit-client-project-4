import React from "react";

const Team = () => {
  return (
    <div className="team_section d-flex align-items-center justify-content-center">
      <div className="container px-sm-2 px-4">
        <div className=" position-relative">
          <div className="choose_shape"></div>
        </div>
        <div className="row bg-white px-md-5 px-4 team_padding d-flex justify-content-between">
          <div className="col-12 mx-auto">
            <div className="team_body">
              <div className="row">
                {/* TEAM CONTENT SECTION */}
                <div className="col-lg-4 pe-lg-4 mb-lg-0 mb-5">
                  <div className="team_content">
                    <h4 className="font-primary fw-bold mb-4">
                      Get to know your mortage specialist
                    </h4>
                    <p className="content mb-lg-5 mb-4">
                      Move closer to Martage-free life with help from our
                      expert. One of our specialist will answer your questions
                      and guide you to a mortage that suits your need. No
                      pressure.
                    </p>
                    <p className="text-sm mb-4">Ready to get started?</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
                {/* TEAM CARD SECTION */}
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-4 col-6 ">
                      <div className="team_card text-center">
                        <img
                          src="/image/team/img-1.png"
                          alt=""
                        />
                        <div className="team_body text-center">
                          <h5
                            className="font-primary fw-bold"
                          >
                            Chirag C.
                          </h5>
                          <p>Mortage Specialist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 ">
                      <div className="team_card text-center">
                        <img
                          src="/image/team/img-2.png"
                          alt=""
                        />
                        <div className="team_body text-center">
                          <h5
                            className="font-primary fw-bold"
                          >
                            Roy L.
                          </h5>
                          <p>Mortage Specialist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 ">
                      <div className="team_card text-center">
                        <img
                          src="/image/team/img-3.png"
                          alt=""
                        />
                        <div className="team_body text-center">
                          <h5
                            className="font-primary fw-bold"
                          >
                            John B.
                          </h5>
                          <p>Mortage Specialist</p>
                        </div>
                      </div>
                    </div>
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

export default Team;
