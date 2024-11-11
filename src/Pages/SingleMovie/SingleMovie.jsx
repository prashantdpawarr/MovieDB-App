import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieDetails } from "../../lib/tmdApi";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";

const SingleMovie = () => {
  const { movie_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movieData = await GetMovieDetails(movie_id);
        setMovieInfo(movieData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, []);

  return (
    <>
      <MovieDetails loading={loading} movieInfo={movieInfo} />
    </>
  );
};

export default SingleMovie;
