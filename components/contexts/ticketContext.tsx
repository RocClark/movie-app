
"use client";

import React from "react";

export const TicketReviewContext = React.createContext({
    ticket: {
        movie: "no movie selected",
        time:"no time selected",
        seats:[ { seatNumber: "" }],
           //price: "",
           purchased: false
        }, 

    pickMovie: (newMovie: string) => {},
    pickTime: (newTime: string) => {},
    selectSeat: (seat: { seatNumber: string }) => {},
    purchaseTicket: () => {},
    
  });
  
  export const TicketProvider = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const [ticket, setTicket] = React.useState<{
        movie: string;
        time: string;
        seats: { seatNumber: string }[];
        purchased: boolean;
    }>({
        movie: "no movie selected",
        time: "no time selected",
        seats: [],
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

  const selectSeat = (newSeat: { seatNumber: string }) => {
    console.log("Seat selected", newSeat);
  
    // Check if the seat is already selected
    setTicket((prev) => {
      const isSeatAlreadySelected = prev.seats.some(
        (seat) => seat.seatNumber === newSeat.seatNumber
      );
  
      if (isSeatAlreadySelected) {
        console.log("Seat already selected", newSeat.seatNumber);
        return prev; // Return the previous state if the seat is already selected
      }
  
      // Add the new seat to the array if not already selected
      return { ...prev, seats: [...prev.seats, newSeat] };
    });
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
            selectSeat,
            purchaseTicket,
        }}
      >
        {children}
      </TicketReviewContext.Provider>
    );
  };