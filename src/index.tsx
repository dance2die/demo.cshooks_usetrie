import * as React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import useTrie, { Trie } from "@cshooks/usetrie";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import HomePage from "./components/HomePage";
import StringPage from "./components/StringPage";
import ObjectPage from "./components/ObjectPage";

import "./styles.css";

const log = console.log;

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <HomePage path="/" />
        <StringPage path="/string" />
        <ObjectPage path="/object" />
      </Router>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
