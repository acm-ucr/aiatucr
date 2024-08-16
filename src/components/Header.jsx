import Image from "next/image";
import wireframe from "/public/wireframe.webp";

const Header = ({ text }) => {
  return (
    <header className="bg-ai-blue-400 flex items-center justify-between">
      <Image
        className="sm:w-1/3 md:w-1/2 lg:w-1/5"
        src={wireframe}
        alt="Left wireframe"
      />

      <div className="py-10 text-center text-white text-4xl font-semibold">
        {text}
      </div>

      <Image
        className="sm:w-1/3 md:w-1/4 lg:w-1/5 rotate-180"
        src={wireframe}
        alt="Right wireframe"
      />
    </header>
  );
};

export default Header;
