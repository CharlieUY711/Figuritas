import React, { useState } from "react";
import { GROUPS } from "../data/groups";
import GroupsTable from "./GroupsTable";

export default function GroupsPage() {
  const [fwc, setFWC] = useState(Array(8).fill(false));
  const [avance, setAvance] = useState(0);

  const goLeft = () => {};
  const goRight = () => {};

  const toggleFWC = (index) => {
    setFWC((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const styles = {
    container: {
      backgroundColor: "#024A86",
      minHeight: "100vh",
      padding: 20,
      color: "white",
    },
    head: {
      backgroundColor: "#024A86",
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

    /* NUEVO: contenedor de FWC */
    fwcContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gap: "6px",
      marginBottom: 20,
    },

    fwcButton: {
      height: "42px",
      borderRadius: "6px",
      border: "1px solid #FF7A00",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.15s",
      background: "transparent",
      color: "#808080",
      boxShadow: "2px 2px 4px #0005",
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

      {/* 🔥 FIGURITAS ESPECIALES — AHORA SÍ, LOS 8 BOTONES */}
      <div style={styles.fwcContainer}>
        {Array.from({ length: 8 }, (_, i) => {
          const active = fwc[i];
          return (
            <button
              key={i}
              onClick={() => toggleFWC(i)}
              style={{
                ...styles.fwcButton,
                background: active ? "#FF7A00" : "transparent",
                color: active ? "white" : "#FF7A00",
                boxShadow: active
                  ? "inset 2px 2px 4px #333"
                  : "2px 2px 4px #0005",
              }}
            >
              FWC {i + 1}
            </button>
          );
        })}
      </div>

      {/* GRUPOS */}
      <div style={styles.groupsGrid}>
        {GROUPS.map((group) => (
          <GroupsTable key={group.letter} group={group} />
        ))}
      </div>
    </div>
  );
}
