import React, { useState, useRef } from "react";
import Layout from "../components/Layout/Layout";
import { services } from "../Firebase/service";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
const UploadData = () => {
  const [course, setCourse] = useState("notes");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [button, setButton] = useState("Uplaod");
  const upload = (e) => {
    e.preventDefault();
    let id = uuidv4();
    let data = {
      course: course,
      id: id,
      question: title,
      content: content,
    };
    setButton("uploading...");
    services.uploadNotes(data).then((res) => {
      toast.success(res);
      setContent("");
      setTitle("");
      setButton("Upload");
    });
  };

  return (
    <Layout
      title={"Upload Notes"}
      author={"Prince Nishad"}
      keyword={"HTML,CSS,JavaScripr,React"}
    >
      <div className="w-4/5 max-sm:w-full max-sm:px-4 h-auto mx-auto dark:bg-slate-900 border border-transparent">
        <div>
          <div className="my-4 ">
            <h1 className="text-2xl font-semibold">Upload Syntax </h1>
          </div>
          <form onSubmit={upload}>
            <div className="my-1">
              <div className="flex justify-between items-center   border py-1 px-3 rounded-md dark:border-gray-700 my-2">
                <span className="font-semibold "> Choose Course</span>
                <select
                  required
                  className="dark:bg-gray-700 border  dark:border-gray-700 py-1 px-3 rounded-md e"
                  onChange={(e) => setCourse(e.target.value)}
                  value={course}
                >
                  <option value="notes">Notes</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React.js</option>
                  <option value="tricks">tricks</option>
                  <option value="projects">Projects</option>
                </select>
              </div>
              <span>Title</span> <br />
              <input
                type="text"
                name=""
                className="w-full outline-none border bg-gray-100 dark:bg-slate-700 dark:border-gray-700 rounded-md py-1 px-2 focus:border-blue-500 valid:border-blue-500"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                name=""
                className="w-full mx-auto border dark:border-gray-700 rounded-md outline-none dark:bg-slate-700 focus:border-blue-500 bg-gray-100 dark:text-white min-h-96 p-2 valid:border-blue-500"
                placeholder="Write Syntax"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="border dark:border-gray-700 py-1 px-3 w-44 rounded-md bg-blue-600 text-white"
            >
              {button}
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </Layout>
  );
};

export default UploadData;
