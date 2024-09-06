'use client'

import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import TimeList from '../../../components/movieComponents/timeList'
import Link from 'next/link'
import { useEffect, useState } from 'react' 

export default function TimeSelect() {
    const [times, setTimes] = useState([]); 
    
    useEffect(() => {
      fetch("../../api/times")
        .then((response) => response.json())
        .then((data) => setTimes(data));
    }, []); 
   
  return ( 
    <div className="flex flex-col min-h-screen items-center justify-center">
      {times.length > 0 ? <TimeList times={times} /> : "Loading..."}
    <div>
    <Link
      href="/movieHome/seatSelect"
      className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white">
        seat
    </Link>
    </div>
  </div>
    
  )
}
