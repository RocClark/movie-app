import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 

const MovieData = [
  {id: 1, name: "The last DJ" },
  {id: 2, name: "Revenge of the Jocks" },
  {id: 3, name: "Space Ninja" }
]

export default function moiveHome() {
  return (
    <div>
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
