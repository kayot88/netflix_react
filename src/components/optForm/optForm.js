import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/optStyles";

const OptForm = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

OptForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};
OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="arrow" />
    </Button>
  );
};
OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
OptForm.Break = ({ children, ...restProps }) => {
  return <Break {...restProps} />;
};

export default OptForm;
