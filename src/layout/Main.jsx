import { Component } from "react";
import { CardList } from "../components/Card-list";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch(
      "http://www.omdbapi.com/?apikey=17a22576&s=avengers"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movies: data.Search })
      );
  }

  // preload = () => {
  //   const { movies } = this.state;

  //   if (!movies.length) {
  //     <h3>Loading...</h3>;
  //   }
  //   return movies;
  // };

  render() {
    const { movies } = this.state;

    return (
      <main className="container main">
        {movies.length ? (
          <CardList movies={this.state.movies} />
        ) : (
          <h3>Loading...</h3>
        )}
        {/* <CardList movies={this.preload} /> */}
      </main>
    );
  }
}
