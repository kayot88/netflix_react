import React from "react";
import { HeaderComponent } from "../components";
import logo from "../logo.svg";
import OptContainer from "./OptContainer";
import { Link } from "react-router-dom";

const HeaderContainer = () => {
  return (
    <HeaderComponent>
      <HeaderComponent.Frame>
        <HeaderComponent.LogoImage to={"/signin"} src={logo} alt="Netflix" />
        <Link to={"/signin"}>
          <HeaderComponent.Button>Sign In</HeaderComponent.Button>
        </Link>
      </HeaderComponent.Frame>

      <HeaderComponent.Title>
        Unlimited movies, TV shows, and more.
      </HeaderComponent.Title>
      <HeaderComponent.SubTitle>
        Watch anywhere. Cancel anytime.
      </HeaderComponent.SubTitle>
      <HeaderComponent.SubTitle>
        Ready to watch? Enter your email to create or restart your membership.
      </HeaderComponent.SubTitle>
      <OptContainer />
    </HeaderComponent>
  );
};

export default HeaderContainer;
