import React, { useState } from "react";
import { GROUPS } from "../data/groups";
import GroupsTable from "./GroupsTable";

export default function GroupsPage() {
  const [avance, setAvance] = useState(0);

  const goLeft = () => {};
  const goRight = () => {};

  const styles = {
    container: {
      backgroundColor: "#001F3F",
      minHeight: "100vh",
      padding: 20,
      color: "white",
    },
    head: {
      backgroundColor: "rgba(0, 150, 255, 0.25)",
      padding: "10px 20px",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    navBtn: {
      fontSize: 22,
      background: "none",
      border: "none",
      color: "white",
      cursor: "pointer",
    },
    saveBtn: {
      backgroundColor: "#0074D9",
      padding: "6px 12px",
      borderRadius: 8,
      border: "none",
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
    },
    user: {
      fontSize: 20,
      fontWeight: "bold",
    },
    avance: {
      fontSize: 16,
      opacity: 0.8,
    },
    groupsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.head}>
        <button style={styles.navBtn} onClick={goLeft}>⬅</button>

        <button style={styles.saveBtn}>💾 Grabar</button>

        <div style={styles.user}>Carlos</div>

        <div style={styles.avance}>Avance: {avance}%</div>

        <button style={styles.navBtn} onClick={goRight}>➡</button>
      </div>

      {/* Figuritas especiales */}
      <div style={{ marginBottom: 20 }}>
        ⭐ ⭐ ⭐
      </div>

      {/* AHORA SÍ: tus grupos reales */}
      <div style={styles.groupsGrid}>
        {GROUPS.map((group) => (
          <GroupsTable key={group.letter} group={group} />
        ))}
      </div>
    </div>
  );
}
