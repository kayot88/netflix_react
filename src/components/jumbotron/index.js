import React from 'react';
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image1,
  AnimationCard1,
  AnimationCard2,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Container {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Container>
  );
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image1 = ({ children, ...restProps }) => {
  return (
    <div style={{position: "relative", overflow: "hidden"}}>
      <Image1 {...restProps} />
      <AnimationCard1>
        <video autoPlay playsInline muted loop>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          ></source>
        </video>
      </AnimationCard1>
    </div>
  );
};
Jumbotron.Image2 = ({ children, ...restProps }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Image1 {...restProps} />
      
    </div>
  );
};
Jumbotron.Image3 = ({ children, ...restProps }) => {
  return (  
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Image1 {...restProps} />
      <AnimationCard2 style={{  overflow: 'hidden' }}>
        <video autoPlay playsInline muted loop>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          ></source>
        </video>
      </AnimationCard2>
    </div>
  );
};