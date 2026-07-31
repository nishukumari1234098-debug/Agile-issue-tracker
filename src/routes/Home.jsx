import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import Board from "../components/Board";
import "../styles/routes.css";

function Home() {
  return (
   <>
  <Navbar />

  <div className="home-container">
    <div className="hero-section">
      <h1>Agile Issue Tracker</h1>
      <p>Manage your team's tasks with a simple Kanban Board.</p>
    </div>

    <DashboardStats />
    <Board />
  </div>
</>
  );
}

export default Home;