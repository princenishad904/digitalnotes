import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { services } from "../Firebase/service";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const View = () => {
  const { name, id } = useParams();
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState("");
  const [copy, setCopy] = useState("Copy code");

  services.getOneDoc(name, id).then((res) => {
    setContent(res.content);
    setQuestion(res.question);
  });

  const copyCode = () => {
    navigator.clipboard.writeText(content);
    setCopy("Code copyed");
    setTimeout(() => {
      setCopy("Copy code");
    }, 3000);
  };

  return (
    <Layout
      title={`${name}`}
      description={"view syntax and copy easly"}
      author={"Prince Nishad"}
      keyword={"HTML,CSS,JavaScripr,React"}
    >
      <div className="p-2 z-10">
        <h2 className="p-3 my-3 rounded-md text-2xl max-sm:text-xl bg-gray dark:bg-gray-700 border dark:border-gray-700">
          {question}
        </h2>

        <div className="bg-slate-800 relative">
          <button
            onClick={copyCode}
            className="py-1 px-3 rounded-md border dark:bg-gray-700 text-white  bg-purple-500"
          >
            {copy}
          </button>

          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </Layout>
  );
};

export default View;
