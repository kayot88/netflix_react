import React from "react";
import { Accordeon } from "../components";
import FAQs from "../fixtures/faqs.json";
import OptContainer from "./OptContainer";
console.log(FAQs);

const AccordeonFaqs = () => {
  return (
    <Accordeon>
      <Accordeon.Title>Frequently asked questions</Accordeon.Title>
      {FAQs.map((item) => {
        return (
          <Accordeon.Item key={item.id}>
            <Accordeon.Header>{item.header}</Accordeon.Header>
            <Accordeon.Body>{item.body}</Accordeon.Body>
          </Accordeon.Item>
        );
      })}
      <OptContainer />
    </Accordeon>
  );
};

export default AccordeonFaqs;
