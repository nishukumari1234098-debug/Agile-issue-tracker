import { useCallback } from "react";
import { useTickets, useUpdateTicket } from "../hooks/useTickets";
import Column from "./Column";

function Board({ searchQuery = "" }) {
  const {
    data: tickets = [],
    isLoading,
    isError
  } = useTickets();

  const updateTicket = useUpdateTicket();

  const handleStatusChange = useCallback(
    (id, status) => {
      updateTicket.mutate({
        id,
        status
      });
    },
    [updateTicket]
  );

  if (isLoading) return <p>Loading Tickets...</p>;
  if (isError) return <p>Something went wrong!</p>;

  // Normalize status helper
  const normalizeStatus = (status) =>
    status?.toString().toLowerCase().replace(/[\s_-]+/g, "") || "";

  // Apply search filtering
  const filteredTickets = tickets.filter((ticket) =>
    ticket.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const todoTickets = filteredTickets.filter(
    (ticket) => normalizeStatus(ticket.status) === "todo"
  );

  const progressTickets = filteredTickets.filter(
    (ticket) => normalizeStatus(ticket.status) === "inprogress"
  );

  const doneTickets = filteredTickets.filter(
    (ticket) => normalizeStatus(ticket.status) === "done"
  );

  return (
    <div className="board">
      <Column
        title="To Do"
        tickets={todoTickets}
        onStatusChange={handleStatusChange}
      />

      <Column
        title="In Progress"
        tickets={progressTickets}
        onStatusChange={handleStatusChange}
      />

      <Column
        title="Done"
        tickets={doneTickets}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default Board;