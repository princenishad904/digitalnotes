import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext/ThemeContext";
import SwichButton from "./SwichButton";
import { useNavigate } from "react-router-dom";
import prince from "../assets/prince.jpg";

const ProfileCard = () => {
  let navigate = useNavigate();
  let { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    let defaultTheme = localStorage.getItem("theme");
    if (defaultTheme === null) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    setTheme(localStorage.getItem("theme"));
  }, []);

  const getSwitchValue = () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    let a = localStorage.getItem("theme");
    setTheme(a);
  };

  const uploadPage = () => {
    navigate("/upload");
  };

  return (
    <div className="shadow-xl w-64 max-sm:w-11/12 z-30 dark:bg-gray-700 min-h-96 bg-white border border-gray-200 dark:border-gray-500 dark:text-slate-100 rounded-md absolute right-8 max-sm:right-1 flex flex-col justify-center items-center py-3">
      <div className="py-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full grid place-items-center border-2 overflow-hidden p-1">
          <img src={prince} className="rounded-full" alt="pic" />
        </div>
        <span className="block text-center">Prince Nishad</span>

        <span className="block text-center">pn3147399@gmail.com</span>
      </div>
      <div>
        <button className=" rounded-full py-1 w-24 border-purple-400 bg-gray-100 dark:bg-gray-500 mx-1">
          Sing Up
        </button>
        <button className=" rounded-full py-1 w-24 bg-blue-500 text-white mx-1">
          Log In
        </button>
      </div>

      <div className="w-full p-3 my-4">
        <button
          onDoubleClick={uploadPage}
          className="py-1 w-full bg-blue-500 text-white px-4 rounded-full"
        >
          Uplaod
        </button>

        <div className="flex justify-between my-4">
          <span>Theme</span>
          <SwichButton
            width={45}
            height={24}
            getSwitchValue={getSwitchValue}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
