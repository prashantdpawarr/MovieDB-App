import React, { useEffect, useState } from "react";
import MoviesList from "../../CustomHooks/MoviesList/MoviesList";
import { GetAllMovies } from "../../lib/tmdApi";

const PopularMovies = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ApiDetails = async () => {
      try {
        const apiResponse = await GetAllMovies();
        setApiData(apiResponse.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    ApiDetails();
  }, []);

  return (
    <>
      <MoviesList apiData={apiData} loading={loading} />
    </>
  );
};

export default PopularMovies;
