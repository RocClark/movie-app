'use client'

import Image from 'next/image'
import Header from '../../../components/movieComponents/movieHeader' 
import Link from 'next/link'
import MovieList from '../../../components/movieComponents/movieList'
import { useEffect, useState } from 'react'

export default function SelectMovie() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
     fetch("../../api/movies")
       .then((response) => response.json())
       .then((data) => setMovies(data));
   }, []);
  return (
   <div className='flex flex-wrap items-center justify-center min-h-screen bg-slate-900 '>
   <div className='w-full'>
      <Header/>
   </div>
  
   <div >
   {movies.length > 0 ? <MovieList movies={movies} /> : "Loading..."}
   </div>
 
</div>
  )
}
