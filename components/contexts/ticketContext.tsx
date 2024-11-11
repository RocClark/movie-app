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
        setTicket((prev) => ({
            ...prev,
            movie: newMovie
        }));
    };

    const pickTime = (newTime: string) => {
        setTicket((prev) => ({
            ...prev,
            time: newTime
        }));
    };

 
    const selectSeat = (newSeat: { seatNumber: string }) => {

        setTicket((prev) => {
            const isSeatAlreadySelected = prev.seats.some(
                (seat) => seat.seatNumber === newSeat.seatNumber
            );

            // If the seat is already selected, remove it from the array (deselect)
            if (isSeatAlreadySelected) {
                const updatedSeats = prev.seats.filter(
                    (seat) => seat.seatNumber !== newSeat.seatNumber
                );
                return {
                    ...prev,
                    seats: updatedSeats,
                    seatCount: updatedSeats.length, // Update seatCount
                    totalPrice: updatedSeats.length * pricePerSeat, // Update totalPrice
                };
            }

            // If the seat is not selected, add it to the array (select)
            const newSeats = [...prev.seats, newSeat];
            return {
                ...prev,
                seats: newSeats,
                seatCount: newSeats.length, // Update seatCount
                totalPrice: newSeats.length * pricePerSeat, // Update totalPrice
            };
        });
    }

    const purchaseTicket = () => {
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