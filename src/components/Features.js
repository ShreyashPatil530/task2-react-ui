import React from "react";

function Features() {
  const handleFeatureClick = (name) => {
    alert(`${name} feature clicked!`);
    console.log(`${name} clicked`);
  };

  return (
    <section style={styles.features}>
      <h2 style={styles.heading}>Features</h2>

      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h3>Fast</h3>
          <p>React makes UI rendering super fast.</p>
          <button style={styles.btn} onClick={() => handleFeatureClick("Fast")}>
            Try Fast
          </button>
        </div>

        <div style={styles.card}>
          <h3>Modern</h3>
          <p>Built using latest frontend technologies.</p>
          <button style={styles.btn} onClick={() => handleFeatureClick("Modern")}>
            Try Modern
          </button>
        </div>

        <div style={styles.card}>
          <h3>Responsive</h3>
          <p>Works on all devices smoothly.</p>
          <button style={styles.btn} onClick={() => handleFeatureClick("Responsive")}>
            Try Responsive
          </button>
        </div>

      </div>
    </section>
  );
}

const styles = {
  features: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    width: "280px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  btn: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Features;
