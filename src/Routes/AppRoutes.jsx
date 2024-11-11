import Admin from "../layout/Admin.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "../Pages/PopularMovies/PopularMovies.jsx";
import TopRated from "../Pages/TopRatedMovies/TopRated.jsx";
import Upcoming from "../Pages/UpComingMovies/Upcoming.jsx";
import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import SingleMovie from "../Pages/SingleMovie/SingleMovie.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/topratedmovies" element={<TopRated />} />
        <Route path="/upcomingmovies" element={<Upcoming />} />
        <Route path="/moviedetails/:movie_id" element={<SingleMovie />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
