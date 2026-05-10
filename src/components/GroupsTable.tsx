import React, { useState } from "react";

export default function GroupsTable({ group }) {
  return (
    <div style={styles.groupContainer}>

      {/* TÍTULO DEL GRUPO */}
      <div style={styles.groupTitle}>
        Grupo {group.letter} –{" "}
        {group.teams.map((t, i) => (
          <span key={i}>
            {t.name} {t.flag}
            {i < group.teams.length - 1 ? " – " : ""}
          </span>
        ))}
      </div>

      {/* LISTA DE PAÍSES */}
      <div style={styles.countryList}>
        {group.teams.map((team) => (
          <TeamRow key={team.code} team={team} />
        ))}
      </div>

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
      {/* Nombre + código (sin bandera) */}
      <div style={styles.left}>
        <span style={styles.name}>{team.name}</span>
        <span style={styles.code}>{team.code}</span>
      </div>

      {/* Botones 1–20 */}
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
  /* CONTENEDOR DEL GRUPO */
  groupContainer: {
    background: "#111",
    borderRadius: "6px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  /* TÍTULO DEL GRUPO */
  groupTitle: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "4px",
    lineHeight: "20px",
  },

  /* LISTA DE PAÍSES */
  countryList: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  /* FILA DE PAÍS */
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /* NOMBRE + CÓDIGO */
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
    textAlign: "left",
  },

  /* BOTONES 1–20 */
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
    transition: "0.1s",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
  },
};