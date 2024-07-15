
"use client";

import React from "react";

export const PickMovieContext = React.createContext({
  movie: "no moive",
  pickMovie: () => {},
});

export const MovieProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [movie, setMovie] = React.useState("no moive");
  const pickMovie = () => {
    setMovie((prev) => (prev === "no moive" ? "Movie picked" : "no moive"));
    console.log("Movie picked");
  };

  return (
    <PickMovieContext.Provider
      value={{
        movie,
        pickMovie,
      }}
    >
      {children}
    </PickMovieContext.Provider>
  );
};
