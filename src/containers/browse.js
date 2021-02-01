import React, { useState, useEffect, useContext } from 'react';
import { Card, Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from '.';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';
import Footer from '@bit/kayot88.neflify.footer.footer';

export default function BrowseContainer({ slides }) {
  const [selection, setSelection] = useState('series');
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('Changed', profile.displayName);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={`/images/users/${user.photoURL}.png`} />
      ) : (
        <Loading.ReleaseBody />
      )}

      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} />
            <Header.TextLink>Serials</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <ErrorBoundary>
            <Header.Group>
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.Text>{user.displayName}</Header.Text>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </ErrorBoundary>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>

      <Footer />
    </>
  ) : (
    <>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </>
  );
}
