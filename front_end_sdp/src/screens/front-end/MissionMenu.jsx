import React from 'react';

const MissionMenu = () => {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img src="Images/Global icon.png" alt="Global Icon" style={styles.globalIcon} />
          <h1 style={styles.siteTitle}>X-Dimensional Discovery</h1>
        </div>
        <button style={styles.logoutButton}>Logout</button>
      </header>
      <main style={styles.main}>
        <img src="Images/Mission Menu .jpeg" alt="Main Image" style={styles.mainImage} />
        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeHeading}>Welcome to Cybernetics Cityscape</h1>
          <p style={styles.welcomeText}>Your central hub for all activities in X-Dimensional Discovery</p>
          <h2 style={styles.welcomeSubHeading}>Please select a realm to enter</h2>
        </div>
        <div style={styles.realmSelection}>
          <a href="space-academy.html" style={styles.realmLink}>
            <div style={styles.realm}>
              <img src="Images/space acedemy.jpeg" alt="Space Academy" style={styles.realmIcon} />
              <h3 style={styles.realmTitle}>Space Academy</h3>
              <p style={styles.realmDescription}>Train and prepare for interstellar missions</p>
            </div>
          </a>
          <a href="quantum-lab.html" style={styles.realmLink}>
            <div style={styles.realm}>
              <img src="Images/quantum lab.jpg" alt="Quantum Lab" style={styles.realmIcon} />
              <h3 style={styles.realmTitle}>Quantum Lab</h3>
              <p style={styles.realmDescription}>Research and develop cutting-edge technologies</p>
            </div>
          </a>
          <a href="eco-genesis.html" style={styles.realmLink}>
            <div style={styles.realm}>
              <img src="Images/eco-genesis.jpeg" alt="Eco-Genesis" style={styles.realmIcon} />
              <h3 style={styles.realmTitle}>Eco-Genesis</h3>
              <p style={styles.realmDescription}>Cultivate and harvest bioengineered crops</p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#161616',
    color: '#fff',
    fontFamily: "'Orbitron', sans-serif",
    margin: 0,
    padding: 0,
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#202020',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
  },
  globalIcon: {
    width: '15px',
    marginRight: '10px',
  },
  siteTitle: {
    fontSize: '12px',
    color: '#08f510',
    margin: 0,
  },
  logoutButton: {
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '10px',
    position: 'absolute',
    top: '10px',
    right: '20px',
  },
  main: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
  },
  mainImage: {
    width: '40%',
    maxWidth: '600px',
    height: 'auto',
    marginBottom: '20px',
  },
  welcomeSection: {
    textAlign: 'center',
  },
  welcomeHeading: {
    fontSize: '20px',
    margin: '-5px 0',
    textShadow: '0 0 10px #08f510, 0 0 20px #08f510, 0 0 30px #08f510',
  },
  welcomeText: {
    fontSize: '1rem',
    margin: '10px 0',
  },
  welcomeSubHeading: {
    fontSize: '1.2rem',
    margin: '15px 0',
    color: '#ff9800',
  },
  realmSelection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
  },
  realmLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  realm: {
    backgroundColor: '#444',
    borderRadius: '8px',
    padding: '8px',
    width: '220px',
    height: 'auto',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: '2px solid #08f510',
  },
  realmIcon: {
    width: '39%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  realmTitle: {
    fontSize: '0.9rem',
    margin: '5px 0',
    color: '#ff9800',
    padding: '2px',
    backgroundColor: '#202020',
    borderRadius: '4px',
  },
  realmDescription: {
    fontSize: '0.8rem',
    margin: 0,
    padding: '2px',
    backgroundColor: '#202020',
    borderRadius: '4px',
  },
};

export default MissionMenu;
