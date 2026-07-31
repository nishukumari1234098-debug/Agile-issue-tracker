import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTickets } from "../hooks/useTickets";
import "../styles/routes.css";

function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: tickets = [] } = useTickets();

  const total = tickets.length;
  const completed = tickets.filter(t => t.status?.toLowerCase().includes("done")).length;
  const inProgress = tickets.filter(t => t.status?.toLowerCase().includes("progress")).length;
  const pending = total - (completed + inProgress);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="home-container" style={{ padding: "20px 40px" }}>
        <div style={{ marginBottom: "25px" }}>
          <h1>📊 Sprint Analytics & Reports</h1>
          <p style={{ color: "#94a3b8" }}>Track your team productivity and issue velocity</p>
        </div>

        {/* Top Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #3b82f6" }}>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Total Issues</p>
            <h2 style={{ fontSize: "32px", marginTop: "5px" }}>{total}</h2>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #10b981" }}>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Completion Rate</p>
            <h2 style={{ fontSize: "32px", marginTop: "5px", color: "#10b981" }}>
              {total > 0 ? Math.round((completed / total) * 100) : 0}%
            </h2>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #f59e0b" }}>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>In Progress</p>
            <h2 style={{ fontSize: "32px", marginTop: "5px", color: "#f59e0b" }}>{inProgress}</h2>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #6366f1" }}>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Pending Backlog</p>
            <h2 style={{ fontSize: "32px", marginTop: "5px" }}>{pending}</h2>
          </div>
        </div>

        {/* Visual Progress Breakdown */}
        <div style={{ background: "#0f172a", padding: "25px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <h3 style={{ marginBottom: "15px" }}>Status Breakdown</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>Done ({completed})</span>
                <span>{total > 0 ? Math.round((completed / total) * 100) : 0}%</span>
              </div>
              <div style={{ background: "#1e293b", height: "10px", borderRadius: "5px", overflow: "hidden" }}>
                <div style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%`, height: "100%", background: "#10b981" }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>In Progress ({inProgress})</span>
                <span>{total > 0 ? Math.round((inProgress / total) * 100) : 0}%</span>
              </div>
              <div style={{ background: "#1e293b", height: "10px", borderRadius: "5px", overflow: "hidden" }}>
                <div style={{ width: `${total > 0 ? (inProgress / total) * 100 : 0}%`, height: "100%", background: "#f59e0b" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;