import * as React from "react";
import { Link } from "@reach/router";
import useTrie from "@cshooks/usetrie";

import Demo from "./Demo";

function StringPage() {
  // prettier-ignore
  const words = [
    "abcd", "abce", "ABC", "THE", "their",
    "there", "hel", "hell", "hello", "help",
    "helping", "helps"
  ];
  //   const isCaseSensitive = false;
  //   const trie = useTrie(words, isCaseSensitive);

  //   const [term, setTerm] = React.useState("");
  //   const [isExact, setIsExact] = React.useState(true);

  //   function checkIfTermExists(e) {
  //     const { value: entered } = e.target;
  //     setTerm(entered);
  //   }

  return <Demo title="String Array Demo" words={words} />;
  //     <React.Fragment>
  //       <header>
  //         <h1>Case Insensitive search</h1>
  //       </header>
  //       <section>
  //   <h2>Following words are available for search</h2>
  //   <ul>
  //     {words.map(word => (
  //       <li key={word}>{word}</li>
  //     ))}
  //   </ul>
  //       </section>
  //       <section>
  //         <article>
  //           <div>
  //             <label>
  //               Enter Search Term:
  //               <input type="text" value={term} onChange={checkIfTermExists} />
  //             </label>
  //           </div>
  //           <label>
  //             Exact match?
  //             <input
  //               type="checkbox"
  //               checked={isExact}
  //               onChange={e => setIsExact(e.target.checked)}
  //             />
  //           </label>
  //         </article>
  //         <article>
  //           <p>
  //             The term "{term}"{" "}
  //             {trie.has(term, isExact) ? "exists" : "does not exist!"}
  //           </p>
  //         </article>
  //         <article>
  //           <h2>Possible Matches</h2>
  //           <ul>
  //             {trie.search(term).map(word => (
  //               <li key={word}>{word}</li>
  //             ))}
  //           </ul>
  //         </article>
  //       </section>
  //     </React.Fragment>
  //   );
}

export default StringPage;
