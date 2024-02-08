import React from "react";
import { NavLink } from "react-router-dom";

const TechIcons = ({ name, icon, link, color, shadowColor }) => {
  return (
    <NavLink to={`language/${link}`}>
      <div className="flex items-center flex-col w-16 my-1 cursor-pointer">
        <div
          className="w-12 h-12 rounded-full overflow-hidden grid place-items-center p-2 "
          style={{
            backgroundImage: `${color}`,
            boxShadow: `2px 4px 12px ${shadowColor}`,
          }}
        >
          <img src={icon} className="" alt="icon" />
        </div>
        <span className="capitalize my-2">{name}</span>
      </div>
    </NavLink>
  );
};

export default TechIcons;
