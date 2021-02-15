import React from 'react';
import { getByText, render, screen, container } from '@testing-library/react';
import 'jest-styled-components';
import Footer from '../../containers/footer';

describe('<Footer/> ', () => {
  it('should rendered with correct info', () => {
    const { container, getByText, getByTestId } = render(<Footer />);
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByTestId('FAQ')).toHaveStyleRule('color', '#757575');
    expect(getByTestId('FAQ')).toBeInTheDocument();
  });
});

const links = [
  { text: 'FAQ', location: '/' },
  { text: 'Investor Relations', location: '/' },
  { text: 'Ways to Watch', location: '/' },
  { text: 'Corporate Information', location: '/' },
  { text: 'Netflix Originals', location: '/' },
];

test.each(links)('Check if Footer have %s link.', (link) => {
  render(<Footer />);
  //Ensure the text is in the dom, will throw error it can't find
  const linkDom = screen.getByText(link.text);

  //use jest assertion to verify the link property
  expect(linkDom).toHaveAttribute('href', link.location);
});
