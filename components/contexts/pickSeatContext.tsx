"use client";

import React from "react";

export const TimeContext = React.createContext({
  seats: "no seats Picked",
  pickSeats: () => {},
});

export const TimeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [seats, setSeats] = React.useState("no seats Picked");
  const pickSeats = () => {
    console.log("seats picked");
    setSeats((prev) => (prev === "no seats Picked" ? "seats picked" : "no seats Picked"));
    
  };

  return (
    <TimeContext.Provider
      value={{
        seats,
        pickSeats,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

