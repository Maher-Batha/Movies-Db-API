import React from "react";
import SingleMovie from "./SingleMovie";

const MoviesList = ({ movies, searchTerm }) => {
  return (
    <section className="movies-list">
      <ul className="container all-movies">
        {movies.map((item) => {
          return (
            <SingleMovie key={item.imdbID} {...item} searchTerm={searchTerm} />
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesList;
