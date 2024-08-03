import Board from "./Board";
import { boards } from "@/data/Board";

const Boards = () => {
  return (
    <section className="p-4">
      {boards.map((board, index) => (
        <Board
          key={index}
          image={board.image}
          email={board.email}
          role={board.role}
        />
      ))}
    </section>
  );
};
export default Boards;
