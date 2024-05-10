"use client";
import React from "react";
import { ThemeContext } from "./context";

export const Sidebar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      sidebar<br></br>
      <h1>currentTheme: {theme}</h1>
      <button
        className="px-4 py-2 text-white bg-blue-900 rounded-md"
        onClick={toggleTheme}
      ></button>
    </div>
  );
};
