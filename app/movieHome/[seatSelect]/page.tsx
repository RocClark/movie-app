import MoiveScreen from '../../../components/movieComponents/movieScrean'
import SeatList from '../../../components/movieComponents/seatsList'
import MovieHeader from '../../../components/movieComponents/movieHeader'



const SeatData = [
  {id: 1, seatNum: "1a" },
  {id: 2, seatNum: "2a" },
  {id: 3, seatNum: "3a" },
  {id: 4, seatNum: "4a" },
  {id: 5, seatNum: "5a" },
  {id: 6, seatNum: "6a" },
  {id: 7, seatNum: "7a" },
  {id: 8, seatNum: "8a" },
  {id: 9, seatNum: "9a" },
  {id: 10, seatNum: "10a" },
  {id: 11, seatNum: "11a" },
  {id: 12, seatNum: "12a" }
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
