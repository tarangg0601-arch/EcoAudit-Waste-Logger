import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWasteEntries } from "../services/database";
import Navbar from "../components/Navbar";
import WasteCard from "../components/WasteCard";

function Dashboard() {
  const [wasteEntries, setWasteEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWasteEntries();
  }, []);

  async function loadWasteEntries() {
    const data = await getWasteEntries();
    setWasteEntries(data);
    setLoading(false);
  }

  const totalWeight = wasteEntries.reduce(
    (sum, item) => sum + item.weight,
    0
  );

  const totalCategories = new Set(
    wasteEntries.map((item) => item.category)
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
                  }}
                >
                  + Add Waste Entry
                </button>
              </Link>
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

              {wasteEntries.length === 0 ? (
                <p
                  style={{
                    color: "#9ca3af",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  No waste entries found.
                </p>
              ) : (
                wasteEntries
                  .slice()
                  .reverse()
                  .map((entry) => (
                    <WasteCard
                      key={entry.id}
                      entry={entry}
                    />
                  ))
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;