'use client'

import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import { useEffect, useState,  } from 'react'
import Link from 'next/link'


export default function SeatSelect() {
  const [seat, setSeat] = useState([]);

  useEffect(() => {
    fetch("/api/seat")
      .then((response) => response.json())
      .then((data) => setSeat(data));
  }, []);

  return (
  <div className='bg-slate-900'>
     <MovieHeader/>
    <MoiveScreen/>
      <div >
        <p>Threaten background by Photo by Geoffrey Moffett on Unsplash</p>
      </div>
    {seat.length > 0 ? <SeatList seats={seat} /> : "Loading..."}
  
    <div className=" text-center p-8 ">
      <Link
        href="/movieHome/ticketReview"
        className=" sm:px-4 lg:px-8 bg-[#33a2d9] text-2xl font-bold tracking-tight text-white rounded-md border-4 border-sky-700">
           Review you Ticket
      </Link>      
    </div>
  </div>
  )
}
