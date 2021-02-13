import React from 'react';
import { Feature, OptForm, Jumbotron } from '../components';
import { HeaderContainer, FaqsContainer, FooterContainer } from '../containers';
import jumboData from '../fixtures/jumbo';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Enjoy on your TV.</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image1
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="first image"
          />
        </Jumbotron.Pane>
      </Jumbotron>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Image2
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="second image"
          />
        </Jumbotron.Pane>
        <Jumbotron.Pane style={{ flexDirection: 'column' }}>
          <Jumbotron.Title>
            Download your programmes to watch on the go.
          </Jumbotron.Title>
          <Jumbotron.SubTitle>
            Save your data and watch all your favourites offline.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
      </Jumbotron>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Watch everywhere.</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image3
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="thirth image"
          />
        </Jumbotron.Pane>
      </Jumbotron>

      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
