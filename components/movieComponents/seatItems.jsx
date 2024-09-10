import React from "react";

import {TicketReviewContext } from '../contexts/ticketContext';


function SeatItem(props) {
  
    const { ticket, selectSeat } = React.useContext(TicketReviewContext);

    // Check if the seat is already selected
    const isSelected = ticket.seats.some(seat => seat.seatNumber === props.seatNum);

    const handlePickSeats = () => {
        // Call selectSeat with the seat number passed as a prop
        selectSeat({ seatNumber: props.seatNum });
    };


    return (
<li className="mt-3">
<div
                className={`h-10 w-10 rounded-t-full border-red-4 text-center ${isSelected ? 'bg-green-500' : 'bg-[#33a2d9]'}`}
                onClick={handlePickSeats}
            >
                {props.seatNum}
            </div>

        </li>
    );
}

export default SeatItem;