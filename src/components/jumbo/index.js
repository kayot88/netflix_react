import React from "react";
import { Container, Inner, Pane, Title, SubTitle, Image } from "./styles/jumbotron";

export const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>;
};

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};
