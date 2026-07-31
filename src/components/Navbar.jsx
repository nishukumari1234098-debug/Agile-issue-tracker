import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="logo-badge">SF</div>
          <h3 style={{ color: "#fff", margin: 0, fontSize: "18px" }}>SprintFlow</h3>
        </Link>
        <span className="version-tag">OBSIDIAN v2</span>
      </div>

      {/* Center Navigation Pills */}
      <div className="nav-pills">
        <NavLink to="/" end className={({ isActive }) => `nav-link-pill ${isActive ? "active" : ""}`}>
          Dashboard
        </NavLink>
        <NavLink to="/active-sprint" className={({ isActive }) => `nav-link-pill ${isActive ? "active" : ""}`}>
          Active Sprint
        </NavLink>
        <NavLink to="/backlog" className={({ isActive }) => `nav-link-pill ${isActive ? "active" : ""}`}>
          Product Backlog
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => `nav-link-pill ${isActive ? "active" : ""}`}>
          Reports
        </NavLink>
      </div>

      {/* Right Search & Create Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Link to="/create">
          <button style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            border: "none",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "13px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)"
          }}>
            + Create Issue
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;