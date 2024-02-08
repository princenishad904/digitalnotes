import React from "react";
import { NavLink } from "react-router-dom";

const LatestTopics = ({ question, name, id, link }) => {
  return (
    <div className="w-11/12 max-xl:w-96 h-12  max-md:w-full my-2 rounded-lg bg-gray-100 dark:bg-gray-700  border dark:border-gray-600 p-2">
      <NavLink to={`/view/${name}/${id}`}>
        <h2 className="text-xl truncate leading-7 capitalize ellipes">
          {question}
        </h2>
      </NavLink>
    </div>
  );
};

export default LatestTopics;
