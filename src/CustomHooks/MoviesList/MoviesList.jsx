import React from "react";
import { Img_Path } from "../../keys";
import { Link } from "react-router-dom";

const MoviesList = ({ apiData, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#282c34]">
          {" "}
          <div className="w-[150px] h-[150px] border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : (
        <section className="h-full py-[50px] flex lg:px-[50px]  flex-col gap-[30px] bg-[#282c34]">
          <div
            className={` grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1 max-md:py-3 gap-x-[40px] gap-y-[4rem]`}
          >
            {apiData.map(
              ({ original_title, vote_average, poster_path, id }) => (
                <Link
                  key={id}
                  className="flex flex-col gap-[10px] text-center overflow-hidden group w-auto"
                  to={"/moviedetails/" + id}
                >
                  <img
                    src={Img_Path + poster_path}
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
  );
};

export default MoviesList;
