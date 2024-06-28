// Introduction component
// This component shows: left circuit image, right circuit image, "AI @ UCR" text, "Empowering the Future of Tech" text

// Import left circuit image, right circuit image, and down arrow react icon
import Image from "next/image";
import circuitLeft from "/src/public/circuit-left.png";
import circuitRight from "/src/public/circuit-right.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Introduction = () => {
  return (
    // Flex container with top padding and white background with 95% brightness
    <div className="pt-8 flex items-center justify-between bg-ai-white-100 brightness-95">
      {/* Gradient is positioned at the bottom of the parent container */}
      <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-ai-gray-100 to-ai-white-100-brightness-95"></div>

      {/* Left circuit image is positioned on the left side of the parent container */}
      <Image src={circuitLeft} alt="Left Circuit Image" className="mr-5" />

      {/* Flex container is positioned in the middle of the parent container. All items in this container are stacked in a column */}
      <div className="h-96 flex flex-col">
        {/* Flex container is positioned in the upper half of the middle container. The texts in this container are stacked in a column and positioned in the middle of this container */}
        <div className="flex flex-grow flex-col items-center justify-center">
          <p className="whitespace-nowrap text-8xl text-ai-black-100">
            AI @ UCR
          </p>
          <p className="whitespace-nowrap text-2xl text-ai-black-100">
            Empowering the Future of Tech
          </p>
        </div>

        {/* Flex container is positioned in the lower half of the middle container. The button in this container is positioned in the middle of this container */}
        <div className="flex flex-grow items-center justify-center">
          <button class="relative w-28 h-28 bg-ai-blue-100 rounded-full text-ai-white-100">
            {/* "Learn More" text is positioned in the middle of this button */}
            <span className="block text-2xl text-ai-white-100">Learn</span>
            <span className="block text-2xl text-ai-white-100">More</span>

            {/* Down arrow react icon is positioned at the bottom of this button */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <TiArrowSortedDown className="text-3xl text-ai-white-100" />
            </div>
          </button>
        </div>
      </div>

      {/* Right circuit image is positioned on the right side of the parent container */}
      <Image src={circuitRight} alt="Right Circuit Image" className="ml-5" />
    </div>
  );
};

export default Introduction;
