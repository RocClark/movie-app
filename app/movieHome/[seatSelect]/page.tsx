'use client'

import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'


export default function SeatSelect() {
  const [seat, setSeat] = useState([]);

  useEffect(() => {
    fetch("/api/seat")
      .then((response) => response.json())
      .then((data) => setSeat(data));
  }, []);

  return (
  <div>
     <MovieHeader/>
    <MoiveScreen/>
    {/* <SeatList seats= {SeatData}/> */}
    {seat.length > 0 ? <SeatList seats={seat} /> : "Loading..."}
    <div >
          <p>show number of seats</p>
        </div>

    <div >
      <Link
                  href="/movieHome/ticketReview"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white">
                        ticket review
      </Link>
          
        </div>
  </div>
  )
}
