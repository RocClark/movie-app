import Link from 'next/link';
function MoiveItem(props) {
    return (
        <li className =" p-6 m-3 rounded-xl bg-slate-400">
           <div className= "">
          <h3 className="font-serif text-2xl text-center ">{props.title}</h3>
        </div>
        <div className>
          <h3 className="h-36 w-72 m-5 bg-[#313334] rounded-md border-4 border-sky-700">movie poster</h3>
        </div>
         <div className ="text-center  ">
         <Link
          href="/movieHome/selectTime"
            className=" sm:px-4 lg:px-8 font-serif text-2xl text-center text-white">
              Time
        </Link>
          
         </div>
      
    </li>
)
}

export default MoiveItem;