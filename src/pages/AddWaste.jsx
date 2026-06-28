import { Link } from "react-router-dom";

function AddWaste() {
  return (
    <div>
      <h1>Add Waste</h1>

      <p>This page will contain the waste entry form.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default AddWaste;