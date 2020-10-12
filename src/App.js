import React from "react";
import AccordeonContainer from "./containers/AccordeonFaqs";
import FooterContainer from "./containers/Footer";
import JumbotronContainer from "./containers/Jumbo";

const App = () => {
  return (
    <div>
      <JumbotronContainer />
      <AccordeonContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
