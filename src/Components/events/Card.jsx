const Card = ({ month, day, hour, name, location, description }) => {
  return (
    <div className="rounded-2xl flex flex-row justify-center drop-shadow-2xl mx-auto w-6/12">
      <div className="bg-ai-blue-400 flex flex-col justify-center rounded-l-2xl text-[#ffffff] py-4 w-1/5">
        <div className="font-russo font-medium mt-3 text-center md:text-4xl">
          {month}
        </div>
        <div className="font-russo font-medium text-center md:text-4xl pt-2">
          {day}
        </div>
        <div className="font-russo font-medium text-center md:text-xl py-2">
          {hour}
        </div>
      </div>
      <div className="bg-white rounded-r-2xl w-9/12 text-[#303030] pt-4 pb-4">
        <div className="font-russo font-semibold text-3xl ml-5">{name}</div>
        <div className="font-monda ml-5 flex text-left mt-3 text-sm">
          {location}
        </div>
        <div className="font-monda ml-5 mb-2 mt-3 mr-2 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;