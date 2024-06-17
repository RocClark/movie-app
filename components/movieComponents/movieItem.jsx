import React from "react";

function MoiveItem(props) {


   const handleClick = () => {
      console.log("Hello!");
   };

    return (
        <li className ="p-8 m-3 rounded-xl bg-slate-400">
           <div >
          <h3 className="font-serif text-2xl text-center ">{props.title}</h3>
        </div>
        <div className>
          <h3 className="h-36 w-72 m-5 bg-[#313334] rounded-md border-4 border-sky-700">movie poster</h3>
        </div>
        <div className =" m-5 ">
          <ul className ="grid grid-cols-3  border border-vilet-600">
            <li>
               <button >1:30</button>
            </li>
            <li>
               <button >2:30</button>
            </li>
            <li>
               <button >3:30</button>
            </li>
            <li>
               <button >4:30</button>
            </li>
            <li>
               <button >5:30</button>
            </li>
            <li>
               <button >6:30</button>
            </li>
          </ul>
         
        </div>
      
    </li>
)
}

export default MoiveItem;