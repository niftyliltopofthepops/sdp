import React from 'react';
import { glo_ico, eco_ig } from '../../assets/Images';

const EcoGenEnt = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <div style={styles.logoTitle}>
                    <img src={glo_ico} alt="Global Icon" style={styles.icon} />
                    <span style={styles.siteTitle}>X-Dimensional Discovery</span>
                </div>
                <nav>
                    <a href="#" style={styles.navLink}>Mission 1: Space Academy</a>
                    <a href="#" style={styles.navLink}>Mission 2: Quantum Lab</a>
                    <a href="#" style={{ ...styles.navLink, color: 'orange' }}>Mission 3: Eco-Genesis</a>
                </nav>
            </header>
            <div style={styles.content}>
                <h1 style={styles.h1}>Mission 3: Eco-Genesis</h1>
                <div style={styles.imageContainer}>
                    <img src={eco_ig} alt="Eco Genesis" style={styles.image} />
                    <button style={styles.startMission}>Start Mission</button>
                </div>
                <h2 style={styles.h2}>
                    Welcome to Eco-Genesis, the final frontier in our journey through X-Dimensional Discovery. Here, you 
                    will face a series of skill-based challenges that test your knowledge and abilities in biotechnology and 
                    futuristic agriculture. Each task is designed to push your limits and help you master biotechnological 
                    advancements in farming. Your success in this mission will mark the triumphant completion of the game.
                </h2>
            </div>
        </div>
    );
}

const styles = {
    body: {
        margin: 0,
        padding: 0,
        color: '#08f510', /* Futuristic green color */
        fontFamily: "'Orbitron', sans-serif",
        backgroundColor: 'black', /* To enhance the futuristic feel */
        overflow: 'hidden',
    },
    header: {
        position: 'fixed', /* Fix header at the top */
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)', /* More opaque transparent black background */
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderBottom: '2px solid #08f510', /* Green futuristic border */
        zIndex: 1000,
    },
    logoTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: '30px',
    },
    siteTitle: {
        marginLeft: '10px',
        fontSize: '24px', /* Slightly larger font */
        color: '#08f510',
    },
    navLink: {
        marginLeft: '20px',
        color: '#08f510',
        textDecoration: 'none',
        fontSize: '18px',
    },
    navLinkHover: {
        textDecoration: 'underline',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '60px', /* Space for the fixed header */
        padding: '20px',
    },
    h1: {
        fontSize: '36px',
        marginBottom: '20px',
        marginTop: '-30px', /* Reduce the top margin */
    },
    imageContainer: {
        position: 'relative',
        display: 'inline-block',
        marginBottom: '20px',
    },
    image: {
        width: '30vw',
        height: '50vh',
        borderRadius: '10px', /* Add rounded corners */
    },
    startMission: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        backgroundColor: 'orange', /* Button color */
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
    },
    startMissionHover: {
        backgroundColor: 'darkorange', /* Darker orange for hover effect */
    },
    h2: {
        fontSize: '15px',
        marginTop: '20px',
        color: 'white', /* Changed text color to white */
    },
    bodyAfter: {
        content: '""',
        display: 'block',
        height: '50px', /* Footer height */
    }
};

export default EcoGenEnt;
