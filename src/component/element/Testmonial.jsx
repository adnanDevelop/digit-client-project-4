import React from "react";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay , Pagination } from "swiper/modules";

const Testmonial = () => {
  const reviewContent = [
    {
      content: "Quick and simple",
      title: "Val",
      date: "3 days , 23 hours ago",
    },
    {
      content:
        "Good price for insurance, and a good variety of trusted providers listed depending on the type of  insurance desired.",
      title: "Har-el",
      date: "5 days , 23 hours ago",
    },
    {
      content:
        "I recently used RatedDotCa for my insurance policy renewal and had a fantastic experience with Zeelia ranger from Scoop Ins.",
      title: "Har-el",
      date: "5 days , 23 hours ago",
    },
    {
      content: "Quick and simple",
      title: "Val",
      date: "3 days , 23 hours ago",
    },
    {
      content:
        "Good price for insurance, and a good variety of trusted providers listed depending on the type of  insurance desired.",
      title: "Har-el",
      date: "5 days , 23 hours ago",
    },
    {
      content:
        "I recently used RatedDotCa for my insurance policy renewal and had a fantastic experience with Zeelia ranger from Scoop Ins.",
      title: "Har-el",
      date: "5 days , 23 hours ago",
    },
  ];

  return (
    <div className="testmonial_section ">
      <div className="container px-sm-2 px-4">
        <div className="row 4">
          <div className="choose_header position-relative text-center">
            <h2
              className="text-capitalize font-primary "
              style={{ fontWeight: "600" }}
            >
              What People say about our quote?
            </h2>
            <div className="review_star d-flex align-items-center justify-content-center gap-2">
              <div className="d-flex gap-2">
                <span className="star">
                  <IoMdStar />
                </span>
                <span className="star">
                  <IoMdStar />
                </span>
                <span className="star">
                  <IoMdStar />
                </span>
                <span className="star">
                  <IoMdStar />
                </span>
              </div>
              <p className="mb-0 fw-light d-flex align-items-center justify-content-center gap-1">
                Based on{" "}
                <span className="" style={{ fontWeight: "600" }}>
                  6,022 reviews
                </span>
                <span className="one_star fw-light text-green">
                  <IoMdStar />
                </span>
                <span style={{ fontWeight: "600" }}>Trustpilot</span>
              </p>
            </div>
            <div className="choose_shape" style={{ maxWidth: "25rem" }}></div>
          </div>
        </div>
        <div className="choose_card_section">
          <div className="row ">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              navigation={true}
              pagination={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                572: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
                modules={[ Autoplay , Pagination]}
              className="mySwiper"
            >
              {reviewContent.map((element, index) => {
                return (
                  <SwiperSlide key={index} className="swiper_card">
                    <div className="review_card">
                      <p className="review_content">{element.content}</p>
                      <div className="review_footer w-100">
                        <h5
                          style={{ fontWeight: "600" }}
                          className="mb-1 font-primary fw-bold"
                        >
                          Val
                        </h5>
                        <div className="date_section">
                          <p className="date mb-0">{element.date}</p>
                          <p className="mb-0">
                            <span className="one_star fw-light text-green">
                              <IoMdStar />
                            </span>
                            <span style={{ fontWeight: "600" }}>
                              Trustpilot
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
