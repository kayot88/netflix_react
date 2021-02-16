import React from 'react';
import { getByText, render, screen, container, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Footer from '../../containers/footer';

afterEach(cleanup)
describe('<Footer/> ', () => {
  it('should rendered with correct info', () => {
    const { container, getByText, getByTestId } = render(<Footer />);
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByTestId('FAQ')).toHaveStyleRule('color', '#757575');
    expect(getByTestId('FAQ')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
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
  const linkDom = screen.getByText(link.text);
  expect(linkDom).toHaveAttribute('href', link.location);
});
