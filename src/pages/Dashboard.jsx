import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>EcoAudit Dashboard</h1>

      <p>Welcome to EcoAudit Waste Logger.</p>

      <Link to="/add">
        <button>Add Waste</button>
      </Link>
    </div>
  );
}

export default Dashboard;