
"use client";

import React from "react";

export const TicketReviewContext = React.createContext({
    ticket: {
        movie: "no movie selected",
        time:"no time selected",
           //seat:{},
           //price: "",
           purchased: false
        }, 

    pickMovie: (newMovie: string) => {},
    pickTime: (newTime: string) => {},
    purchaseTicket: () => {},
    
  });
  
  export const TicketProvider = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const [ticket, setTicket] = React.useState({
        movie: "no movie selected",
        time: "no time selected",
        purchased: false,
    });

  const pickMovie = (newMovie: string) => {
    console.log("Movie selected");
    setTicket((prev) => ({ ...prev, movie: newMovie}));
  };
  
  const pickTime = (newTime: string) => {
    console.log("Time selected");
    setTicket((prev) => ({ ...prev, time: newTime }));
  };

  const purchaseTicket = () => {
    console.log("Ticket purchased");
    setTicket((prev) => ({ ...prev, purchased: true }));
  };

    return (
      <TicketReviewContext.Provider
        value={{
            ticket,
            pickMovie,
            pickTime,
            purchaseTicket,
        }}
      >
        {children}
      </TicketReviewContext.Provider>
    );
  };