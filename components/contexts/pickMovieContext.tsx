
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
    console.log("Movie picked");
    setMovie((prev) => (prev === "no moive" ? "Movie picked" : "no moive"));
    
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
