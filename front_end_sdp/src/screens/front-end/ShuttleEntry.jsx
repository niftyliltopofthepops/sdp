import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { shuttle } from '../../assets/Images';


const ShuttleEntry = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ccs_menu'); // Navigate to the CyberCityMenu page
    }, 5000); // 5 seconds delay

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.body}>
      <img src={shuttle} alt="Space Shuttle" style={styles.image} />
      <div style={styles.title}>
        <div style={styles.textbox}>
          <h1 style={styles.heading}>
            Welcome to X-Dimensional Discovery. There will be 3 realms to explore with 3 missions to select. 
            Fasten your seatbelts and you will enter Cybernetics Cityscape soon to explore your options. Good luck.
          </h1>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#000',
    overflow: 'hidden',
    margin: 0,
    fontFamily: "'Orbitron', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    position: 'relative',
    color: '#08f510',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '75vh',
    objectFit: 'cover',
    opacity: 0.8,
    filter: 'contrast(1.2) brightness(0.8)',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },
  textbox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    border: '2px solid #08f510',
    borderRadius: '10px',
    boxShadow: '0 0 10px #08f510, 0 0 20px #08f510, 0 0 30px #08f510',
    marginTop: '36%',
  },
  heading: {
    fontSize: '20px',
    color: '#08f510',
    textAlign: 'center',
    textShadow: '0 0 10px #08f510, 0 0 20px #08f510, 0 0 30px #08f510',
    fontWeight: 'bold',
    letterSpacing: '2px',
    animation: 'glow 1.5s infinite alternate',
  },
};

export default ShuttleEntry;
