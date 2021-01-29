import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../components/header/header";
import { Loading } from "../components/spinner/spinner";
import { ReleaseBody } from "../components/spinner/styles/spinner";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./ProfileContainer";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const BrowseContainer = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  console.log("loading", loading);
  console.log("profile.displayName", profile);

  useEffect(() => {
    console.log("profile.displayName from", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <Fragment>
      {loading ? <Loading src={user.photoURL} /> : <ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.LogoImage
            to={ROUTES.HOME}
            src={logo}
            alt="Netflix"
          />
        </Header.Frame>
        <Header.Feature>
          <Header.Title>Watch Joker now</Header.Title>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </Fragment>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
