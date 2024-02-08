import React, { useContext } from "react";

const SearchBar = ({ hideSearchBar, searchWidth }) => {
  return (
    <div
      className={` ${searchWidth} h-8  rounded-md flex items-center overflow-hidden dark:bg-slate-800 ${hideSearchBar} dark:text-white  `}
    >
      <input
        type="search"
        name=""
        placeholder="Search Topics & tricks"
        className="dark:bg-gray-600  py-1 px-2 w-full outline-none h-full bg-gray-100"
      />
    </div>
  );
};

export default SearchBar;
