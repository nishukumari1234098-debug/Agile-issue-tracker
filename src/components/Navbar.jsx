import { Link } from "react-router-dom";
// import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2>SprintFlow</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <a href="#">Active Sprint</a>
        </li>

        <li>
          <a href="#">Product Backlog</a>
        </li>

        <li>
          <a href="#">Reports</a>
        </li>
      </ul>

      {/* Search + Create */}
      <div className="nav-right">
        <input
          type="text"
          placeholder="Search tickets..."
          className="search-box"
        />

        <Link to="/create-ticket">
          <button className="create-btn">
            + Create Issue
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;