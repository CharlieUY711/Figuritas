import React from "react";
import TeamRow from "./TeamRow";

export default function GroupCard({ group }) {
  return (
    <div style={styles.card}>
      <div style={styles.title}>Grupo {group.letter}</div>
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
   padding: "6px",
   display: "flex",
   flexDirection: "column",
   gap: "6px",
   height: "100%",   // ← CLAVE
   width: "100%",    // ← CLAVE
   boxSizing: "border-box",
   overflow: "hidden",
 },

  title: {
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    paddingBottom: "4px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
};
