import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-ai-gray grid grid-cols-2 w-full ">
      <div className="grid items-center h-full ">
        <Image
          src="/images/aitransparentlogo.webp"
          alt="Club Logo"
          className="w-full md:w-3/4 lg:w-1/2 px-2 md:px-6"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-4 2xl:grid-cols-8 h-full">
        <div className="grid content-end col-span-3 2xl:col-span-7 text-right text-white text-sm md:text-lg lg:text-xl pb-8 pr-4 sm:pr-0 font-monda">
          <div>900 University Ave</div>
          <div>Riverside , CA 92521</div>
          <div className="pt-5">aiatucr@gmail.com</div>
        </div>
        <div className="grid content-end justify-items-end space-y-6 2xl:space-y-8 pb-6 2xl:pb-10 pr-4 sm:pr-8 md:pr-10 lg:pr-12 pt-4 lg:pt-10 xl:pt-4">
          <FaDiscord className="filter invert size-8" />
          <FaInstagram className="filter invert size-8" />
          <FaLinkedin className="filter invert size-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
