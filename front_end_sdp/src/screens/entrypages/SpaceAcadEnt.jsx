import React from 'react';
import { mn_first } from '../../assets/Images';
import { Link } from 'react-router-dom';

const SpaceAcadEnt = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1>Welcome to Mission 1 - Space Academy</h1>
            </header>
            
            <section style={styles.content}>
                <p style={styles.introText}>
                    Mission 1 involves the exploration of the solar system. Your objectives are to map the star system, 
                    identify potential habitable planets, and collect samples from asteroids. Answer the INTERACTIVE QUIZ to 
                    test what you know!
                </p>
                
                <div style={styles.imageContainer}>
                    <img src={mn_first} alt="Mission Image" style={styles.image} />
                    <div style={styles.imageTextContainer}>
                        <h2 style={styles.imageText}>Mission Briefing</h2>
                        <p>
                            Your mission is to explore the outer realms of the Space Academy, gather data on celestial bodies, 
                            and complete the interactive quiz to test your knowledge. Prepare for an exciting journey through 
                            the cosmos!
                        </p>
                        <Link to="/spc_beginner"><button  style={styles.startMission}>Start Mission</button></Link>
                    </div>
                </div>
                
                <div style={styles.navigation}>
                    <p>Navigate to Other Missions:</p>
                    <button style={styles.navButton}>Quantum Lab - Mission 2</button>
                    <button style={styles.navButton}>Eco-Genesis - Mission 3</button>
                    <button style={styles.navButton}>Final Challenge</button>
                </div>
            </section>
        </div>
    );
}

const styles = {
    body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#121212',
        color: '#fff',
    },
    header: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#1e1e1e',
    },
    content: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    introText: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#2b2b2b',
        borderRadius: '10px',
        padding: '20px',
    },
    image: {
        width: '100%',
        maxWidth: '800px',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    imageTextContainer: {
        textAlign: 'center',
    },
    imageText: {
        margin: 0,
    },
    startMission: {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
    navigation: {
        textAlign: 'center',
        marginTop: '20px',
    },
    navButton: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
    },
    navButtonHover: {
        backgroundColor: '#444',
    },
};

export default SpaceAcadEnt;
