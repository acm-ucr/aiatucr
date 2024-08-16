import Image from "next/image";
import aiAtUcrLogo from "@/public/transparent_logo_1.webp";

const Information = () => {
  return (
    <>
      <div>
        <div className="flex flex-row md:flex-row items-center bg-white drop-shadow-xl">
          <div className="w-full md:w-1/2 md:ml-4 mb-4 md:mb-0">
            <Image
              className="object-contain md:object-scale-down md:w-full w-60 h-auto"
              src={aiAtUcrLogo}
              alt="AI@UCR Logo"
            />
          </div>
          <div className="w-full md:w-7/12 px-4">
            <p className="text-xl md:text-4xl leading-tight text-center my-8">
              AI at UCR is the hub for all things Artificial Intelligence. We
              are committed to introducing AI and ML enthusiasts to the wider
              horizons of this evolving field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
