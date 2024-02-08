import React, { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Card = () => {
  let [code, setCode] = useState("");
  //his is just for testing
  function showcode() {
    console.log(code);
  }
  return (
    <div>
      <textarea
        onChange={(e) => setCode(e.target.value)}
        className="border w-4/5 h-56"
      ></textarea>

      <button onClick={showcode} className="border py-2 px-4 rounded">
        show Code
      </button>

      <br />

      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Card;
