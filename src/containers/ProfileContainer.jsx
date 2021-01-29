import React, { Fragment } from "react";
import { HeaderComponent } from "../components";
import { Profiles } from "../components/profile/profile";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function ProfileContainer({ user, setProfile }) {
  return (
    <Fragment>
      <HeaderComponent>
        <HeaderComponent.Frame>
          <HeaderComponent.LogoImage
            to={ROUTES.HOME}
            src={logo}
            alt="Netflix"
          />
        </HeaderComponent.Frame>
      </HeaderComponent>

      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                userPhoto: user.photoURL,
              });
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </Fragment>
  );
}
