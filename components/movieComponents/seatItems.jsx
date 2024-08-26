import React from "react";
import { ThemeContext } from "@/components/context";
import { SeatsContext } from "../contexts/pickSeatContext";
import {TicketReviewContext } from '../contexts/ticketContext';


function SeatItem(props) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const { seats, pickSeats } = React.useContext(SeatsContext);
    const { ticket, selectSeat } = React.useContext(TicketReviewContext);

    const handlePickSeats = () => {
            // Call selectSeat with the seat number passed as a prop
            selectSeat({ seatNumber: props.seatNum });
    };

    return (
        <li className="mt-3">
           <div>
          <h3  className="h-10 w-10 rounded-t-full border-red-4 bg-[#33a2d9] text-center"
          onClick={handlePickSeats}>{props.seatNum}</h3>
        </div>
        
      
    </li>
)
}

export default SeatItem;