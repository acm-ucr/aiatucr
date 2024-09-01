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
    <div className="rounded-2xl flex flex-row justify-center drop-shadow-2xl mx-auto w-7/12">
      <div className="bg-ai-blue-400 flex flex-col justify-center rounded-l-2xl text-white py-0 w-1/5 font-semibold font-montserrat">
        <div className="font-russo font-medium mt-3 text-center md:text-4xl py-2">
          {month}
        </div>
        <div className="font-russo font-medium text-center md:text-4xl">
          {day}
        </div>
        <div className="font-russo font-medium text-center md:text-xl py-2">
          {time}
        </div>
        <div className="font-russo font-medium text-center md:text-xl py-1">
          {date}
        </div>
      </div>
      <div className="bg-white rounded-r-2xl w-9/12 text-[#303030] pt-4 pb-4">
        <div className="font-montserrat font-semibold text-3xl ml-5">
          {summary}
        </div>
        <div className="ml-5 flex text-left mt-3 text-lg font-hubbali">
          {location}
        </div>
        <div className="ml-5 mb-2 mt-3 mr-2 text-sm font-huballi">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
