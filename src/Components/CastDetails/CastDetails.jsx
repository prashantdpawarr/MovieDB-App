import React, { useEffect, useState } from "react";
import { GetCastDetails } from "../../lib/tmdApi";
import { Img_Path } from "../../keys";

const CastDetails = ({ movie_id }) => {
  const [loading, setLoading] = useState(true);
  const [castData, setCastData] = useState();

  useEffect(() => {
    const CastDetails = async () => {
      try {
        const response = await GetCastDetails(movie_id);
        setCastData(response.cast);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    CastDetails();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#282c34]">
          {" "}
          <div className="w-[150px] h-[150px] border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : (
        <section className="px-[50px] py-[40px] h-full bg-[#282c34]">
          <h1 className="text-white text-3xl font-bold pb-4">Cast</h1>
          <div className="grid grid-cols-6 pb-[40px] max-lg:grid-cols-2 gap-[20px] lg:gap-y-[35px] max-lg:gap-y-[25px] ">
            {castData.map((el, id) => (
              <div key={id} className="lg:h-[400px] flex flex-col gap-2">
                <img
                  src={
                    el?.profile_path
                      ? Img_Path + el.profile_path
                      : "https://via.placeholder.com/250"
                  }
                  className="object-contain"
                  alt={el?.name}
                />
                <h5 className="text-white text-[20px] font-medium">
                  {el?.name}
                </h5>
                <p className="text-white text-[16px] font-normal">
                  Character: {el?.character}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CastDetails;
