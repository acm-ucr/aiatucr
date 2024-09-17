import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
        <p className="m-0 text-4xl xl:text-xl px-3 text-ai-black text-nowrap font-montserrat">
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
    </div>
  );
};

export default CustomToolbar;
