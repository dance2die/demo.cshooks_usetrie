import * as React from "react";
import { Link } from "@reach/router";
import { Words } from "@cshooks/usetrie";
import styled from "styled-components";

const Container = styled.section``;
const Header = styled.header``;
const Body = styled.section``;
const AvailableWordsContainer = styled.section``;
const SearchContainer = styled.section``;

interface DemoProps {
  title: string;
  words: Words;
}

function Demo<DemoProps>({ title, words }) {
  const [term, setTerm] = React.useState("");
  const [isExact, setIsExact] = React.useState(true);

  function checkIfTermExists(e) {
    const { value: entered } = e.target;
    setTerm(entered);
  }

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <div>
          <Link to="/">🏠 Back to Home</Link>
        </div>
      </Header>
      <AvailableWordsContainer>
        <h2>Following words are available for search</h2>
        <ul>
          {words.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </AvailableWordsContainer>
      <SearchContainer />
    </Container>
  );
}

export default Demo;
