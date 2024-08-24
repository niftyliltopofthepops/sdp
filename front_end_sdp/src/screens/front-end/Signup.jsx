import React, { useState } from 'react';
import Auth from '../../Auth';
import { glo_ico, login_image } from '../../assets/Images';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const success = await Auth.userReg(email, password, username); // Call the Auth method

        if (success) {
            // Redirect to another page or show a success message
            console.log('Registration successful!');
        } else {
            // Show an error message
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div style={styles.formContainer}>
                <div style={styles.title}>
                    <img src={glo_ico} alt="Earth Logo" style={styles.earthLogo} />
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" style={styles.label}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Register</button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
                <a href="/login" style={styles.loginLink}>Login</a>
            </div>
            <img src={login_image} alt="Background" style={styles.loginImage} />
            <footer style={styles.footer}>
                <div className="footer-links" style={styles.footerLinks}>
                    <a href="/privacy" style={styles.footerLink}>Privacy Policy</a> | 
                    <a href="/terms" style={styles.footerLink}>Terms of Service</a>
                </div>
                <p>&copy; 2024 X-Dimensional Discovery. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        margin: '0',
        fontFamily: "'Orbitron', sans-serif",
        backgroundColor: '#000035',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        overflow: 'hidden', 
        position: 'relative', 
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom right, rgba(0, 0, 51, 0.8), rgba(0, 0, 100, 0.7))',
        zIndex: 0,
    },
    formContainer: {
        padding: '40px',
        width: '350px',
        backgroundColor: 'rgba(0, 0, 51, 0.8)',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        position: 'relative',
        zIndex: 2,
    },
    earthLogo: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
    },
    label: {
        alignSelf: 'flex-start',
        margin: '10px 0 5px',
        fontSize: '14px',
        color: '#08f510',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: '#333',
        color: 'white',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: '#FF8C00',
        color: 'white',
        fontSize: '15px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s, transform 0.3s',
    },
    loginLink: {
        marginTop: '10px',
        color: '#08f510',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.3s',
    },
    loginImage: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '30vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 1,
    },
    footer: {
        textAlign: 'center',
        marginTop: '60px',
        color: 'white',
        fontSize: '12px',
        zIndex: 2,
    },
    footerLinks: {
        marginBottom: '5px',
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 5px',
        transition: 'color 0.3s',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
};

export default Signup;
