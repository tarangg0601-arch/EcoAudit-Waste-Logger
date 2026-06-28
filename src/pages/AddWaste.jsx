import { Link } from "react-router-dom";
import WasteForm from "../components/WasteForm";

function AddWaste() {
  return (
    <div>
      <h1>Add Waste</h1>

      <WasteForm />

      <br />

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default AddWaste;