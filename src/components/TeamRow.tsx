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
      <div style={styles.left}>
        <span style={styles.name}>{team.name}</span>
        <span style={styles.code}>{team.code}</span>
      </div>

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
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    minWidth: "160px",
  },

  name: {
    fontSize: "13px",
    width: "120px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  code: {
    fontSize: "13px",
    fontWeight: "bold",
    width: "32px",
  },

  stickers: {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gap: "3px",
    flexGrow: 1,
  },

  sticker: {
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    border: "1px solid #555",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
};
