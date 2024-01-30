import SeatItem from './seatItems';

function SeatList(props: { seats: any[]; }) {
      return (
          <ul className="grid grid-cols-10 gap-x-1 ">
          {props.seats.map((seat: { id: any; seatNum: any; }) => (
            <SeatItem
              key={seat.id}
  
              seatNum={seat.seatNum}
            />
          ))}
        </ul> 
      );
  }
  
export default SeatList;