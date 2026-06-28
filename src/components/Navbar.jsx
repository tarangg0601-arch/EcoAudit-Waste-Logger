import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌿 EcoAudit
      </div>

      <div className="nav-links">

        <Link to="/">
          <button>Dashboard</button>
        </Link>

        <Link to="/add">
          <button>Add Waste</button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;