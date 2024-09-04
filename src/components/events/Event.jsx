import React from "react";

const Event = ({
  day = "",
  month = "",
  date = "",
  time = "",
  summary = "",
  location = "",
  description = "",
}) => {
  return (
    <div className="rounded-2xl flex flex-row justify-center drop-shadow-2xl mx-auto lg:w-7/12">
      <div className="bg-ai-blue-400 flex flex-col justify-center rounded-l-2xl text-white py-0 w-1/5 font-semibold font-montserrat">
        <p className="font-russo font-medium mt-3 text-center md:text-4xl py-2">
          {month}
        </p>
        <p className="font-russo font-medium text-center md:text-4xl">{day}</p>
        <p className="font-russo font-medium text-center text-xs md:text-xl py-2">
          {time.split("-")[0]}
        </p>
        <p className="font-russo font-medium text-center md:text-xl py-1">
          {date}
        </p>
      </div>
      <div className="bg-white rounded-r-2xl w-9/12 text-[#303030] pt-4 pb-4">
        <p className="font-montserrat font-semibold text-xl md:text-3xl ml-5">
          {summary}
        </p>
        <p className="ml-5 flex text-left mt-3 text-lg md:text-2xl font-hubbali">
          {location}
        </p>
        <p className="ml-5 mb-2 mt-3 mr-2 text-xs md:text-lg font-huballi">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
