import Image from "next/image";
import profile from "@/public/images/board.png";
const Board = () => {
  return (
    <div className="h-2/5 w-1/6 bg-ai-blue-400 rounded-lg">
      <Image src={profile} />
      <div className="w-full bg-blue-200">Ashley</div>
    </div>
  );
};

export default Board;
