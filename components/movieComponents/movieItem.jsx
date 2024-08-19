"use client";
import React from 'react';
import Link from 'next/link';
import { PickMovieContext } from '../contexts/pickMovieContext';
import {TicketReviewContext } from '../contexts/ticketContext';


  function MoiveItem(props) {
   // const { movie, pickMovie } = React.useContext(PickMovieContext);
    const { ticket, pickMovie } = React.useContext(TicketReviewContext);

    const handlePickMovie = () => {
      pickMovie(props.title); // This will update the movie property in the ticket object
    };
  

    return (
      <li className =" p-6 m-3 rounded-xl bg-slate-400">
        <div className= "">
          <h3 className="font-serif text-2xl text-center ">{props.title}</h3>
        </div>
        <div className>
          <h3 className="h-36 w-72 m-5 bg-[#313334] rounded-md border-4 border-sky-700">movie poster</h3>
        </div>
        <div className ="text-center  "> 
         <Link
          href="/movieHome/selectTime"
            className=" sm:px-4 lg:px-8 font-serif text-2xl text-center text-white"
            onClick={handlePickMovie}>
              {props.title}
        </Link>
          
         </div>
      
    </li>
)
}

export default MoiveItem;