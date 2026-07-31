import { useTickets } from "../hooks/useTickets";
import Column from "./Column";

function Board() {
  const { data: tickets = [], isLoading, isError } = useTickets();

  if (isLoading) {
    return <div>Loading Tickets...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const todoTickets = tickets.filter(
    (ticket) =>
      ticket.status?.toLowerCase().replace(" ", "_") === "todo"
  );

  const progressTickets = tickets.filter(
    (ticket) =>
      ticket.status?.toLowerCase().replace(" ", "_") === "in_progress"
  );

  const doneTickets = tickets.filter(
    (ticket) =>
      ticket.status?.toLowerCase().replace(" ", "_") === "done"
  );

  return (
    <div>
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