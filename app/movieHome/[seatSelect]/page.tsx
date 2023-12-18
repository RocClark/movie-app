import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'



const SeatData = [
  {id: 1, seatNum: "1a" },
  {id: 2, seatNum: "2a" },
  {id: 3, seatNum: "3a" }
]



export default function seatSelect() {
  
  return (
  <div>
     <MovieHeader/>
    <MoiveScreen/>
    <SeatList seats= {SeatData}/>
    
    <div >
          <p>show number of seats</p>
        </div>

    <div >
          <button>next btn</button>
        </div>
  </div>
  )
}
