import React from "react";
import { ThemeContext } from "@/components/context";

function SeatItem(props) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    return (
        <li className="mt-3">
           <div>
          <h3  className="h-10 w-10 rounded-t-full border-red-4 bg-[#33a2d9] text-center"
          onClick={toggleTheme}>{props.seatNum}</h3>
        </div>
        
      
    </li>
)
}

export default SeatItem;