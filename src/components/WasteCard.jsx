function WasteCard({ entry }) {
  const colors = {
    Plastic: "#38d26f",
    Organic: "#f59e0b",
    "E-Waste": "#3b82f6",
  };

  const accentColor = colors[entry.category] || "#9ca3af";

  const formattedDate = entry.createdAt
    ? new Date(entry.createdAt.seconds * 1000).toLocaleString()
    : "Unknown";

  return (
    <div
      style={{
        background: "#2b2f3b",
        borderLeft: `6px solid ${accentColor}`,
        borderRadius: "14px",
        padding: "22px 28px",
        marginBottom: "18px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2
          style={{
            color: accentColor,
            margin: 0,
            marginBottom: "10px",
            fontSize: "28px",
          }}
        >
          {entry.category}
        </h2>

        <p
          style={{
            color: "#cfd8e3",
            margin: 0,
            fontSize: "18px",
          }}
        >
          Weight: <strong>{entry.weight} kg</strong>
        </p>
      </div>

      <div
        style={{
          textAlign: "right",
        }}
      >
        <p
          style={{
            color: "#9ca3af",
            margin: 0,
            fontSize: "16px",
          }}
        >
          Added On
        </p>

        <p
          style={{
            color: "#ffffff",
            marginTop: "8px",
            fontSize: "17px",
          }}
        >
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default WasteCard;