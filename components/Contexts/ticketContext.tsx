"use client";

import React from "react";

//export const TicketContext = React.createContext({
//    movieName: "", // Movie name property
//    movieTime: "", // Movie time property
//    numberOfStepsSetToZone: 0, // Number of steps set to zone property
//    paid: false, // Paid property
//});
export const MovieSelectContext = React.createContext({
    moviePick: "False",
    togglepick: () => {},
  });
  
  export const PickProvider = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const [moviePick, setPick] = React.useState("False");

    const togglepick = () => {
        setPick((prev) => (prev === "false" ? "true" : "false"));
    };
  
    return (
      <MovieSelectContext.Provider
        value={{
        moviePick,
        togglepick,
        }}
      >
        {children}
      </MovieSelectContext.Provider>
    );
};