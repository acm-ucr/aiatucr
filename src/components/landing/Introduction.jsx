import Image from "next/image";
import circuitLeft from "/src/public/circuit-left.png";
import circuitRight from "/src/public/circuit-right.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Introduction = () => {
  return (
    <div className="pt-8 flex items-center justify-between bg-ai-white-100 brightness-95">
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-ai-gray-100 to-ai-white-100-brightness-95"></div>

      <Image src={circuitLeft} alt="Left Circuit Image" className="mr-5" />

      <div className="h-96 flex flex-col">
        <div className="flex flex-grow flex-col items-center justify-center">
          <p className="whitespace-nowrap text-8xl text-ai-black-100">
            AI @ UCR
          </p>
          <p className="whitespace-nowrap text-2xl text-ai-black-100">
            Empowering the Future of Tech
          </p>
        </div>

        <div className="flex flex-grow items-center justify-center">
          <button className="relative w-28 h-28 bg-ai-blue-100 rounded-full text-ai-white-100">
            <span className="block text-2xl text-ai-white-100">Learn</span>
            <span className="block text-2xl text-ai-white-100">More</span>

            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <TiArrowSortedDown className="text-3xl text-ai-white-100" />
            </div>
          </button>
        </div>
      </div>

      <Image src={circuitRight} alt="Right Circuit Image" className="ml-5" />
    </div>
  );
};

export default Introduction;
