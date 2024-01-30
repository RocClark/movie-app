function SeatItem(props) {
    return (
        <li className="">
           <div>
          <h3  className="h-10 w-10 rounded-t-full border-red-4 bg-[#33a2d9] ">{props.seatNum}</h3>
        </div>
        
      
    </li>
)
}

export default SeatItem;