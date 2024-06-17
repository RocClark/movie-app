import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import Link from 'next/link'

export default function about() {
  return (
    <div>
      <MovieHeader/>
      <ul className ="grid grid-cols-3  border border-vilet-600">
            <li>
               <button>1:30</button>
            </li>
            <li>
               <button>2:30</button>
            </li>
            <li>
               <button>3:30</button>
            </li>
            <li>
               <button>4:30</button>
            </li>
            <li>
               <button>5:30</button>
            </li>
            <li>
               <button>6:30</button>
            </li>
          </ul>
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
