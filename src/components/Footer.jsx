import Image from "next/image";
import AILogo from "@/public/images/aitransparentlogo.png";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-ai-grey grid grid-cols-2 w-full pt-14 py-8">
      <div>
        <Image
          src={AILogo}
          alt="Club Logo"
          className="md:w-1/2 md:px-6 w-full px-2"
        />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 md:pl-64 text-right text-white md:text-xl text-md md:pt-20 pt-16">
          <div className="pt-4">900 University Ave Riverside , CA 925217</div>
          <div className="pt-8">aiatucr@gmail.com</div>
        </div>
        <div className="grid justify-items-end space-y-4 sm:px-12 md:px-12 pt-4">
          <FaDiscord className="filter invert size-8" />
          <FaInstagram className="filter invert size-8" />
          <FaLinkedin className="filter invert size-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
