import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Player } from '../../components/player/index.jsx';

describe('<Player/>', () => {
  it('Player rendered with the bunny video', () => {
    const { container, queryByTestId, getByRole } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );
    expect(queryByTestId('player')).toBeFalsy();

    fireEvent.click(screen.getByText('Play'));
    expect(queryByTestId('player')).toBeTruthy();

    screen.getByRole('close');
    fireEvent.click(screen.getByRole('close'));
    expect(queryByTestId('player')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
