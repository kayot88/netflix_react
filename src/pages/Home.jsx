import React from "react";
import { Wrapper } from "../components";
import AccordeonContainer from "../containers/AccordeonFaqs";
import FooterContainer from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import JumbotronContainer from "../containers/Jumbo";

export const Home = () => {
  return (
    <div>
      {/* <Wrapper> */}

      <HeaderContainer/>
      <JumbotronContainer />
      <AccordeonContainer />
      <FooterContainer />
      {/* </Wrapper> */}
    </div>
  );
};

