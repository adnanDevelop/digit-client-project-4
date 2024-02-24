import React from "react";

const Insurance = () => {
  const insuranceContent = [
    {
      title: "Car insurance",
      content:
        "Whether you leave, finance, or own your car, get the right coverage for your needs and feel confident during the claims process.",
    },
    {
      title: "Home, condo , tenant",
      content:
        "Protect your home and all your personal blongings with coverage that fits your lifestyle and needs.",
    },
    {
      title: "Life insurance(Term life)",
      content:
        "Help protect the financial future of your family and love one with a lump sum tax free payment to your beneficiaries.",
    },
    {
      title: "Travel insurance",
      content:
        "Relax and travel confidence knowing you have the right coverage that best fit your needs.",
    },
  ];

  return (
    <div className="insurance_section">
      <div className="container-fluid px-md-5 px-4">
        <div className="row">
          <div className="insurance_header text-center">
            <h2 className="text-capitalize" style={{ fontWeight: "700" }}>
              Insurance for Car, Home, life , travel and more
            </h2>
          </div>
        </div>
        <div className="insurance_card_section">
          <div className="row g-4">
            {insuranceContent.map((element, index) => {
              return (
                <div className=" col-lg-3 col-md-4 col-sm-6 mb-lg-5 mb-lg-4" key={index}>
                  <div className="insurance_card">
                    <p className="insurance_icon"></p>
                    <div className="insurance_body">
                      <h5 className="insurance_title font-primary my-4">
                        {element.title}
                      </h5>
                      <p className="insurance_content">{element.content}</p>
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

export default Insurance;
