import TimeItem from './timeItems';

function TimeList(props) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
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