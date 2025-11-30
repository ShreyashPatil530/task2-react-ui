import React from "react";

function Hero() {

  const handleStartTask = () => {
    alert("Task 2 Started Successfully!");
    console.log("Task 2 Started...");
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Welcome to Task 2</h1>
      <p style={styles.subtitle}>
        This is a simple frontend project built using React.js
      </p>
      <button style={styles.btn} onClick={handleStartTask}>
        Start Task 2
      </button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: "42px",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "25px",
    color: "#555",
  },
  btn: {
    padding: "10px 25px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Hero;
