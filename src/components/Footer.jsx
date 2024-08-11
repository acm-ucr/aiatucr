import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-ai-gray grid grid-cols-2 w-full pt-2 py-2">
      <div>
        <Image
          src="/images/aitransparentlogo.webp"
          alt="Club Logo"
          className="md:w-1/2 md:px-6 w-full px-2"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 md:pl-52 text-right text-white md:text-lg text-sm md:pt-20 pt-16">
          <div className="pt-4">900 University Ave Riverside , CA 925217</div>
          <div className="pt-8">aiatucr@gmail.com</div>
        </div>
        <div className="grid justify-items-end space-y-1 px-4 sm:px-8 md:px-10 lg:px-12 pt-4">
          <FaDiscord className="filter invert size-8" />
          <FaInstagram className="filter invert size-8" />
          <FaLinkedin className="filter invert size-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
