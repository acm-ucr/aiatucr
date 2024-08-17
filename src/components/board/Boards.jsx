import Board from "./Board";
import { boards } from "@/data/Board";

const Boards = () => {
  return (
    <div className="flex-justify center p-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-auto place-items-center">
        {boards.map((board, index) => (
          <div key={index}>
            <Board
              key={index}
              name={board.name}
              image={board.image}
              email={board.email}
              role={board.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Boards;
