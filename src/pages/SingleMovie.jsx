import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";

const singleMovieQuery = (id) => {
  return {
    queryKey: ["movie", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleMovieAPI}${id}`);
      return data;
    },
  };
};

const singleMovieAPI = "https://omdbapi.com/?apikey=16a5466e&i=";

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleMovieQuery(id));
    return { id };
  };

const SingleMovie = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleMovieQuery(id));
  const navigate = useNavigate();
  if (data.Response === "False") {
    return <Navigate to={`/`} />;
  }
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Released,
    Title,
    Website,
    Writer,
    Year,
    Rated,
  } = data;
  return (
    <section className="single-movie-page">
      <div className="container">
        <button className="btn" onClick={() => navigate(-1)}>
          go back
        </button>
        <div className="movie">
          <div className="image">
            <img src={Poster} alt={Title} />
          </div>
          <article className="movie-info">
            <header className="title">
              <h1>{Title}</h1>
              <p>
                <span>year: </span>
                {Year}
              </p>
              <p>
                <span>rating: </span>
                {Rated}
              </p>
            </header>
            <div className="info">
              <article className="info-list">
                <h2>general details</h2>
                <ul className="list">
                  <li>
                    <span>director: </span>
                    {Director}
                  </li>
                  <li>
                    <span>writer: </span>
                    {Writer}
                  </li>
                  <li>
                    <span>actores: </span>
                    {Actors}
                  </li>
                  <li>
                    <span>country of production: </span>
                    {Country}
                  </li>
                  <li>
                    <span>winnning awards: </span>
                    {Awards}
                  </li>
                  <li>
                    <span>revenue: </span>
                    {BoxOffice}
                  </li>
                </ul>
              </article>
              <article className="info-list">
                <h2>about the movie</h2>
                <ul className="list">
                  <li>
                    <span>released date: </span>
                    {Released}
                  </li>
                  <li>
                    <span>dvd release date: </span>
                    {DVD}
                  </li>
                  <li>
                    <span>language: </span>
                    {Language}
                  </li>
                  <li>
                    <span>metascore: </span>
                    {Metascore}
                  </li>
                  <li>
                    <span>genre: </span>
                    {Genre}
                  </li>
                  <li>
                    <span>story plot: </span>
                    {Plot}
                  </li>
                  <li>
                    <span>website: </span>
                    {Website}
                  </li>
                </ul>
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
