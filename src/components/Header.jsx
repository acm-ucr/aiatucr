import Image from "next/image";
import wireframe from "/public/wireframe.webp";

const Header = ({ text }) => {
  return (
    <div className="bg-ai-blue-400 flex items-center justify-between">
      <Image className="" src={wireframe} alt="Left wireframe" />

      <div className="py-10">
        <p className="text-center text-white text-4xl font-semibold">{text}</p>
      </div>

      <Image className="rotate-180" src={wireframe} alt="Right wireframe" />
    </div>
  );
};

export default Header;
