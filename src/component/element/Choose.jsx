import React from "react";
import { CiBitcoin } from "react-icons/ci";
import { BsCoin } from "react-icons/bs";
import { TbCoinFilled } from "react-icons/tb";

const Choose = () => {
  const chooseContent = [
    {
      title: "No fees",
      content:
        "Don't worry about shipping or delivery cost. There are no fees when you order.",
      icon: <CiBitcoin />,
    },
    {
      title: "Get rates",
      content:
        "Enjoy competitive exchange rates for all your foreign currency needs.",
      icon: <BsCoin />,
    },
    {
      title: "Get cash fast",
      content:
        "Your cash typically delivered to you or the nearest Canada post in as.",
      icon: <TbCoinFilled />,
    },
    {
      title: "No fees",
      content:
        "Don't worry about shipping or delivery cost. There are no fees when you order foreign cash from us.",
      icon: <CiBitcoin />,
    },
    {
      title: "Great rates",
      content:
        "Enjoy competitive exchange rates for all your foreign currency needs.",
      icon: <BsCoin />,
    },
    {
      title: "Get cash fast",
      content:
        "Your cash typically delivered to you or the nearest Canada post in as 1 to 3 business days.",
      icon: <TbCoinFilled />,
    },
  ];

  return (
    <div className="choose_section">
      <div className="container px-sm-2 px-4">
        <div className="row 4">
          <div className="choose_header position-relative text-center">
            <h2 className="text-capitalize" style={{ fontWeight: "700" }}>
              why choose us?
            </h2>
            <div className="choose_shape"></div>
          </div>
        </div>
        <div className="choose_card_section">
          <div className="row ">
            {chooseContent.map((element, index) => {
              return (
                <div className="col-lg-4 col-sm-6 mb-lg-5 mb-4" key={index}>
                  <div className="choose_card d-flex align-items-center gap-3">
                    <p className="choose_icon">{element.icon}</p>
                    <div className="choose_body px-md-4 px-3">
                      <h5 className="choose_title font-primary">
                        {element.title}
                      </h5>
                      <p className="choose_content">{element.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
