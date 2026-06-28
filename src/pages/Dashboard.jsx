import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import Navbar from "../components/Navbar";
import WasteCard from "../components/WasteCard";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";

import {
  getWasteEntries,
  deleteWasteEntry,
} from "../services/database";
import "../styles/Dashboard.css";

function Dashboard() {
  const [wasteEntries, setWasteEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    loadWasteEntries();
    
  }, []);

  async function loadWasteEntries() {
  setLoading(true);

  const data = await getWasteEntries();

  setWasteEntries(data);

  setLoading(false);
}
  async function handleDelete(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this waste entry?"
  );

  if (!confirmDelete) return;

  await deleteWasteEntry(id);

  loadWasteEntries();
}

  const filteredEntries = useMemo(() => {
  return wasteEntries.filter((entry) => {
    const matchesCategory =
      selectedCategory === "All" ||
      entry.category === selectedCategory;

    const matchesSearch =
      entry.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}, [wasteEntries, searchTerm, selectedCategory]);

const totalWeight = filteredEntries.reduce(
  (sum, item) => sum + Number(item.weight),
  0
);

const totalCategories = new Set(
  filteredEntries.map((item) => item.category)
).size;

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "64px",
            fontWeight: "700",
            color: "#f5f5f5",
            marginBottom: "20px",
          }}
        >
          EcoAudit Dashboard
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "24px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Monitor and manage your waste records
        </p>

        {loading ? (
          <h2
            style={{
              textAlign: "center",
              color: "#38d26f",
            }}
          >
            Loading...
          </h2>
        ) : (
          <>
            <h2
              style={{
                textAlign: "center",
                color: "#d7dde5",
                fontSize: "32px",
                marginBottom: "35px",
              }}
            >
              Dashboard Summary
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(300px,1fr))",
                gap: "30px",
                marginBottom: "55px",
              }}
            >
              {/* Total Entries */}
              <div
  style={{
    background: "#2b2f3b",
    borderRadius: "18px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 15px 30px rgba(0,0,0,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 18px rgba(0,0,0,0.3)";
  }}
>
                <h3
                  style={{
                    color: "#c5ced8",
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  Total Entries
                </h3>

                <h1
                  style={{
                    color: "#38d26f",
                    fontSize: "58px",
                    margin: 0,
                  }}
                >
                  {wasteEntries.length}
                </h1>
              </div>

              {/* Categories */}
              <div
  style={{
    background: "#2b2f3b",
    borderRadius: "18px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 15px 30px rgba(0,0,0,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 18px rgba(0,0,0,0.3)";
  }}
>
                <h3
                  style={{
                    color: "#c5ced8",
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  Categories
                </h3>

                <h1
                  style={{
                    color: "#4ea8ff",
                    fontSize: "58px",
                    margin: 0,
                  }}
                >
                  {totalCategories}
                </h1>
              </div>

              {/* Total Weight */}
              <div
  style={{
    background: "#2b2f3b",
    borderRadius: "18px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 15px 30px rgba(0,0,0,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 18px rgba(0,0,0,0.3)";
  }}
>
                <h3
                  style={{
                    color: "#c5ced8",
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  Total Weight
                </h3>

                <h1
                  style={{
                    color: "#ff9f1c",
                    fontSize: "58px",
                    margin: 0,
                  }}
                >
                  {totalWeight} kg
                </h1>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                marginBottom: "70px",
              }}
            >
            
              <Link to="/add">
                <button
                  style={{
                    background: "#32d26f",
                    color: "white",
                    border: "none",
                    padding: "18px 45px",
                    fontSize: "28px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: "600",
                    boxShadow: "0 6px 18px rgba(50,210,111,0.35)",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "scale(1)";
}}
                >
                  + Add Waste Entry
                </button>
              </Link>
            </div>
            <Analytics wasteEntries={filteredEntries} />
            <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#2b2f3b",
      borderRadius: "12px",
      padding: "12px 18px",
      flex: 1,
      minWidth: "280px",
    }}
  >
    <FaSearch
      style={{
        color: "#38d26f",
        marginRight: "12px",
      }}
    />

    <input
      type="text"
      placeholder="Search waste category..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        background: "transparent",
        border: "none",
        outline: "none",
        color: "white",
        width: "100%",
        fontSize: "17px",
      }}
    />
  </div>

  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    style={{
      background: "#2b2f3b",
      color: "white",
      border: "none",
      borderRadius: "12px",
      padding: "14px 18px",
      fontSize: "17px",
      cursor: "pointer",
      minWidth: "220px",
    }}
  >
    <option value="All">All Categories</option>
    <option value="Plastic">Plastic</option>
    <option value="Organic">Organic</option>
    <option value="E-Waste">E-Waste</option>
  </select>
</div>

            {/* Recent Waste Entries */}

            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                marginBottom: "70px",
              }}
            >
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "34px",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                Recent Waste Entries
              </h2>

              {filteredEntries.length === 0 ? (
  <div
    style={{
      textAlign: "center",
      padding: "50px",
      color: "#9ca3af",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        marginBottom: "15px",
      }}
    >
      📦 No Waste Records Found
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
      }}
    >
      Try changing the search or filter,
      <br />
      or click <strong>+ Add Waste Entry</strong> to create your first record.
    </p>
  </div>
) : (
                filteredEntries
  .slice()
.sort((a, b) => {
  if (!a.createdAt || !b.createdAt) return 0;
  return b.createdAt.seconds - a.createdAt.seconds;
})
  .map((entry) => (
                    <WasteCard
    key={entry.id}
    entry={entry}
    onDelete={handleDelete}
/>
                  ))
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;