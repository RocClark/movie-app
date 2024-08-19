import React from 'react';
import Link from 'next/link';
import { TimeContext } from '../contexts/pickMovieTimeContext';
import {TicketReviewContext } from '../contexts/ticketContext';


  function TimeItem(props) {
    //const { time, pickTime } = React.useContext(TimeContext);
    const { ticket, pickTime } = React.useContext(TicketReviewContext);
    
    const handlePickTime = () => {
        pickTime(props.title); // This will update the movie property in the ticket object
      };


    return (
        <li className =" p-6 m-3 rounded-xl bg-slate-400">
            <Link
                href="/movieHome/seatSelect"
                className="p-4 m-4 max-w-2 rounded-xl bg-slate-400 content-center text-2xl"
                onClick={handlePickTime}>
                {props.title}
            </Link>   
    </li>
)
}

export default TimeItem;
