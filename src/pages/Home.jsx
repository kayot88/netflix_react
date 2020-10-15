import React from "react";
import AccordeonContainer from "../containers/AccordeonFaqs";
import FooterContainer from "../containers/Footer";
import JumbotronContainer from "../containers/Jumbo";

export const Home = () => {
  return (
    <div>
      <JumbotronContainer />
      <AccordeonContainer />
      <FooterContainer />
    </div>
  );
};

