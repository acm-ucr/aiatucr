import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Board = ({ name, image, email, role, GithubLink, LinkedInLink }) => {
  return (
    <div className="h-5/12 w-full rounded-3xl drop-shadow-lg flex flex-col">
      <Image
        src={image}
        className="rounded-t-3xl object-cover w-full"
        alt={`${name}'s Profile Picture`}
      />
      <div
        id="white-box"
        className="flex flex-row h-full w-full rounded-b-3xl p-3 bg-white"
      >
        <div>
          <p className="text-sm md:text-xl text-ai-blue-500 font-montserrat font-semibold">
            {name}
          </p>
          <p className="text-xs md:text-sm font-hubbali">{email}</p>
        </div>
        <div className=" flex flex-col ml-auto pl-3 gap-1.5">
          <p className="text-xs md:text-lg font-hubbali">{role}</p>
          <div className="flex flex-row w-full justify-end gap-1 text-md md:text-2xl text-ai-blue-500">
            <a href={GithubLink}>
              {" "}
              <FaGithub />{" "}
            </a>
            <a href={LinkedInLink}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
