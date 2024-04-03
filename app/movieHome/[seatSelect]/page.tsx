'use client'

import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import { useEffect, useState, useContext } from 'react'


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
          <button>next btn</button>
        </div>
  </div>
  )
}
