import {
  FaTrash,
  FaMapMarkerAlt,
  FaClock,
  FaWeightHanging,
  FaRecycle,
} from "react-icons/fa";

function WasteCard({ entry, onDelete }) {
  const colors = {
    Plastic: "#3b82f6",
    Organic: "#f59e0b",
    "E-Waste": "#22c55e",
  };

  const accentColor = colors[entry.category] || "#9ca3af";

  const formattedDate = entry.createdAt
    ? new Date(entry.createdAt.seconds * 1000).toLocaleString()
    : "Unknown";

  const openGoogleMaps = () => {
    if (!entry.latitude || !entry.longitude) {
      alert("Location not available.");
      return;
    }

    window.open(
      `https://www.google.com/maps?q=${entry.latitude},${entry.longitude}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        background: "#2b2f3b",
        borderLeft: `6px solid ${accentColor}`,
        borderRadius: "18px",
        padding: "28px",
        marginBottom: "22px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 16px 30px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 18px rgba(0,0,0,0.25)";
      }}
    >
      <div style={{ flex: 1 }}>
        <h2
          style={{
            color: accentColor,
            margin: 0,
            marginBottom: "20px",
            fontSize: "34px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaRecycle />
          {entry.category}
        </h2>

        <p
          style={{
            color: "#cfd8e3",
            fontSize: "18px",
            marginBottom: "12px",
          }}
        >
          <FaWeightHanging /> Weight
        </p>

        <h1
          style={{
            color: "#ffffff",
            marginTop: "0",
            marginBottom: "18px",
          }}
        >
          {entry.weight} kg
        </h1>

        {entry.latitude && entry.longitude && (
          <p
            style={{
              color: "#7dd3fc",
              marginBottom: "20px",
            }}
          >
            📍 Location Captured
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {entry.latitude && entry.longitude && (
            <button
              onClick={openGoogleMaps}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              <FaMapMarkerAlt /> Open Google Maps
            </button>
          )}

          <button
            onClick={() => onDelete(entry.id)}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: "right",
          marginLeft: "30px",
        }}
      >
        <p
          style={{
            color: "#9ca3af",
            marginBottom: "12px",
            fontSize: "22px",
          }}
        >
          <FaClock /> Added On
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "28px",
            margin: 0,
          }}
        >
          {formattedDate}
        </h2>
      </div>
    </div>
  );
}

export default WasteCard;