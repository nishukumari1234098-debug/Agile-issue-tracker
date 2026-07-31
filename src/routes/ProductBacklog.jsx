import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTickets } from "../hooks/useTickets";
import "../styles/routes.css";

function ProductBacklog() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: tickets = [], isLoading } = useTickets();

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="home-container" style={{ padding: "20px 40px" }}>
        <div style={{ marginBottom: "25px" }}>
          <h1>📦 Product Backlog</h1>
          <p style={{ color: "#94a3b8" }}>Plan and prioritize tasks for upcoming sprints</p>
        </div>

        {isLoading ? (
          <p>Loading Backlog...</p>
        ) : (
          <div style={{ background: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", overflow: "hidden" }}>
            <div style={{ padding: "15px 20px", background: "#1e293b", display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <span>Issue Key & Title</span>
              <span>Priority</span>
              <span>Status</span>
              <span>Assignee</span>
            </div>

            <div className="backlog-list">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  style={{
                    display: "flex",
                    justify: "space-between",
                    alignItems: "center",
                    padding: "15px 20px",
                    borderBottom: "1px solid #1e293b",
                    transition: "background 0.2s"
                  }}
                >
                  <div style={{ flex: 2 }}>
                    <span style={{ color: "#38bdf8", fontWeight: "bold", marginRight: "10px" }}>#{ticket.id}</span>
                    <span>{ticket.title}</span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <span style={{
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      background: ticket.priority === "High" ? "#ef444422" : ticket.priority === "Medium" ? "#f59e0b22" : "#10b98122",
                      color: ticket.priority === "High" ? "#ef4444" : ticket.priority === "Medium" ? "#f59e0b" : "#10b981",
                      border: `1px solid ${ticket.priority === "High" ? "#ef4444" : ticket.priority === "Medium" ? "#f59e0b" : "#10b981"}`
                    }}>
                      {ticket.priority}
                    </span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <span style={{ color: "#cbd5e1" }}>{ticket.status}</span>
                  </div>

                  <div style={{ flex: 1, color: "#94a3b8" }}>
                    👤 {typeof ticket.assignee === "object" ? ticket.assignee?.name : ticket.assignee || "Unassigned"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductBacklog;