import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function WastePieChart({ wasteEntries }) {
  const categoryCount = {};

  wasteEntries.forEach((item) => {
    categoryCount[item.category] =
      (categoryCount[item.category] || 0) + 1;
  });

  const data = Object.keys(categoryCount).map((key) => ({
    name: key,
    value: categoryCount[key],
  }));

  const COLORS = [
    "#38d26f",
    "#4ea8ff",
    "#ff9f1c",
    "#ef4444",
    "#8b5cf6",
  ];

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
        Waste Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WastePieChart;