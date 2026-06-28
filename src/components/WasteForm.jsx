import { addWasteEntry } from "../services/database";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WasteForm() {
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const wasteData = {
            category,
            weight: Number(weight),
            createdAt: new Date(),
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          await addWasteEntry(wasteData);

          alert("✅ Waste entry added successfully!");

          setCategory("");
          setWeight("");

          navigate("/");
        } catch (error) {
          console.error(error);
          alert("Error saving waste entry.");
        }
      },
      () => {
        alert("📍 Please allow location access to submit a waste entry.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Category */}

      <div style={{ marginBottom: "25px" }}>
        <label
          style={{
            color: "#ffffff",
            display: "block",
            marginBottom: "10px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Waste Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "16px",
            background: "#1f232d",
            color: "white",
            border: "1px solid #444",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          <option value="">Select Category</option>
          <option value="Plastic">Plastic</option>
          <option value="Organic">Organic</option>
          <option value="E-Waste">E-Waste</option>
        </select>
      </div>

      {/* Weight */}

      <div style={{ marginBottom: "35px" }}>
        <label
          style={{
            color: "#ffffff",
            display: "block",
            marginBottom: "10px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Weight (kg)
        </label>

        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
          required
          min="0"
          step="0.1"
          style={{
            width: "100%",
            padding: "16px",
            background: "#1f232d",
            color: "white",
            border: "1px solid #444",
            borderRadius: "10px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            flex: 1,
            padding: "16px",
            background: "#444",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          ← Back
        </button>

        <button
          type="submit"
          style={{
            flex: 2,
            padding: "16px",
            background: "#32d26f",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "700",
            boxShadow: "0 6px 18px rgba(50,210,111,.35)",
          }}
        >
          + Submit Waste Entry
        </button>
      </div>
    </form>
  );
}

export default WasteForm;