import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const Article = () => {
  const articleContent = [
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          style={{ width: "100%", height: "250px" }}
          src="https://www.youtube.com/embed/afsMDotwJzg?si=SOlfMa__TxY3BqC-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ];

  return (
    <div className="article_section" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="container px-sm-2 px-4">
        <div className="row">
          <div className="article_header text-center mb-5 position-relative">
            <h2
              className="text-capitalize font-secondary"
              style={{ fontWeight: "600" }}
            >
              Trending Article & Videos
            </h2>
            <p> Find the latest information here</p>
            <div
              className="choose_shape"
              style={{ maxWidth: "25rem", backgroundColor: "white" }}
            ></div>
          </div>
          <div className="article_tab_btn d-flex align-items-center justify-content-center flex-wrap gap-4">
            <button type="button" className="article_btn active">
              All
            </button>
            <button type="button" className="article_btn">
              Articles
            </button>
            <button type="button" className="article_btn">
              Videos
            </button>
          </div>
        </div>
        <div className="article_card_section">
          <div className="row">
            <Swiper
              spaceBetween={20}
              effect={"coverflow"}
              navigation={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                572: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="mySwiper"
            >
              {articleContent.map((element, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="article_video">{element.video}</div>
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

export default Article;
