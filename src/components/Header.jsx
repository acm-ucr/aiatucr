import Image from "next/image";
import image from "/public/wireframe.png";

const Header = ({ text }) => {
  return (
    <div className="bg-blue-400 h-48 flex items-center justify-between">
      <Image className="w-1/3 h-52" src={image} alt="Left wireframe" />

      <div className="py-10 ">
        <p className="text-center text-white text-4xl font-semibold"> {text}</p>
      </div>

      <Image
        className="w-1/3 h-52 rotate-180"
        src={image}
        alt="Right wireframe"
      />
    </div>
  );
};

export default Header;
