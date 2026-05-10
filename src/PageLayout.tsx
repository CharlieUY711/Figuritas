import React from "react";

export default function PageLayout({ userName, children }) {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>{userName}</h1>
      </header>

      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  app: {
    width: "100vw",
    height: "100vh",
    background: "#024A86",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #FF7A00",
  },
  title: {
    color: "#FF7A00",
    fontSize: "28px",
    margin: 0,
  },
  main: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "16px",
  },
};
