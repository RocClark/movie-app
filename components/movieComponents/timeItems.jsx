import React from 'react';
import Link from 'next/link';
import { TimeContext } from '../contexts/pickMovieTimeContext';

  function TimeItem(props) {
    const { time, pickTime } = React.useContext(TimeContext);

    return (
        <li className =" p-6 m-3 rounded-xl bg-slate-400">
            <Link
                href="/movieHome/seatSelect"
                className="p-4 m-4 max-w-2 rounded-xl bg-slate-400 content-center text-2xl"
                onClick={pickTime}>
                {props.title}
            </Link>   
    </li>
)
}

export default TimeItem;
