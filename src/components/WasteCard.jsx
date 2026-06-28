import { FaTrash, FaMapMarkerAlt } from "react-icons/fa";

function WasteCard({ entry, onDelete }) {
  const colors = {
    Plastic: "#38d26f",
    Organic: "#f59e0b",
    "E-Waste": "#3b82f6",
  };

  const accentColor = colors[entry.category] || "#9ca3af";

  const formattedDate = entry.createdAt
    ? new Date(entry.createdAt.seconds * 1000).toLocaleString()
    : "Unknown";

  const openLocation = () => {
    if (entry.latitude && entry.longitude) {
      window.open(
        `https://www.google.com/maps?q=${entry.latitude},${entry.longitude}`,
        "_blank"
      );
    } else {
      alert("Location not available.");
    }
  };

  return (
    <div
      style={{
        background: "#2b2f3b",
        borderLeft: `6px solid ${accentColor}`,
        borderRadius: "14px",
        padding: "22px 28px",
        marginBottom: "18px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h2
            style={{
              color: accentColor,
              margin: 0,
              marginBottom: "12px",
            }}
          >
            {entry.category}
          </h2>

          <p
            style={{
              color: "#d7dde5",
              marginBottom: "8px",
            }}
          >
            <strong>Weight:</strong> {entry.weight} kg
          </p>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "8px",
            }}
          >
            📍 {entry.latitude?.toFixed(4)}, {entry.longitude?.toFixed(4)}
          </p>

          <button
            onClick={openLocation}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            <FaMapMarkerAlt /> Open Map
          </button>

          <button
            onClick={() => onDelete(entry.id)}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
            }}
          >
            <FaTrash /> Delete
          </button>
        </div>

        <div style={{ textAlign: "right" }}>
          <p
            style={{
              color: "#9ca3af",
              marginBottom: "8px",
            }}
          >
            Added On
          </p>

          <p
            style={{
              color: "white",
            }}
          >
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WasteCard;