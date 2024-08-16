"use client"; 
import Link from "next/link";
import React from "react";
import { TicketReviewContext } from "../contexts/ticketContext";

function MovieReview() {
   const {ticket} = React.useContext(TicketReviewContext);
  

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <h1 className="mb-8 text-3xl text-center">Cart</h1>
      <p className="block border border-grey-light w-full p-3 rounded mb-4">
          {ticket.movie}
      </p>

      <p className="block border border-grey-light w-full p-3 rounded mb-4">
        number of seats
      </p>

      <p className="block border border-grey-light w-full p-3 rounded mb-4">
        {ticket.time}
      </p>
      <p className="block border border-grey-light w-full p-3 rounded mb-4">
        movie price
      </p>

      <Link
        href="/movieHome/payment"
        className=" sm:px-4 lg:px-8 bg-[#33a2d9] text-2xl font-bold tracking-tight text-white rounded-md border-4 border-sky-700">
           Buy your Ticket
      </Link>       
      </div>
    </div>
    
  </div>
  );
  }
  
  export default MovieReview;