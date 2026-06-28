import Navbar from "../components/Navbar";
import WasteForm from "../components/WasteForm";
import Footer from "../components/Footer";

function AddWaste() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#2b2f3b",
            padding: "40px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#ffffff",
              marginBottom: "10px",
              fontSize: "40px",
            }}
          >
            Add Waste Entry
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              marginBottom: "35px",
            }}
          >
            Record your waste disposal details
          </p>

          <WasteForm />
        </div>
      </div>
    </>
  );
}

export default AddWaste;