import React, { useEffect, useState } from "react";

const SwichButton = ({
  width = 55,
  height = 24,
  getSwitchValue,
  beforeDarkColor = "blue",
  afterDark = "white",
  theme,
}) => {
  return (
    <div
      style={{ height: `${height}px`, width: `${width}px` }}
      className={` border dark:border-gray-400 rounded-full overflow-hidden flex items-center p-1 ${
        theme === "light" ? "justify-start" : "justify-end"
      } cursor-pointer transition switchButtonShadow relative`}
      onClick={getSwitchValue}
    >
      <button
        className="rounded-full"
        style={{
          background: `${theme === "light" ? beforeDarkColor : afterDark}`,
          height: `${height - 5}px`,
          width: `${height - 5}px`,
        }}
      ></button>
    </div>
  );
};

export default SwichButton;
