"use client";

import React from "react";

export const TicketReviewContext = React.createContext({
    ticket: {
        movie: "no movie selected",
        time: "no time selected",
        seats: [{ seatNumber: "" }],
        seatCount: 0,   // Add seatCount to the ticket object
        totalPrice: 0,  // Add totalPrice to the ticket object
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
    const pricePerSeat = 11; // Define the price per seat

    const [ticket, setTicket] = React.useState<{
        movie: string;
        time: string;
        seats: { seatNumber: string }[];
        seatCount: number;  // Add seatCount type to state
        totalPrice: number; // Add totalPrice type to state
        purchased: boolean;
    }>({
        movie: "no movie selected",
        time: "no time selected",
        seats: [],
        seatCount: 0,    // Initialize seatCount
        totalPrice: 0,   // Initialize totalPrice
        purchased: false,
    });

    const pickMovie = (newMovie: string) => {
        console.log("Movie selected");
        setTicket((prev) => ({
            ...prev,
            movie: newMovie
        }));
    };

    const pickTime = (newTime: string) => {
        console.log("Time selected");
        setTicket((prev) => ({
            ...prev,
            time: newTime
        }));
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
            const newSeats = [...prev.seats, newSeat];
            return {
                ...prev,
                seats: newSeats,
                seatCount: newSeats.length,              // Update seatCount
                totalPrice: newSeats.length * pricePerSeat // Update totalPrice
            };
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