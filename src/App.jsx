import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Language from "./pages/Language";
import View from "./pages/View";
import UploadData from "./pages/UploadData";

const App = () => {
  let [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   let data = [];
  //   datt.getAllDocs().then((res) => {
  //     res.forEach((doc) => {
  //       data.push(doc.data());
  //       console.log(doc.data());
  //     });
  //   });

  //   setNotes(data);
  // }, []);

  // const upload = () => {
  //   const nums = Math.floor(Math.random() * 10 + 1);
  //   let someData = {
  //     course: "html",
  //     id: String(nums),
  //     title: "Learn HTML",
  //     content: "what is HTML ?",
  //   };

  //   datt.uploadNotes(someData).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/language/:name" element={<Language />} />
      <Route path="/view/:name/:id" element={<View />} />
      <Route path="/upload" element={<UploadData />} />
    </Routes>
  );
};

export default App;
