import { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import Board from "../components/Board";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="page-container">
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#fff", fontSize: "24px", margin: "0 0 4px 0" }}>Agile Issue Tracker</h2>
          <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>Manage your team's tasks with a simple Kanban Board.</p>
        </div>

        <DashboardStats />
        <Board searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default Home;