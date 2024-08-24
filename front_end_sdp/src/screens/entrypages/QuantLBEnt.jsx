import React from 'react';
import { quant_ig } from '../../assets/Images';
import { Link } from 'react-router-dom';

const QuantLBEnt = () => {
    return (
        <div style={styles.body}>
            <div style={styles.titleBox}>
                <h1 style={styles.title}>Mission 2: Quantum Lab</h1>
            </div>
            <img src={quant_ig} alt="Quantum Lab Image" style={styles.image} />
            <div style={styles.testBox}>
                <h1 style={styles.testTitle}>Quantum Knowledge Test</h1>
                <p style={styles.testDescription}>
                    Before entering the Quantum lab, you must pass the Quantum Knowledge Test. This test will assess your 
                    understanding of quantum physics and computing principles. Good luck!
                </p>
                <Link to="/qlb_beginner"><button style={styles.startButton}>Start Mission</button></Link>
            </div>
        </div>
    );
}

const styles = {
    body: {
        backgroundColor: '#121212',
        color: '#ffffff',
        fontFamily: "'Orbitron', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0,
    },
    titleBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid #00ff99',
        borderRadius: '10px',
        padding: '10px',
        margin: '20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '30px',
        margin: 0,
    },
    image: {
        width: '50%',
        margin: '20px 0',
    },
    testBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid #00ff99',
        borderRadius: '10px',
        padding: '10px',
        margin: '20px',
        textAlign: 'center',
    },
    testTitle: {
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    testDescription: {
        fontSize: '1em',
        marginBottom: '20px',
    },
    startButton: {
        backgroundColor: '#00ff99',
        border: 'none',
        borderRadius: '5px',
        color: '#121212',
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    startButtonHover: {
        backgroundColor: '#00cc79',
    }
};

export default QuantLBEnt;
