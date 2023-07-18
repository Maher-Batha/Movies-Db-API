import React from "react";
import { Link } from "react-router-dom";

const SingleMovie = ({ Poster, Title, Year, imdbID }) => {
  return (
    <li className="single-movie">
      <Link to={`/movies/${imdbID}`}>
        <div className="image">
          <img src={Poster} alt={Title} />
        </div>
        <div className="details">
          <h2>{Title}</h2>
          <p>{Year}</p>
        </div>
      </Link>
    </li>
  );
};

export default SingleMovie;
