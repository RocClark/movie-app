import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import Link from 'next/link'

export default function TimeSelect() {

   
  return (
    <div>
      <MovieHeader/>
      <ul className ="grid grid-cols-3 ">
            <li className="p-4 m-5" >
               <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-4 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                  1:30
             </Link>
            </li>
            <li className="p-4 m-4">
            <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-6 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                   2:30
             </Link>
            </li>
            <li className="p-4 m-4">
                   <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-6 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                   3:30
             </Link>
              
            </li>
            <li className="p-4 m-4">
                   <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-6 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                   4:30
             </Link>
              
            </li>
            <li className="p-4 m-4">
                   <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-6 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                   5:30
             </Link>
              
            </li>
            <li className="p-4 m-4">
                   <Link
               href="/movieHome/seatSelect"
                 className="p-4 m-6 max-w-2 rounded-xl bg-slate-400 content-center text-2xl">
                   6:30
             </Link>
               
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
