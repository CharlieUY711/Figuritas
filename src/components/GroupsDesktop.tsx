import React from 'react';
import { GROUPS } from '../data/groups';

export default function GroupsDesktop() {
  const left = GROUPS.slice(0, 6);
  const right = GROUPS.slice(6, 12);

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        {left.map(g => (
          <div key={g.name} style={styles.group}>
            <h3 style={styles.title}>{g.name}</h3>
            {g.teams.map(t => (
              <div key={t.code} style={styles.line}>
                <span style={styles.name}>{t.name}</span>
                <span style={styles.flag}>{t.flag}</span>
                <span style={styles.code}>{t.code}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.column}>
        {right.map(g => (
          <div key={g.name} style={styles.group}>
            <h3 style={styles.title}>{g.name}</h3>
            {g.teams.map(t => (
              <div key={t.code} style={styles.line}>
                <span style={styles.name}>{t.name}</span>
                <span style={styles.flag}>{t.flag}</span>
                <span style={styles.code}>{t.code}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    background: '#000',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  column: {
    flex: 1,
    padding: '10px'
  },
  group: {
    marginBottom: '20px'
  },
  title: {
    margin: 0,
    paddingBottom: '4px',
    borderBottom: '1px solid #444'
  },
  line: {
    display: 'flex',
    gap: '10px',
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  name: { width: '180px' },
  flag: { width: '40px' },
  code: { width: '40px' }
};
