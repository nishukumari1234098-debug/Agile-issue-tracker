import { useTickets } from "../hooks/useTickets";

function DashboardStats() {
  const { data: tickets = [] } = useTickets();

  const todo = tickets.filter(
    (ticket) => ticket.status === "Todo"
  ).length;

  const progress = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const done = tickets.filter(
    (ticket) => ticket.status === "Done"
  ).length;

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h4>Total Tickets</h4>
        <h2>{tickets.length}</h2>
      </div>

      <div className="stat-card">
        <h4>To Do</h4>
        <h2>{todo}</h2>
      </div>

      <div className="stat-card">
        <h4>In Progress</h4>
        <h2>{progress}</h2>
      </div>

      <div className="stat-card">
        <h4>Done</h4>
        <h2>{done}</h2>
      </div>

    </div>
  );
}

export default DashboardStats;