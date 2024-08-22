import React from 'react';
import { welcome } from '../../assets/Images';

const WelcomePage = () => {
  return (
    <div style={styles.body}>
      <img src={welcome} alt="Welcome Image" style={styles.image} />
      <div style={styles.title}>
        <h1 style={styles.titleH1} className='mt-10' >You are now entering</h1>
        <h2 style={styles.titleH2}> X-Dimensional Discovery</h2>
      </div>
      <footer style={styles.footer}>
        <p>Embark on an epic journey across multiple dimensions, complete thrilling missions, and uncover the secrets of the universe.</p>
        <div style={styles.buttonContainer}>
          <a href="/shuttle_entry" style={styles.startButton}>Start Your Adventure</a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'black',
    overflow: 'hidden',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '80vh',
    zIndex: 2,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
    textAlign: 'center',
    top: '79%',
  },
  titleH1: {
    display: 'inline',
    margin: 0,
    color: 'white',
    fontSize: '27px',
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: '10px',
    marginTop: "10px",
  },
  titleH2: {
    display: 'inline',
    margin: 0,
    color: '#08f510',
    fontSize: '27px',
    fontFamily: "'Orbitron', sans-serif",
  },
  footer: {
    position: 'absolute',
    bottom: '15px',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    fontSize: '13px',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  startButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '13px',
    color: 'white',
    backgroundColor: '#08f510',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

styles.startButton[':hover'] = {
  backgroundColor: '#06d40d',
};

export default WelcomePage;
