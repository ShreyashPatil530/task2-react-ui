import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Task 2 Project. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
    marginTop: "50px",
  },
};

export default Footer;
