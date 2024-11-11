import React from 'react';
import TimeItem from './timeItems';

function TimeList({ times }) {
  const now = new Date();
  const currentTimeInET = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {times.map((time) => {
        // Convert time to a comparable Date object in ET
        const timeDate = new Date(`1970-01-01T${time.title} EST`); // "PM" is now included in title
        const isPast = timeDate < currentTimeInET;


        return (
          <TimeItem
            key={time.id}
            title={time.title}
            isPast={isPast}
          />
        );
      })}
    </ul>
    );
}

export default TimeList;