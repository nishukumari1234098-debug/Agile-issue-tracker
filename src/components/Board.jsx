import { useTickets } from "../hooks/useTickets";
import Column from "./Column";

function Board() {
  const { data: tickets = [], isLoading, isError } = useTickets();

  if (isLoading) {
    return <h2 className="loading">Loading Tickets...</h2>;
  }

  if (isError) {
    return <h2 className="loading">Something went wrong!</h2>;
  }

  const todoTickets = tickets.filter(
    (ticket) => ticket.status === "Todo"
  );

  const progressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  );

  const doneTickets = tickets.filter(
    (ticket) => ticket.status === "Done"
  );

  return (
    <div className="board">

      <Column
        title="To Do"
        tickets={todoTickets}
      />

      <Column
        title="In Progress"
        tickets={progressTickets}
      />

      <Column
        title="Done"
        tickets={doneTickets}
      />

    </div>
  );
}

export default Board;