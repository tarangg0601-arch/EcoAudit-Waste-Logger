import { addWasteEntry } from "../services/database";
import { useState } from "react";

function WasteForm() {
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);

          const wasteData = {
            category,
            weight: Number(weight),
            createdAt: new Date(),

            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("Sending to Firestore:", wasteData);

          await addWasteEntry(wasteData);

          alert("Waste entry added successfully!");

          setCategory("");
          setWeight("");
        } catch (error) {
          console.error(error);
          alert("Error saving waste entry.");
        }
      },

      (error) => {
        console.error(error);

        alert(
          "Location permission is required to submit a waste entry."
        );
      }
    );
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