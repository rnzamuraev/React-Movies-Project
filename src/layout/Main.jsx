import { Component } from "react";
import { CardList } from "../components/Card-list";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { RadioBtn } from "../components/RadioBtn";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      search: "",
      filter: "all",
    };
  }

  componentDidMount() {
    const { filter } = this.state;
    // const search = .search;
    // const filter = this.state.filter;
    // const filter = this.setState({ filter: });

    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers${
        filter === "all" ? "" : `&type=${filter}`
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  }

  searchMovies = () => {
    this.setState({ loading: true });
    const {
      filter,
      search,
      movies = "avengers",
    } = this.state;
    // const search = this.state.search;
    // const filter = this.state.filter;

    if (search === "" || movies === []) {
      return this.state.movies;
    }
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        filter === "all" ? "" : `&type=${filter}`
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.searchMovies();
    }
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
    this.searchMovies();
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ filter: e.target.dataset.filter }),
      () => {
        this.searchMovies();
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const { movies, search, filter, loading } = this.state;

    return (
      <main className="container main">
        <Search
          onSearchMovies={this.searchMovies}
          search={search}
          handleKey={this.handleKey}
          onChange={this.onChange}
        />
        <RadioBtn
          handleFilter={this.handleFilter}
          filter={filter}
        />
        {loading ? (
          <Preloader />
        ) : (
          <CardList movies={movies} />
        )}
      </main>
    );
  }
}
