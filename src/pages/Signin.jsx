import React, { useContext, useState } from "react";
import {useHistory} from 'react-router-dom';
import { Form, HeaderComponent } from "../components";
import FooterContainer from "../containers/Footer";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export const SigninPage = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const isInvalid = password === "" || emailAddress === "";
  return (
    <React.Fragment>
      <HeaderComponent>
        <HeaderComponent.LogoImage/>

        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              autoComplete="Email or phone number"
              placeholder="Email or phone number"
              value={emailAddress}
              type="email"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>
            <Form.Input
              autoComplete="Password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderComponent>
      <FooterContainer />
    </React.Fragment>
  );
};
