export function RadioBtn(props) {
  const { handleFilter, filter } = props;
  return (
    <div className="radio">
      <label className="radio__filter">
        <input
          className="with-gap"
          name="filter"
          data-filter="all"
          type="radio"
          checked={filter === "all"}
          onChange={handleFilter}
        />
        <span>All</span>
      </label>
      <label className="radio__filter">
        <input
          className="with-gap"
          name="filter"
          data-filter="series"
          type="radio"
          checked={filter === "series"}
          onChange={handleFilter}
        />
        <span>Series only</span>
      </label>
      <label className="radio__filter">
        <input
          className="with-gap"
          name="filter"
          data-filter="movie"
          type="radio"
          checked={filter === "movie"}
          onChange={handleFilter}
        />
        <span>Movies only</span>
      </label>
      <label className="radio__filter">
        <input
          className="with-gap"
          name="filter"
          data-filter="game"
          type="radio"
          checked={filter === "game"}
          onChange={handleFilter}
        />
        <span>Game</span>
      </label>
    </div>
  );
}
