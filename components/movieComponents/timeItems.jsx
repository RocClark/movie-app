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
<li className="p-6 m-3 rounded-xl bg-slate-400 flex flex-col justify-center items-center w-full md:w-72 h-48">
  <Link
    href="/movieHome/seatSelect"
    className="p-4 m-4 w-full h-full rounded-xl bg-slate-400 flex items-center justify-center text-2xl text-center"
    onClick={handlePickTime}>
    {props.title}
  </Link>   
</li>
)
}

export default TimeItem;
