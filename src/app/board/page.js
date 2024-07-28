import { FaGithub, FaLinkedin } from "react-icons/fa";
import img1 from "@/public/images/board.png";

const Page = ({ name, position }) => {
  return (
    <div className="bg-blue p-30 rounded full mx-auto box h-32 w-32 p-4 border-4 h-48 w-40 background-color: rgb(203 213 225)">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="bg-black p-10 rounded full"></div>
      <p className="text-1">name</p>
    </div>
  );
};
export default Page;
