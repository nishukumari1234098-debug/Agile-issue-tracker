import { useState } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";

function ActiveSprint() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="page-container">
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <span style={{ background: "#2563eb", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "bold" }}>
                SPRINT 24 (CURRENT)
              </span>
              <h2 style={{ marginTop: "8px", fontSize: "22px", color: "#fff" }}>🚀 Active Sprint Board</h2>
              <p style={{ color: "#94a3b8", fontSize: "13px" }}>Sprint duration: July 20 - August 03 (5 days remaining)</p>
            </div>
            
            <button style={{ padding: "8px 16px", background: "#1e293b", border: "1px solid #334155", color: "#fff", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}>
              Complete Sprint
            </button>
          </div>

          {/* Progress Bar */}
          <div style={{ marginTop: "16px", background: "#1e293b", padding: "12px", borderRadius: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "12px" }}>
              <span>Sprint Progress</span>
              <span style={{ color: "#10b981", fontWeight: "bold" }}>65% Done</span>
            </div>
            <div style={{ width: "100%", height: "6px", background: "#334155", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: "65%", height: "100%", background: "#10b981" }}></div>
            </div>
          </div>
        </div>

        <Board searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default ActiveSprint;