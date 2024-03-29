import * as React from "react";
import { Link } from "@reach/router";
import { Words, Word } from "@cshooks/usetrie";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import useTrie from "@cshooks/usetrie";
import uuid from "uuid";

const Container = styled.section`
  height: 100vh;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ContentContainer = styled.section`
  display: grid;
  grid: "Available Search" 1fr / 1.5fr 2fr;
  grid-column-gap: 25px;

  padding-top: 3rem;
`;
const Header = styled.header``;
const Body = styled.section``;
const AvailableWordsContainer = styled.section`
  border-right: 2px dashed rgba(0, 0, 0, 0.5);
  padding-right: 25px;
`;
const SearchContainer = styled.section``;

interface DemoProps {
  title: string;
  words: Words;
}

const WordsSelect = styled.select.attrs({ multiple: true })`
  height: 100%;
`;

const isStringArray = (words: Words) => typeof words[0] === "string";
const idSelector = (word: Word) => (typeof word === "string" ? word : word.id);
const textSelector = (word: Word) =>
  typeof word === "string" ? word : word.text;

function WordList({ words }: { words: Words }) {
  return (
    <WordsSelect>
      {words.map(word => (
        <option key={idSelector(word)}>{textSelector(word)}</option>
      ))}
    </WordsSelect>
  );
}

function FoundList({ words }: { words: string[] }) {
  return (
    <WordsSelect>
      {words.map(word => (
        <option key={word}>{word}</option>
      ))}
    </WordsSelect>
  );
}

function useTrieFactory(words) {
  const isCaseSensitive = false;
  return isStringArray(words)
    ? useTrie(words, isCaseSensitive)
    : useTrie(words, isCaseSensitive, idSelector, textSelector);
}

function Demo<DemoProps>({ title, words }) {
  const trie = useTrieFactory(words);
  const [term, setTerm] = React.useState("");
  const [isExact, setIsExact] = React.useState(true);

  function checkIfTermExists(e) {
    setTerm(e.target.value);
  }

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <div>
          <Link to="/">🏠 Back to Home</Link>
        </div>
      </Header>
      <ContentContainer>
        <AvailableWordsContainer>
          <h2>Available Words</h2>
          <WordList words={words} />
        </AvailableWordsContainer>
        <SearchContainer>
          <article>
            <div>
              <input
                placeholder="Search for a word in the trie"
                type="text"
                value={term}
                onChange={checkIfTermExists}
              />
            </div>
            <label htmlFor="isExact">
              Exact match?
              <input
                style={{ marginLeft: "1rem" }}
                name="isExact"
                type="checkbox"
                checked={isExact}
                onChange={e => setIsExact(e.target.checked)}
              />
            </label>
          </article>
          <article>
            <p>
              The term "{term}"{" "}
              {trie.has(term, isExact) ? "exists" : "does not exist!"}
            </p>
          </article>
          <article>
            <h2>Words Found</h2>
            <FoundList words={trie.search(term)} />
          </article>
        </SearchContainer>
      </ContentContainer>
    </Container>
  );
}

export default Demo;
