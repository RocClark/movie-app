"use client";
import React from "react";
import { ThemeContext } from "./context";
import { PickMovieContext } from "./contexts/pickMovieContext";
import { TimeContext } from "./contexts/pickMovieTimeContext";
import { SeatsContext } from "./contexts/pickSeatContext";

export const Sidebar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { movie, pickMovie } = React.useContext(PickMovieContext);
  const { time, pickTime } = React.useContext(TimeContext);
const { seats, pickSeats } = React.useContext(SeatsContext);

  return (
    <div>
      sidebar
      <h1>currentTheme: {theme}</h1>
      <h1>currentMovie: {movie}</h1>
      <h1>currentTime: {time}</h1>
      <h1>currentSeats: {seats}</h1>
      <button
        className="px-4 py-2 text-white bg-blue-900 rounded-md"
        onClick={toggleTheme}>
      </button>
      <button
        className="px-4 py-2 text-white bg-red-600 rounded-md"
        onClick={pickMovie}>
      </button>
      <button
        className="px-4 py-2 text-white bg-green-400 rounded-md"
        onClick={pickTime}>
      </button>
      <button className="px-4 py-2 text-white bg-yellow-400 rounded-md"
        onClick={pickSeats}>
      </button>
    </div>
  );
};
