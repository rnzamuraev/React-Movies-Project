import { Card } from "./Card";

export function CardList(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Card key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}
