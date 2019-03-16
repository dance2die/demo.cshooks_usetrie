import * as React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10rem 0;
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

function HomePage() {
  return (
    <Container>
      <Header>
        <h1>
          <a
            target="_blank"
            rel="noopener nonreferrer"
            href="https://www.npmjs.com/package/@cshooks/usetrie"
          >
            @cshooks/usetrie
          </a>{" "}
          Demos
        </h1>
      </Header>
      <section>
        <ul>
          <li>
            <Link to="string">String array demo</Link>
          </li>
          <li>
            <Link to="object">Object array demo</Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}

export default HomePage;
