import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PiBrainBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0">
      <div className="flex justify-center items-center w-full py-3 flex-row">
        <div className="flex items-center justify-center md:p-4 p-1 rounded-full b-gray-200 shadow-md mr-2">
          <AiOutlineArrowLeft
            onClick={() => {
              onNavigate("PREV");
            }}
            className="hover:cursor-pointer text-4xl text-gray-500 md:max-w-12 max-w-4"
          />
        </div>
        <p className="m-0 bg-clip-text bg-saf-brown md:text-4xl text-lg px-3">
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.getFullYear()}
        </p>
        <div className="flex items-center justify-center md:p-4 p-1 rounded-full b-gray-200 shadow-md mr-2">
          <AiOutlineArrowRight
            onClick={() => onNavigate("NEXT")}
            className="hover:cursor-pointer text-4xl text-gray-500 md:max-w-12 max-w-4"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button className="bg-ai-blue-400 p-2 rounded-xl flex justify-center items-center text-sm">
          <PiBrainBold className="text-2xl mr-2" />
          Artificial Intelligence
        </button>
        <button className="bg-ai-blue-400 p-2 rounded-xl flex justify-center items-center text-sm">
          <FaComputer className="text-2xl mr-2" />
          Machine Learning
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
