import React from "react";
import {
  Container,
  Image,
  Inner,
  Item,
  Pane,
  SubTitle,
  Title,
  AnimationCard,
} from "./styles/jumbotron";

export const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
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
Jumbotron.AnimationCard = ({ children, ...restProps }) => {
  return <AnimationCard {...restProps}>{children}</AnimationCard>;
};
Jumbotron.Image = ({ children, ...restProps }) => {
  return (
    <div>
      <Image {...restProps} />
      <div>
        <video autoPlay playsInline loop muted style={{ objectFit: "contain" }}>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Jumbotron;
