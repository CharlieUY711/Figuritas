import React, { useState } from "react";
import { GROUPS } from "../data/groups";

export default function GroupsTable() {
  return (
    <div style={styles.container}>
      {GROUPS.map((g) => (
        <div key={g.name} style={styles.group}>
          <h3 style={styles.title}>{g.name}</h3>

          {g.teams.map((team) => (
            <TeamRow key={team.code} team={team} />
          ))}
        </div>
      ))}
    </div>
  );
}

function TeamRow({ team }) {
  const [pressed, setPressed] = useState(Array(20).fill(false));

  const toggle = (i) => {
    const copy = [...pressed];
    copy[i] = !copy[i];
    setPressed(copy);
  };

  return (
    <div style={styles.row}>
      <span style={styles.name}>{team.name}</span>

      <img
        src={team.flag}
        alt={team.code}
        style={styles.flag}
      />

      <span style={styles.code}>{team.code}</span>

      <div style={styles.stickers}>
        {team.stickers.map((n, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            style={{
              ...styles.sticker,
              background: pressed[i] ? "#000" : "#fff",
              color: pressed[i] ? "#fff" : "#000",
              transform: pressed[i] ? "translateY(2px)" : "none",
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
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "20px",
    background: "#000",
    color: "white",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Arial",
  },
  group: {
    padding: "10px",
    background: "#111",
    borderRadius: "6px",
  },
  title: {
    margin: "0 0 8px 0",
    paddingBottom: "4px",
    borderBottom: "1px solid #444",
    fontSize: "16px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 0",
  },
  name: {
    width: "150px",
    fontSize: "14px",
  },
  flag: {
    width: "28px",
    height: "20px",
    objectFit: "cover",
    borderRadius: "3px",
  },
  code: {
    width: "40px",
    fontSize: "14px",
  },
  stickers: {
    display: "flex",
    gap: "4px",
  },
  sticker: {
    width: "22px",
    height: "22px",
    borderRadius: "4px",
    border: "1px solid #555",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "0.1s",
  },
};
