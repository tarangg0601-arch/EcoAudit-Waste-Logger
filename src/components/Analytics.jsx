import WastePieChart from "./PieChart";
import WasteBarChart from "./BarChart";

function Analytics({ wasteEntries }) {
  return (
    <div
      style={{
        marginTop: "50px",
        marginBottom: "70px",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "35px",
        }}
      >
        Waste Analytics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
          gap: "30px",
        }}
      >
        <WastePieChart wasteEntries={wasteEntries} />

        <WasteBarChart wasteEntries={wasteEntries} />
      </div>
    </div>
  );
}

export default Analytics;