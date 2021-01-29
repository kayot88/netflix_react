import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Form, Wrapper } from "../components";

export const SignupPage = () => {
  const history = useHistory(ROUTES);
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const isInvalid = name === "" || email === "" || password === "";
  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        return res.user.updateProfile({
          displayName: name,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setError(error.message);
      });
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              autoComplete="off"
              placeholder="First name"
              value={name}
              type="text"
              onChange={({ target }) => {
                return setName(target.value);
              }}
            />
            <Form.Input
              autoComplete="off"
              placeholder="Email address"
              value={email}
              type="email"
              onChange={({ target }) => {
                return setEmail(target.value);
              }}
            />
            <Form.Input
              autoComplete="off"
              placeholder="password"
              value={password}
              type="password"
              onChange={({ target }) => {
                return setPassword(target.value);
              }}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <Form.Link to="/signin">Sign in now</Form.Link>
          </Form.Text>
        </Form>
      </Wrapper>
    </React.Fragment>
  );
};
