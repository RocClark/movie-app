import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'

import Image from 'next/image'


const MovieData = [
  {id: 1, seats: 1 },
  {id: 2, seats: 2 },
  {id: 3, seats: 3 }
]



export default function seatSelect() {
  
  return (
  <div>
     <MovieHeader/>
    <MoiveScreen/>
    <SeatList/>
    <div >
          <p>show number of seats</p>
        </div>

    <div >
          <button>next btn</button>
        </div>
  </div>
  )
}
