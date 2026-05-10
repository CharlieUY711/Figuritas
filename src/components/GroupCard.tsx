import React from "react";
import TeamRow from "./TeamRow";

export default function GroupCard({ group }) {
  return (
    <div style={styles.card}>

      {/* TÍTULO */}
      <div style={styles.title}>
        Grupo {group.letter} –{" "}
        {group.teams.map((t, i) => (
          <span key={i}>
            {t.name} {t.flag}
            {i < group.teams.length - 1 ? " – " : ""}
          </span>
        ))}
      </div>

      {/* LISTA DE PAÍSES */}
      <div style={styles.list}>
        {group.teams.map((team) => (
          <TeamRow key={team.code} team={team} />
        ))}
      </div>

    </div>
  );
}

const styles = {
  card: {
    background: "#109DFA",
    borderRadius: "6px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  title: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "20px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
};
