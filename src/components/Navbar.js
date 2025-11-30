import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Task 2 Project</div>

      <ul style={styles.menu}>
        <li>Home</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    display: "flex",
    padding: "15px 20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    cursor: "pointer",
  },
};

export default Navbar;
