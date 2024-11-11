import React, { useEffect, useState } from "react";
import MoviesList from "../../CustomHooks/MoviesList/MoviesList";
import { GetUpcomingMovies } from "../../lib/tmdApi";

const Upcoming = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ApiDetails = async () => {
      try {
        const apiResponse = await GetUpcomingMovies();
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

export default Upcoming;
