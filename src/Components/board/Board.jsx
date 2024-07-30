import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Board = ({ name, image, email, role }) => {
  return (
    <div className="h-2/5 w-1/6 rounded-3xl drop-shadow-lg flex flex-col">
      <div className="h-4/5">
        <Image
          src={image}
          className="object-cover h-full rounded-t-3xl w-full"
        />
      </div>
      <div className="h-full flex flex-row w-full rounded-b-3xl p-3 bg-white">
        <div>
          <p className="text-xl text-ai-blue-500 ">{name}</p>
          <p className="text-xs">{email}</p>
        </div>
        <div className=" flex flex-col ml-auto gap-y-1.5">
          <p>{role}</p>
          <div className="flex flex-row w-full justify-end gap-1 text-2xl text-ai-blue-500">
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
