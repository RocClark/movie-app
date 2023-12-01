import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'
import MovieList from '../../components/movieComponents/movieList'

const MovieData = [
  {id: 1, title: "The last DJ" },
  {id: 2, title: "Revenge of the Jocks" },
  {id: 3, title: "Space Ninja" }
]

export default function moiveHome() {
  return <MovieList movies= {MovieData}/>
    
}
