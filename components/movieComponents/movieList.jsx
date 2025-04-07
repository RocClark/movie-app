import MoiveItem from "./movieItem";

function MoiveList(props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {props.movies.map((movie) => (
        <MoiveItem
          key={movie.id}
          title={movie.title}
          description={movie.description}
          image={movie.image}
        />
      ))}
    </ul>
  );
}

export default MoiveList;
