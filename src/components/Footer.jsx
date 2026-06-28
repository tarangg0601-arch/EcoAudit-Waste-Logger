function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "30px",
        textAlign: "center",
        color: "#9ca3af",
        borderTop: "1px solid #2b2f3b",
        background: "#181a22",
      }}
    >
      <h3
        style={{
          color: "#38d26f",
          marginBottom: "10px",
        }}
      >
        🌿 EcoAudit Waste Logger
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "16px",
        }}
      >
        Built using React + Firebase + Firestore
      </p>

      <p
        style={{
          marginTop: "12px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        © 2026 EcoAudit. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;