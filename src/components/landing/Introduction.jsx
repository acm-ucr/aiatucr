import Image from "next/image";
import circuitImage from "@/public/circuit.webp";
import { TiArrowSortedDown } from "react-icons/ti";

const Introduction = () => {
  return (
    <div className="pt-8 flex items-stretch justify-between bg-white brightness-95">
      <Image
        src={circuitImage}
        alt="Left Circuit Image"
        className="w-1/4 mr-5"
      />

      <div className="w-1/2 flex flex-col">
        <div className="flex flex-grow flex-col items-center justify-center">
          <p className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black">
            AI @ UCR
          </p>
          <p className="whitespace-nowrap text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-black">
            Empowering the Future of Tech
          </p>
        </div>

        <div className="flex flex-grow items-center justify-center">
          <button className="relative aspect-square p-2 md:p-3 xl:p-4 2xl:p-5 text-xs md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl text-white bg-ai-blue-500 rounded-full">
            Learn <br /> More
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <TiArrowSortedDown className="text-xs md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl text-white" />
            </div>
          </button>
        </div>
      </div>

      <Image
        src={circuitImage}
        alt="Right Circuit Image"
        className="w-1/4 ml-5 scale-x-[-1]"
      />
    </div>
  );
};

export default Introduction;
