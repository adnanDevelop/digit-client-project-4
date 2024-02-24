import React from "react";
import Hero from "../element/Hero";
import Company from "../element/Company";
import Choose from "../element/Choose";
import Insurance from "../element/Insurance";
import Testmonial from "../element/Testmonial";
import Team from "../element/Team";
import Faq from "../element/Faq";
import Article from "../element/Article";

const Main = () => {
  return (
    <div>
      <Hero />
      <Company />
      <Insurance />
      <Choose />
      <Testmonial />
      <Article />
      <Team />
      <Faq />
    </div>
  );
};

export default Main;
