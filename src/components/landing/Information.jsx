import Image from "next/image";
import aiAtUcrLogo from "@/public/transparent_logo_1.webp";

const Information = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:ml-4 mb-4 md:mb-0">
        <Image
          className="object-contain w-full h-auto"
          src={aiAtUcrLogo}
          alt="AI@UCR Logo"
        />
      </div>
      <div className="w-full md:w-7/12 px-4">
        <p className="text-xl md:text-4xl leading-tight text-center my-8">
          AI at UCR is the hub for all things Artificial Intelligence. We are
          committed to introducing AI and ML enthusiasts to the wider horizons
          of this evolving field.
        </p>
      </div>
    </div>
  );
};

export default Information;
