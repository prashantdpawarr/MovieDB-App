import { Api_key } from "../keys";

export async function GetAllMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
  );
  return response.json();
}

export async function GetMovieDetails(movie_id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
  );
  return response.json();
}

export async function GetCastDetails(movie_id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
  );
  return response.json();
}

export async function GetUpcomingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
  );
  return response.json();
}

export async function GetTopRatedMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
  );
  return response.json();
}

export async function GetSearchResult(movie_name) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
  );
  return response.json();
}
