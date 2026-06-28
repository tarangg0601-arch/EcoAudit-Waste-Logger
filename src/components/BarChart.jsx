import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function WasteBarChart({ wasteEntries }) {
  const categoryWeight = {};

  wasteEntries.forEach((item) => {
    categoryWeight[item.category] =
      (categoryWeight[item.category] || 0) +
      Number(item.weight);
  });

  const data = Object.keys(categoryWeight).map((key) => ({
    category: key,
    weight: categoryWeight[key],
  }));

  return (
    <div
  style={{
    background: "#2b2f3b",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
    height: "430px",
    transition: "0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 18px 35px rgba(0,0,0,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 18px rgba(0,0,0,0.3)";
  }}
>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Weight by Category
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#444"
          />

          <XAxis
            dataKey="category"
            stroke="#ffffff"
          />

          <YAxis stroke="#ffffff" />

          <Tooltip />

          <Bar
            dataKey="weight"
            fill="#38d26f"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WasteBarChart;