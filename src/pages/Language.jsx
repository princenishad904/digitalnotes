import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import LatestTopics from "../components/LatestTopics";
import { services } from "../Firebase/service";

const Language = () => {
  const { name } = useParams();

  const [allQues, setAllQues] = useState([]);

  useEffect(() => {
    const docs = [];
    services.getLatestDocs(name).then((res) => {
      res.forEach((doc) => {
        docs.push(doc.data());
      });
      setAllQues(docs);
    });
  }, [name]);
  return (
    <Layout
      title={name}
      description={"There are HTML tag Topics and Tricks"}
      author={"Prince Nishad"}
      keyword={"HTML,CSS,JavaScripr,React"}
    >
      <div className="w-11/12 max-md:w-full max-md:px-1 my-1 h-auto grid grid-cols-2 max-md:grid-cols-1 place-items-center">
        {allQues.map((items) => (
          <LatestTopics
            question={items.question}
            id={items.id}
            key={items.id}
            name={name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Language;
