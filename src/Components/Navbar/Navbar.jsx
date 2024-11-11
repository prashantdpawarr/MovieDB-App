import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GetSearchResult } from "../../lib/tmdApi";
import { Img_Path } from "../../keys";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "font-medium text-white" : "text-[#6c757d]";

  useEffect(() => {
    setMovieList(null);
  }, [location.pathname]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const searchMovie = await GetSearchResult(searchValue);
      setMovieList(searchMovie.results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-[#343a40] lg:px-16 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={"/"}
            className={`text-white font-normal hover:font-medium text-2xl ${isActive(
              "/"
            )}`}
          >
            Movie DB
          </Link>
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {/* SVG Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-1xl text-[#6c757d] gap-5 items-center">
            <Link
              className={`hover:font-medium hover:text-white ${isActive(
                "/popularmovies"
              )}`}
              to={"/popularmovies"}
            >
              Popular
            </Link>
            <Link
              className={`hover:font-medium hover:text-white ${isActive(
                "/topratedmovies"
              )}`}
              to={"/topratedmovies"}
            >
              Top Rated
            </Link>
            <Link
              className={`hover:font-medium hover:text-white ${isActive(
                "/upcomingmovies"
              )}`}
              to={"/upcomingmovies"}
            >
              Upcoming
            </Link>
            <input
              className="rounded-[4px] px-2 py-2 mt-2 md:mt-0"
              type="search"
              name="searchBar"
              placeholder="Movie Name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchValue) {
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              disabled={!searchValue}
              className={`px-4 py-2 text-white rounded-[2px] mt-2 md:mt-0 ${
                searchValue ? "bg-[#6c757d]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Search
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col text-1xl text-[#6c757d] gap-3">
              <Link
                className={`hover:font-medium hover:text-white ${isActive(
                  "/popularmovies"
                )}`}
                to={"/popularmovies"}
                onClick={toggleMenu}
              >
                Popular
              </Link>
              <Link
                className={`hover:font-medium hover:text-white ${isActive(
                  "/topratedmovies"
                )}`}
                to={"/topratedmovies"}
                onClick={toggleMenu}
              >
                Top Rated
              </Link>
              <Link
                className={`hover:font-medium hover:text-white ${isActive(
                  "/upcomingmovies"
                )}`}
                to={"/upcomingmovies"}
                onClick={toggleMenu}
              >
                Upcoming
              </Link>
              <input
                className="rounded-[4px] px-2 py-2 mt-2 md:mt-0"
                type="search"
                name="searchBar"
                placeholder="Movie Name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchValue) {
                    handleSearch();
                    toggleMenu();
                  }
                }}
              />
              <button
                onClick={() => {
                  handleSearch();
                  toggleMenu();
                }}
                disabled={!searchValue}
                className={`px-4 py-2 text-white rounded-[2px] mt-2 md:mt-0 ${
                  searchValue
                    ? "bg-[#6c757d]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Search
              </button>
            </ul>
          </div>
        )}
      </nav>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#282c34]">
          {" "}
          <div className="w-[150px] h-[150px] border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : (
        <>
          {movieList && (
            <section className="bg-[#282c34] py-[20px] lg:px-[51px] flex flex-col gap-5 justify-center border-b border-dotted border-white">
              <h1 className="text-center text-3xl text-white font-semibold">
                Searched Movies
              </h1>
              <div
                className={` grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1 max-md:py-3 gap-x-[40px] gap-y-[4rem]`}
              >
                {movieList.map(
                  ({ original_title, vote_average, poster_path, id }) => (
                    <Link
                      key={id}
                      className="flex flex-col gap-[10px] text-center overflow-hidden group w-auto"
                      to={"/moviedetails/" + id}
                      onClick={() => {
                        setSearchValue("");
                        setMovieList(null);
                      }}
                    >
                      <img
                        src={
                          poster_path
                            ? Img_Path + poster_path
                            : "https://via.placeholder.com/250"
                        }
                        alt={original_title}
                        className="object-contain  group-hover:scale-110 transition-transform duration-300 group-hover:mb-[30px] h-[300px]"
                      />
                      <p className="text-white font-medium text-[18px]">
                        {original_title}
                      </p>
                      <p className="text-white font-normal text-[14px]">
                        Rating: {vote_average}/10
                      </p>
                    </Link>
                  )
                )}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
