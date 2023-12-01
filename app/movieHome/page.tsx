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
  return (
  <div>
  <MovieList movies= {MovieData}/>
  
<Link
  href="/"
  className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
>
 return to home page
</Link>
</div>
  )
}
