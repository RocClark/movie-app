import React from 'react';
import Link from 'next/link';

import {TicketReviewContext } from '../contexts/ticketContext';


  function TimeItem({ title, isPast }) {
 
    const {pickTime } = React.useContext(TicketReviewContext);
    
    const handlePickTime = () => {
      if (!isPast) {
        pickTime(title);
        }
      };

    return (
<li
      className={`p-6 m-3 rounded-xl flex flex-col justify-center items-center w-full md:w-72 h-48 ${
        isPast ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-slate-400'
      }`}
    >
      <Link
        href={isPast ? '#' : '/movieHome/seatSelect'}
        className="p-4 m-4 w-full h-full rounded-xl flex items-center justify-center text-2xl text-center"
        onClick={(e) => {
          if (isPast) {
            e.preventDefault(); // Prevent navigation if past
          } else {
            handlePickTime();
          }
        }}
      >
        {title}
      </Link>
    </li>
);
}

export default TimeItem;
