import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

import { useQuery } from "@tanstack/react-query";

const searchMoviesQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "jurassic world"],
    queryFn: async () => {
      const response = await axios.get(
        `${MoviesDB_API}${searchTerm ? searchTerm : "titanic"}`
      );
      return response.data.Search;
    },
  };
};

const MoviesDB_API = `https://omdbapi.com/?apikey=16a5466e&s=`;

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchMoviesQuery(searchTerm));
    return { searchTerm };
  };

const HomePage = () => {
  const { searchTerm } = useLoaderData();
  const { data: movies } = useQuery(searchMoviesQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      {movies ? (
        <MoviesList movies={movies} searchTerm={searchTerm} />
      ) : (
        <section>
          <div className="container">
            <h1
              style={{
                textAlign: "center",
                textTransform: "capitalize",
                marginTop: "5rem",
              }}
            >
              no movies found
            </h1>
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
