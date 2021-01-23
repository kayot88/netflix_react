import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import { Normalize } from "styled-normalize";
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Normalize />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
