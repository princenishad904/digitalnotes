import React, { useContext } from "react";
import Header from "./Header";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { Helmet } from "react-helmet";

const Layout = ({ children, title = "Home", description, author, keyword }) => {
  let { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />

      <main
        className="w-full dark:bg-slate-900 dark:text-white"
        style={{ minHeight: "100vh" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
