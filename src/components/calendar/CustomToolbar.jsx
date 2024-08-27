import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PiBrainBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0">
      <div className="flex justify-center items-center py-3 flex-row">
        <div className="flex items-center justify-center p-1 rounded-full">
          <AiOutlineArrowLeft
            onClick={() => {
              onNavigate("PREV");
            }}
            className="hover:cursor-pointer text-4xl xl:text-xl text-ai-black"
          />
        </div>
        <p className="m-0 text-4xl xl:text-xl px-3 text-ai-black text-nowrap">
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.getFullYear()}
        </p>
        <div className="flex items-center justify-center p-1 rounded-full">
          <AiOutlineArrowRight
            onClick={() => onNavigate("NEXT")}
            className="hover:cursor-pointer text-4xl xl:text-xl text-ai-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 lg:gap-4 xl:w-full justify-center xl:justify-end items-center">
        <button className="bg-ai-blue-400 px-2 py-1 lg:px-4 lg:py-2 rounded-full flex justify-center items-center text-[9px] md:text-sm text-nowrap flex-nowrap text-white ">
          <PiBrainBold className="text-sm md:text-lg mr-2" />
          Artificial Intelligence
        </button>
        <button className="bg-ai-blue-400 px-2 py-1 lg:px-4 lg:py-2 rounded-full flex justify-center items-center text-[9px] md:text-sm text-nowrap flex-nowrap text-white ">
          <FaComputer className="text-sm md:text mr-2" />
          Machine Learning
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
