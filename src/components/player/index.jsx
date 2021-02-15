import React, { createContext, useState, useContext } from 'react';

import ReactDOM from 'react-dom';
import { Button, Close, Container, Inner, Overlay } from './styles/player';

export const PlayerContext = createContext();

export const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} data-testid="player">
          <Inner >
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close role='close' onClick={() => setShowPlayer(false)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};


