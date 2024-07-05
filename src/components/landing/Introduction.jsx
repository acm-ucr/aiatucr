import Image from "next/image";
import circuitImage from "@/public/circuit.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Introduction = () => {
  return (
    <div className="pt-8 flex items-stretch justify-between bg-ai-white-100 brightness-95">
      <Image
        src={circuitImage}
        alt="Left Circuit Image"
        className="w-1/4 mr-5"
      />

      <div className="w-1/2 flex flex-col">
        <div className="flex flex-grow flex-col items-center justify-center">
          <p className="whitespace-nowrap text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ai-black-100">
            AI @ UCR
          </p>
          <p className="whitespace-nowrap text-3xs xs:text-2xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-ai-black-100">
            Empowering the Future of Tech
          </p>
        </div>

        <div className="flex flex-grow items-center justify-center">
          <button className="relative w-6 h-6 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 bg-ai-blue-100 rounded-full text-ai-white-100">
            <span className="block text-3xs xs:text-3xs sm:text-xs md:text-md lg:text-lg xl:text-2xl text-ai-white-100">
              Learn
            </span>
            <span className="block text-3xs xs:text-3xs sm:text-xs md:text-md lg:text-lg xl:text-2xl text-ai-white-100">
              More
            </span>

            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <TiArrowSortedDown className="text-3xs xs:text-2xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl text-ai-white-100" />
            </div>
          </button>
        </div>
      </div>

      <Image
        src={circuitImage}
        alt="Right Circuit Image"
        className="w-1/4 ml-5 scale-x-[-1]"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/20 bg-gradient-to-t from-ai-gray-100 to-ai-white-100-brightness-95"></div>
    </div>
  );
};

export default Introduction;
