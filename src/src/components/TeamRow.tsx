import React, { useState } from "react";

export default function TeamRow({ team }) {
  const [pressed, setPressed] = useState(Array(20).fill(false));

  const toggle = (i) => {
    const copy = [...pressed];
    copy[i] = !copy[i];
    setPressed(copy);
  };

  return (
    <div style={styles.row}>
      {/* Nombre + Código (compactado) */}
      <div style={styles.left}>
        <span style={styles.name}>{team.name}</span>
        <span style={styles.code}>{team.code}</span>
      </div>

      {/* Stickers */}
      <div style={styles.stickers}>
        {team.stickers.map((n, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            style={{
              ...styles.sticker,
              background: pressed[i] ? "#000" : "#fff",
              color: pressed[i] ? "#fff" : "#000",
              boxShadow: pressed[i]
                ? "inset 2px 2px 4px #333"
                : "2px 2px 4px #0005",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "26px",              // 🔥 FILA MÁS BAJA
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "4px",                  // 🔥 ANTES 2px → ahora más natural
    minWidth: "135px",           // 🔥 ANTES 160px → más compacto
  },

  name: {
    fontSize: "14px",            // 🔥 ANTES 13px
    width: "95px",               // 🔥 ANTES 120px → MUCHO MÁS COMPACTO
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  code: {
    fontSize: "10px",            // 🔥 ANTES 13px
    fontWeight: "bold",
    width: "28px",               // 🔥 ANTES 32px
    textAlign: "left",
  },

  stickers: {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gap: "2px",                  // 🔥 ANTES 3px
    flexGrow: 1,
  },

  sticker: {
    width: "18px",               // 🔥 ANTES 20px
    height: "18px",              // 🔥 ANTES 20px
    borderRadius: "3px",
    border: "1px solid #555",
    cursor: "pointer",
    fontSize: "10px",            // 🔥 ANTES 11px
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
};
