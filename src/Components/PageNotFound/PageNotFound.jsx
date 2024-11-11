import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen bg-[#282c34]">
      <h1 className="text-white font-semibold text-4xl">
        The Page you're Looking is Not Found
      </h1>
      <Link
        to={"/"}
        className="text-black bg-white px-[20px] py-[15px] font-normal hover:font-medium text-2xl"
      >
        Go to HomePage
      </Link>
    </div>
  );
};

export default PageNotFound;
