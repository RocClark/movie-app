"use client";
import React from "react";
import { ThemeContext } from "./context";
import { PickMovieContext } from "./contexts/pickMovieContext";

export const Sidebar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { movie, pickMovie } = React.useContext(PickMovieContext);


  return (
    <div>
      sidebar<br></br>
      <h1>currentTheme: {theme}</h1>
      <h1>currentMovie: {movie}</h1>
      <button
        className="px-4 py-2 text-white bg-blue-900 rounded-md"
        onClick={toggleTheme}>
      </button>
      <button
        className="px-4 py-2 text-white bg-red-600 rounded-md"
        onClick={pickMovie}>
      </button>
    </div>
  );
};
