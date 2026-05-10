import React, { useState } from "react";
import GroupCard from "./components/GroupCard";

export default function PageLayout({ userName, groups }) {
  const [fwcPressed, setFwcPressed] = useState(Array(8).fill(false));
  
  const totalPressed = fwcPressed.filter(Boolean).length;
  const totalStickers = 8 + (20 * 48); // 8 especiales + 48 equipos × 20 figuritas
  const percent = Math.round((totalPressed / totalStickers) * 100);

  const toggleFWC = (i) => {
    const copy = [...fwcPressed];
    copy[i] = !copy[i];
    setFwcPressed(copy);
  };

  return (
  <div style={styles.page}>
  <header style={styles.head}>
  
  {/* IZQUIERDA: Botón GRABAR */}
  <button style={styles.recordButton}>GRABAR</button>

  {/* CENTRO: Nombre del usuario */}
  <h1 style={styles.headTitle}>{userName}</h1>

  {/* DERECHA: Barra de avance */}
  <div style={styles.progressContainer}>
    <div style={styles.progressBar}>
      <div
        style={{
          ...styles.progressFill,
          width: `${percent}%`,
        }}
      />
    </div>
    <span style={styles.progressText}>{percent}%</span>
  </div>

</header>


      <div style={styles.specialContainer}>
        {fwcPressed.map((pressed, i) => (
          <button
            key={i}
            onClick={() => toggleFWC(i)}
            style={{
              ...styles.specialButton,
              background: pressed ? "#000" : "#fff",
              color: pressed ? "#fff" : "#000",
            }}
          >
            FWC {i + 1}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {groups.map((g) => (
          <GroupCard key={g.letter} group={g} />
        ))}
      </div>

      <footer style={styles.footer}>Charlie Figuritas 2026</footer>
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden", // evita scroll
    background: "#024A86",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column", 
    padding: "0px 20px 20px 20px",
    boxSizing: "border-box",
  },

  head: {
    height: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  },

  headTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF7A00",
  },

  specialContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gap: "8px",
    marginTop: "16px",   // ← AGREGAR ESTO
    marginBottom: "12px",
  },


  specialButton: {
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #000000",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  grid: {
    flexGrow: 1,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "10px", // separación uniforme
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },

  footer: {
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: "#FF7A00",
  },

 recordButton: {
   background: "#FF7A00",
   color: "#fff",
   border: "none",
   width: "120px",     // ← ANCHO
   height: "30px",    // ← ALTO
   padding: "8px 14px",
   borderRadius: "6px",
   fontWeight: "bold",
   cursor: "pointer",
 },

 progressContainer: {
   display: "flex",
   alignItems: "center",
   gap: "8px",
   justifyContent: "flex-end",
 },

 progressBar: {
   width: "120px",
   height: "15px",
   background: "#ffffff55",
   borderRadius: "6px",
   overflow: "hidden",
 },

 progressFill: {
   height: "100%",
   background: "#FF7A00",
   transition: "width 0.3s",
 },

 progressText: {
   fontSize: "12px",
   fontWeight: "bold",
   color: "#FF7A00", 
 },
};
