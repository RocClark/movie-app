import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'
import MovieList from '../../components/movieComponents/movieList'

const MovieData = [
  {id: 1, title: "The last DJ" },
  {id: 2, title: "Revenge of the Jocks" },
  {id: 3, title: "Space Ninja" },
  {id: 4, title: "Dragon for a Day" },
  {id: 5, title: "Honey the kids are gone" },
  {id: 6, title: "Adventure in solfball" }
]

export default function moiveHome() {
  return (
  <div className='flex items-center justify-center min-h-screen bg-slate-900 '>
    <Header/>
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
