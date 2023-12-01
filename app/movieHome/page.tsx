import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'

const MovieData = [
  {id: 1, name: "The last DJ" },
  {id: 2, name: "Revenge of the Jocks" },
  {id: 3, name: "Space Ninja" }
]

export default function moiveHome() {
  return (
    <div>
      <div>
    <Link
      href="/"
      className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
    >
     return to home page
    </Link>
  </div>
         <p> moive home page</p>
          <div>
          <ul>
            {MovieData.map((movie, index) =>{
                return <li key={index}>{movie.name}</li>
            })}
        </ul>
          </div>
    
  </div>

  )
}
