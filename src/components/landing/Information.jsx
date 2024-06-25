import Image from "next/image";
import image from "/public/transparent_logo_1.png";

const Information = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 ml-4">
        <Image
          className="object-contain w-full h-auto"
          src={image}
          alt="Logo 1"
        />
      </div>
      <div className="w-7/12 px-4">
        <p className="text-4xl leading-tight text-center my-8">
          AI at UCR is the hub for all things Artificial Intelligence. We are
          committed to introducing AI and ML enthusiasts to the wider horizons
          of this evolving field.
        </p>
      </div>
    </div>
  );
};

export default Information;
