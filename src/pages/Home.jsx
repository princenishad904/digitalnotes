import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import TechIcons from "../components/TechIcons";
import css from "../assets/css3.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import atom from "../assets/atom.png";
import bulb from "../assets/bulb.png";
import projects from "../assets/projects.png";
import LatestTopics from "../components/LatestTopics";
import { services } from "../Firebase/service";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  let [allLatest, setAllLatest] = useState([]);

  useEffect(() => {
    let latest = [];
    services.getLatestDocs("notes").then((res) => {
      res.forEach((doc) => {
        latest.push(doc.data());
      });
      setAllLatest(latest);
    });
  }, []);

  return (
    <Layout
      title={"Digital notes"}
      description={"Digital note is just for using post your notes for future"}
      author={"Prince Nishad"}
      keyword={"HTML,CSS,JavaScripr,React"}
    >
      <div className="w-full h-auto flex gap-4 max-md:flex-col justify-center  dark:text-white p-1">
        <div className="w-96 dark:border-gray-600 min-h-72 max-md:w-full p-2 dark:bg-slate-800">
          <div className="grid grid-cols-3 place-items-center my-5 gap-2">
            <TechIcons
              icon={html}
              name={"html"}
              shadowColor={"rgba(8, 16, 250, 0.32)"}
              color={"linear-gradient(19deg, #FF3366 0%, #CC33CC 100%)"}
              link={"html"}
            />
            <TechIcons
              icon={css}
              name={"css"}
              color={"linear-gradient(147deg, #9eff00 0%, #0abd0c 74%)"}
              shadowColor={"rgba(3, 223, 47, 0.32)"}
              link={"css"}
            />
            <TechIcons
              icon={js}
              name={"JavaScript"}
              color={"linear-gradient(147deg, #FFE53B 0%, #ffaa25 74%)"}
              shadowColor={"rgba(244, 163, 9, 0.32)"}
              link={"javascript"}
            />
            <TechIcons
              icon={atom}
              name={"React.js"}
              color={"linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"}
              shadowColor={"rgba(119, 9, 244, 0.32)"}
              link={"react"}
            />
            <TechIcons
              icon={bulb}
              name={"Tricks"}
              color={"linear-gradient(147deg, #ff0004 0%, #f54347 74%)"}
              shadowColor={"rgba(244, 9, 9, 0.32)"}
              link={"tricks"}
            />
            <TechIcons
              icon={projects}
              name={"projects"}
              color={"linear-gradient(147deg, #ff0fce 0%, #b80be0 74%)"}
              shadowColor={"rgba(244, 9, 158, 0.32)"}
              link={"projects"}
            />
          </div>
        </div>

        {/* this is for latest topics */}
        <div className="w-full min-h-72 border dark:border-gray-600 shadow-sm p-2 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Latest Topics & Tricks</h2>
          <div>
            {allLatest.map((q) => (
              <LatestTopics
                question={q.question}
                id={q.id}
                key={q.id}
                topic={q.topic}
                name={"notes"}
              />
            ))}
          </div>
        </div>
      </div>

      <br />
      <ToastContainer />
    </Layout>
  );
};

export default Home;
