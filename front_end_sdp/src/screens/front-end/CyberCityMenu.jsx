import React from 'react';
import { login_image } from '../../assets/Images';

const CyberCityMenu = () => {
  return (
    <div style={styles.body}>
      <img src={ login_image } alt="Cybernetic" style={styles.image} />
      <div style={styles.content}>
        <div style={styles.textbox}>
          <h1 style={styles.heading}>You are now approaching Cybernetics Cityscape. Prepare to select your mission now.</h1>

        </div>
        <a href='login'>
         <div style={styles.textbox} >
              <h3 style={styles.heading}>PRESS TO ENTER</h3>
         </div>
        </a>
      </div>
    </div>
  );
};

const styles = {
  body: {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    backgroundColor: '#0f0f0f', // Dark background for contrast
    fontFamily: "'Orbitron', sans-serif", // Futuristic font
    color: '#e0e0e0', // Light text color for better readability
  },
  image: {
    height: '100vh',
    width: '100vw',
    objectFit: 'cover', // Ensure the image covers the container
    display: 'block',
    maxWidth: '100%',
    filter: 'brightness(60%)', // Dim the image for better text visibility
  },
  content: {
    position: 'absolute', // Position the content over the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textbox: {
    background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)', // Futuristic green glow
  },
  heading: {
    fontSize: '2.5rem', // Larger text for emphasis
    color: '#00ff99', // Neon green color
    textShadow: '0 0 10px #00ff99, 0 0 20px #00ff99', // Glowing text effect
    margin: 0,
    lineHeight: 1.3,
    animation: 'glow 1.5s ease-in-out infinite', // Apply the glowing animation
  },
};

export default CyberCityMenu;
