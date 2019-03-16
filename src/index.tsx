import * as React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import useTrie, { Trie } from "@cshooks/usetrie";

import HomePage from "./components/HomePage";
import StringPage from "./components/StringPage";

import "./styles.css";

const log = console.log;

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <StringPage path="/string" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
