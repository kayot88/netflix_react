import React, { useState } from "react";
import { Form, HeaderComponent } from "../components";
import FooterContainer from "../containers/Footer";

export const SigninPage = () => {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  
  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const isInvalid = password === "" || emailAddress === "";
  return (
    <React.Fragment>
      <HeaderComponent>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              placeholder="Email or phone number"
              value={emailAddress}
              type="email"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderComponent>
      <FooterContainer />
    </React.Fragment>
  );
};
