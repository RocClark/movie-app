"use client";

import React from "react";

export const TimeContext = React.createContext({
  time: "no time Picked",
  pickTime: () => {},
});

export const TimeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [time, setTime] = React.useState("no time Picked");
  const pickTime = () => {
    console.log("Time picked");
    setTime((prev) => (prev === "no time Picked" ? "Time picked" : "no time Picked"));
    
  };

  return (
    <TimeContext.Provider
      value={{
        time,
        pickTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

