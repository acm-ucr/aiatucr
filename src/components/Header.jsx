import Image from "next/image";
import wireframe from "/public/wireframe.webp";

const Header = ({ text }) => {
  return (
    <div className="bg-ai-blue-400 flex items-center justify-between min-h-0">
      <Image
        className="w-1/4 sm:w-1/4 md:w-1/5 h-full object-cover"
        src={wireframe}
        alt="Left wireframe"
      />
      <div className="py-2">
        <p className="text-center text-white text-md sm:text-3xl md:text-4xl font-semibold font-montserrat">
          {text}
        </p>
      </div>
      <Image
        className="rotate-180 w-1/4 sm:w-1/4 md:w-1/5 h-full object-cover"
        src={wireframe}
        alt="Right wireframe"
      />
    </div>
  );
};

export default Header;
