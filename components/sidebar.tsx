"use client";
import React from "react";
import { ThemeContext } from "./context";
import { MovieSelectContext } from "./Contexts/ticketContext"


export const Sidebar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { moviePick, togglepick } = React.useContext(MovieSelectContext);

  return (
    <div>
      sidebar<br></br>
      <h1>currentTheme: {theme}</h1>
      <h1>currentpick: {moviePick}</h1>
      <button
        className="px-4 py-2 text-white bg-blue-900 rounded-md"
        onClick={toggleTheme}
      ></button>
           <button
        className="px-4 py-2 text-white bg-red-900 rounded-md"
        onClick={togglepick}
      ></button>
    </div>
  );
};
