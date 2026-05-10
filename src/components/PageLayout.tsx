import React, { useState } from "react";
import GroupCard from "./GroupCard";

export default function PageLayout({ userName, groups, onNext, onBack }) {

  // --- ESTADO FWC (8 botones toggle) ---
  const [fwcPressed, setFwcPressed] = useState(Array(8).fill(false));

  const toggleFWC = (i) => {
    const copy = [...fwcPressed];
    copy[i] = !copy[i];
    setFwcPressed(copy);
  };

  // --- CÁLCULO DE AVANCE ---
const totalPressed = fwcPressed.filter(Boolean).length;

const totalStickers = 8 + (20 * 48); // 8 FWC + 960 del álbum = 968

const percent = Math.round((totalPressed / totalStickers) * 100);

return (
  <div style={styles.page}>

    {/* HEAD */}
    <header style={styles.head}>

  {/* COLUMNA 1 — PANEL IZQUIERDO */}
  <div style={styles.leftPanel}>
    {onBack && (
      <button style={styles.navButton} onClick={onBack}>
        ‹
      </button>
    )}
  </div>

  {/* COLUMNA 2 — USUARIO CENTRADO */}
  <h1 style={styles.headTitle}>{userName}</h1>

  {/* COLUMNA 3 — PANEL DERECHO */}
  <div style={styles.rightPanel}>
    {onNext && (
      <button style={styles.navButton} onClick={onNext}>
        ›
      </button>
    )}
  </div>

</header>


      {/* FIGURITAS ESPECIALES */}
      <div style={styles.specialContainer}>
        {fwcPressed.map((pressed, i) => (
          <button
            key={i}
            onClick={() => toggleFWC(i)}
            style={{
              ...styles.specialButton,
              background: pressed ? "#000" : "#FFFFFF",
              color: pressed ? "#FFFFFF" : "#000000",
              boxShadow: pressed
                ? "inset 2px 2px 4px #333"
                : "2px 2px 4px #0005",
            }}
          >
            FWC {i + 1}
          </button>
        ))}
      </div>

      {/* GRID 2 × 3 */}
      <div style={styles.grid}>
        {groups.map((g) => (
          <GroupCard key={g.letter} group={g} />
        ))}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        Charlie Figuritas 2026
      </footer>

    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "#024A86",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box",
  },

head: {
  height: "70px",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto", // ← 1x3 perfecto
  alignItems: "center",
},

leftPanel: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#FF7A00",
},

rightPanel: {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
},

headTitle: {
  fontSize: "34px",
  fontWeight: "bold",
  color: "#FF7A00",
  margin: 0,
  textAlign: "center",
  justifySelf: "center", // ← CENTRADO REAL
},
  recordButton: {
    padding: "6px 14px",
    background: "#FF0000",
    border: "2px solid #FF7A00",
    borderRadius: "6px",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
  },

  dateText: {
    fontSize: "14px",
    color: "#FF7A00",
  },

  progressText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#FF7A00",
  },

  navRight: {
    display: "flex",
    justifyContent: "flex-end",
  },

  navButton: {
    background: "none",
    border: "none",
    color: "#FF7A00",
    fontSize: "40px",
    cursor: "pointer",
    lineHeight: "40px",
    padding: 0,
  },

  headTitle: {
    fontSize: "34px",
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    color: "#FF7A00",
  },

  specialContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gap: "8px",
    marginBottom: "20px",
  },

  specialButton: {
    width: "100%",
    height: "45px",
    borderRadius: "6px",
    border: "1px solid #FF7A00",
    background: "#FFFFFF",
    color: "#000000",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.15s",
    boxShadow: "2px 2px 4px #0005",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },

  grid: {
    flexGrow: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "12px",
  },

  footer: {
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: "#FF7A00",
  },
};
