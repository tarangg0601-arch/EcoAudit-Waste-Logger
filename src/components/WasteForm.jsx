import { addWasteEntry } from "../services/database";
import { useState } from "react";

function WasteForm() {
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const wasteData = {
    category,
    weight: Number(weight),
    createdAt: new Date(),
  };

  await addWasteEntry(wasteData);

  alert("Waste entry added successfully!");

  setCategory("");
  setWeight("");
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Waste Entry</h2>

      <div>
        <label>Waste Category</label>
        <br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Plastic">Plastic</option>
          <option value="Organic">Organic</option>
          <option value="E-Waste">E-Waste</option>
        </select>
      </div>

      <br />

      <div>
        <label>Weight (kg)</label>
        <br />

        <input
          type="number"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          min="0"
          step="0.1"
        />
      </div>

      <br />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default WasteForm;