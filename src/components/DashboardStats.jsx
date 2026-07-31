import { useTickets } from "../hooks/useTickets";

function DashboardStats() {
  const { data: tickets = [] } = useTickets();

  const normalizeStatus = (status) =>
    status?.toString().toLowerCase().replace(/[\s_-]+/g, "") || "";

  const todo = tickets.filter((t) => normalizeStatus(t.status) === "todo").length;
  const progress = tickets.filter((t) => normalizeStatus(t.status) === "inprogress").length;
  const done = tickets.filter((t) => normalizeStatus(t.status) === "done").length;

  return (
    <div className="stats-container">
      <div className="stat-card-modern">
        <div>
          <div className="stat-title">Sprint Backlog</div>
          <div className="stat-number">{tickets.length}</div>
        </div>
        <div className="stat-icon-wrapper" style={{ color: "#a855f7" }}>⚡</div>
      </div>

      <div className="stat-card-modern">
        <div>
          <div className="stat-title">To Do</div>
          <div className="stat-number">{todo}</div>
        </div>
        <div className="stat-icon-wrapper" style={{ color: "#f59e0b" }}>⏳</div>
      </div>

      <div className="stat-card-modern">
        <div>
          <div className="stat-title">In Progress</div>
          <div className="stat-number">{progress}</div>
        </div>
        <div className="stat-icon-wrapper" style={{ color: "#3b82f6" }}>🚀</div>
      </div>

      <div className="stat-card-modern">
        <div>
          <div className="stat-title">Completed</div>
          <div className="stat-number">{done}</div>
        </div>
        <div className="stat-icon-wrapper" style={{ color: "#10b981" }}>🔥</div>
      </div>
    </div>
  );
}

export default DashboardStats;