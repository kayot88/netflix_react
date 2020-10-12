import React, { createContext, useContext, useState } from "react";
import { Container, Inner, Item, Frame, Body, Title, Header } from "./styles";
const ToggleContext = createContext();

const Accordeon = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

Accordeon.Item = function AccordeonItem({ children, ...restProps }) {
  const [show, setShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordeon.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordeon.Header = function AccordeonHeader({ children, ...restProps }) {
  const { show, setShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setShow((show) => !show)} {...restProps}>
      {children}
      {/* <pre>{JSON.stringify(show, null, 2)}</pre> */}
      {show ? (
        <img src="/images/icons/close.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="add" />
      )}
    </Header>
  );
};
Accordeon.Body = function AccordeonBody({ children, ...restProps }) {
  const { show } = useContext(ToggleContext);
  return show && <Body {...restProps}>{children}</Body>;
};
Accordeon.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default Accordeon;
