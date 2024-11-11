import React from "react";
import { Img_Path } from "../../keys";
import CastDetails from "../CastDetails/CastDetails";

const MovieDetails = ({ loading, movieInfo }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#282c34]">
          {" "}
          <div className="w-[150px] h-[150px] border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : (
        <section className="h-screen flex flex-col gap-[40px] max-lg:h-full bg-[#282c34] py-[51px]">
          <div className="lg:px-[105px] max-lg:px-[20px]">
            <h1 className="text-white text-3xl font-bold pb-4">
              Movie Details
            </h1>
            <div className="bg-[#090a0e] grid grid-cols-2 max-lg:grid-cols-1 gap-4">
              <div className="flex flex-col gap-3 text-white p-[20px]">
                <div className="flex gap-3">
                  <div className="h-[200px] w-[120px]">
                    <img
                      src={Img_Path + movieInfo.poster_path}
                      className="object-cover max-md:h-full"
                      alt={movieInfo?.title}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="text-[22px] font-medium">
                      {movieInfo?.title}
                    </p>
                    <p className="text-[18px] text-[#0dcaf0] font-normal">
                      Rating: {movieInfo?.vote_average}
                    </p>
                    <div className="flex gap-3 text-[14px] font-normal">
                      <p>{movieInfo?.runtime} min</p>
                      <p className="text-[#0dcaf0] ">
                        {movieInfo?.genres.map((el) => el.name).join(", ")}
                      </p>
                    </div>
                    <p className="text-[16px] font-normal">
                      Release Date: {movieInfo?.release_date}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-semibold">Overview</p>
                  <p className="text-base font-light">{movieInfo?.overview}</p>
                </div>
              </div>
              <div>
                <img
                  src={
                    movieInfo?.backdrop_path
                      ? Img_Path + movieInfo?.backdrop_path
                      : "https://via.placeholder.com/300"
                  }
                  className={`${
                    movieInfo?.backdrop_path ? "object-cover w-full h-full" : "h-[300px] w-[400px]"
                  }`}
                  alt={movieInfo?.title}
                />
              </div>
            </div>
          </div>
          <div>
            <CastDetails movie_id={movieInfo?.id} />
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
