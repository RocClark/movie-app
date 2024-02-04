import MoiveItem from './movieItem';

function MoiveList(props) {
    return (
        <ul className="flex flex-wrap flex-col my-6 space-y-4 md:space-y-0 md:space-x-6 md:flex-row md: columns-3 md:my-0 ">
        {props.movies.map((movie) => (
          <MoiveItem
            key={movie.id}

            title={movie.title}
          />
        ))}
      </ul> 
    );
}

export default MoiveList;