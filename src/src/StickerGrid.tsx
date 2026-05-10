import React from "react";

export default function StickerGrid({ items, onPress }) {
  return (
    <div style={styles.grid}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            ...styles.card,
            ...(item.collected ? styles.collected : styles.notCollected),
          }}
          onClick={() => onPress(item)}
        >
          <div style={styles.number}>{item.number}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    paddingBottom: "20px",
  },
  card: {
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: "10px",
    background: "#013764",
    border: "2px solid #FF7A00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 120ms cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
  collected: { opacity: 1 },
  notCollected: { opacity: 0.35 },
  number: { userSelect: "none" },
};
