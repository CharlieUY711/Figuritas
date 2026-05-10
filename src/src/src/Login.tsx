import React, { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    onLogin(data.user);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ingresar</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button style={styles.button} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    background: "#024A86",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },
  title: {
    color: "#FF7A00",
    fontSize: "28px",
    marginBottom: "20px",
  },
  input: {
    width: "260px",
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #FF7A00",
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    width: "260px",
    height: "45px",
    background: "#FF7A00",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};
