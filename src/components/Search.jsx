export function Search(props) {
  const { onSearchMovies, handleKey, onChange, search } =
    props;
  return (
    <div className="row">
      <div className="input-field col s12 search">
        <input
          id="search"
          className="validate"
          type="search"
          placeholder="search"
          value={search}
          onChange={onChange}
          onKeyDown={handleKey}
        />
        <button
          className="btn"
          onClick={(e) => onSearchMovies(e.target.value)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
