function SummaryCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#252933",
        padding: "22px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
        textAlign: "center",
        minWidth: "220px",
        flex: 1,
      }}
    >
      <p
        style={{
          color: "#9aa4b2",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          color: color,
          margin: 0,
          fontSize: "34px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default SummaryCard;