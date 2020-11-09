import React from "react";
import AccordeonContainer from "../containers/AccordeonFaqs";
import FooterContainer from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import JumbotronContainer from "../containers/Jumbo";

export const Home = () => {
  return (
    <div>
      <HeaderContainer/>
      <JumbotronContainer />
      <AccordeonContainer />
      <FooterContainer />
    </div>
  );
};

