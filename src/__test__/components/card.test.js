import { fireEvent, getByAltText, render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Card, Player } from '../../components';

const category = 'series';

const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP',
      },
    ],
  },
];

describe('<Card/> rendered with some data', () => {
  it('should render <card/>', () => {
    const {
      getByText,
      queryByText,
      debug,
      container,
      getByTestId,
      getByAltText,
    } = render(
      <Card>
        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category} - ${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => {
                  return (
                    <Card.Item
                      key={item.docId}
                      item={item}
                      data-testid={`${item.slug}`}
                    >
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
      </Card>
    );
    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Feel Good')).toBeTruthy();

    expect(queryByText('documentaries')).toBeFalsy();
    expect(queryByText('18')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render feature text', () => {
    const { queryByText, container, getByTestId, getByAltText } = render(
      <Card>
        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category} - ${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => {
                  return (
                    <Card.Item
                      key={item.docId}
                      item={item}
                      data-testid={`${item.slug}`}
                    >
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
      </Card>
    );
    fireEvent.click(getByTestId('tiger-king'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
