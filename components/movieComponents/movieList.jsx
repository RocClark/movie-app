import MoiveItem from './movieItem';

function MoiveList(props) {
    return (
        <ul >
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