import { Card } from "./Card";

function CardList(props) {
  const { movies } = props;
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Card key={movie.imdbID} {...movie} />;
      })}
      {/* {movies.map((movie) => (
        <Card key={movie.imdbID} {...movie} />
      ))} */}
      {/* <Card key={movies.imdbID} />; */}
    </div>
  );
}

export { CardList };
