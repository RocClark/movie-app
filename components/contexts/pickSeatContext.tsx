"use client";

import React from "react";

export const SeatsContext = React.createContext({
  seats: "no seats Picked",
  pickSeats: () => {},
});

export const SeatsProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [seats, setSeats] = React.useState("no seats Picked");
  const pickSeats = () => {
    console.log("seats picked");
    setSeats((prev) => (prev === "no seats Picked" ? "seats picked" : "no seats Picked"));
    
  };

  return (
    <SeatsContext.Provider
      value={{
        seats,
        pickSeats,
      }}
    >
      {children}
    </SeatsContext.Provider>
  );
};

