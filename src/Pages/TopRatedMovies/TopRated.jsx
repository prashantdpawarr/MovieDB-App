import React, { useEffect, useState } from "react";
import { GetTopRatedMovies } from "../../lib/tmdApi";
import MoviesList from "../../CustomHooks/MoviesList/MoviesList";

const TopRated = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ApiDetails = async () => {
      try {
        const apiResponse = await GetTopRatedMovies();
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

export default TopRated;
