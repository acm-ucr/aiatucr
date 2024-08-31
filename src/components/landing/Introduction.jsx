import Image from "next/image";
import circuitImage from "@/public/circuit.webp";
import { TiArrowSortedDown } from "react-icons/ti";

const Introduction = () => {
  return (
    <div className="pt-8 flex items-stretch justify-between bg-white drop-shadow-xl">
      <Image src={circuitImage} alt="Left Circuit Image" className="w-1/4" />

      <div className="w-1/2 flex flex-col items-center justify-center gap-y-5">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-montserrat font-semibold">
            AI @ UCR
          </p>
          <p className="whitespace-nowrap text-xs sm:text-sm md:text-lg lg:text-xl text-black font-hubbali">
            Empowering the Future of Tech
          </p>
        </div>

        <div className="flex items-center justify-center aspect-square rounded-full">
          <button className="flex shrink-0 rounded-full w-full h-full justify-center relative p-2 md:p-3 xl:p-4 2xl:p-5 text-xs md:text-md lg:text-xl text-white bg-ai-blue-500 font-hubbali">
            Learn <br /> More
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <TiArrowSortedDown className="text-xs md:text-md lg:text-xl text-white" />
            </div>
          </button>
        </div>
      </div>

      <Image
        src={circuitImage}
        alt="Right Circuit Image"
        className="w-1/4 scale-x-[-1]"
      />
    </div>
  );
};

export default Introduction;
