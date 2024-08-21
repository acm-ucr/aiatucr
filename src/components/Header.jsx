import Image from "next/image";
import wireframe from "/public/wireframe.webp";

const Header = ({ text }) => {
  return (
    <div className="bg-ai-blue-400 flex items-center justify-between">
      <Image className="w-1/5 h-full" src={wireframe} alt="Left wireframe" />

      <div className="py-2">
        <p className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          {text}
        </p>
      </div>

      <Image
        className="rotate-180 w-1/5 h-full"
        src={wireframe}
        alt="Right wireframe"
      />
    </div>
  );
};

export default Header;
