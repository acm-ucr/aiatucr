import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-ai-gray grid grid-cols-2 w-full ">
      <div className="grid items-center h-full ">
        <Image
          src="/landing/aitransparentlogo.webp"
          alt="Club Logo"
          className="w-full md:w-3/4 lg:w-1/2 px-2 md:px-6"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-5 h-full">
        <div className="grid content-end col-span-3 lg:col-span-4 text-right text-white text-xs sm:text-sm md:text-lg lg:text-xl pb-8 md:pb-7 pr-4 sm:pr-0 font-monda">
          <div>900 University Ave</div>
          <div className="whitespace-nowrap">Riverside , CA 92521</div>
          <div className="pt-8 sm:pt-7 md:pt-5">aiatucr@gmail.com</div>
        </div>
        <div className="grid content-end justify-items-end space-y-6 pb-6 pr-4 sm:pr-8 md:pr-10 lg:pr-8 pt-4 lg:pt-10 xl:pt-4">
          <Link href="https://discord.com/invite/WePfvpknSj" target="_blank">
            <FaDiscord className="filter invert size-8" />
          </Link>
          <Link href="https://www.instagram.com/ai.atucr/" target="_blank">
            <FaInstagram className="filter invert size-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/ai-at-ucr/"
            target="_blank"
          >
            <FaLinkedin className="filter invert size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
