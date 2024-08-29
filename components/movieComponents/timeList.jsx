import TimeItem from './timeItems';

function TimeList(props) {
    return (
        <ul className="flex flex-wrap flex-col space-y-4 md:space-y-4 md:space-x-6 md:flex-row md: columns-3 md:my-0 ">
        {props.times.map((time) => (
          <TimeItem
            key={time.id}

            title={time.title}
          />
        ))}
      </ul> 
    );
}

export default TimeList;