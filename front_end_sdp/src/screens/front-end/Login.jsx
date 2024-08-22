import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Auth from "../../Auth";
import { login_image, glo_ico } from "../../assets/Images";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async () => {
    setError(null); // Reset the error state
    const success = await Auth.userLogin(username, password);

    if (success) {
      // Redirect to "ccs_menu" directory upon successful login
      navigate("/msn_menu");
    } else {
      // Handle login failure (e.g., show an error message)
      setError("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="body">
      <div className="overlay"></div>
      <img src={login_image} alt="Spaceship" className="LoginImage" />
      <div className="title">
        <img src={glo_ico} alt="Earth Logo" className="earth-logo" />
        <h1>X-Dimensional Discovery</h1>
      </div>
      <div className="form-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Begin Mission</button>
        <button>Sign Up</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <footer>
        <div className="footer-links">
          <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Feedback form</a>
        </div>
        <p>&copy; 2024 X-Dimensional Discovery. All rights reserved.</p>
      </footer>
      <a href="/register">Register</a>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        .body {
          margin: 0;
          font-family: 'Orbitron', sans-serif;
          background-color: #000035;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
          overflow: hidden; /* Prevent scrollbars */
          position: relative; /* Needed for absolute positioning of the image */
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom right, rgba(0, 0, 51, 0.8), rgba(0, 0, 100, 0.7));
          z-index: 0;
        }

        .form-container {
          padding: 40px;
          width: 350px;
          background-color: rgba(0, 0, 51, 0.8);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative; /* Ensure the form container is above the image */
          z-index: 2; /* Ensure the form is above the image */
        }

        .title {
          display: flex;
          align-items: center;
          margin-top: 50px;
          margin-right: 300px;
          position: relative; /* Ensure the title is above the circle */
          z-index: 2; /* Ensure the title is above the circle */
        }

        .earth-logo {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }

        .title h1 {
          font-size: 30px;
          color: #08f510;
          margin: 0;
          font-family: 'Orbitron', sans-serif;
        }

        .form-container label {
          align-self: flex-start; /* Align labels to the start (left) */
          margin: 10px 0 5px;
          font-size: 14px;
          color: #08f510;
        }

        .form-container input[type="text"],
        .form-container input[type="password"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: none;
          border-radius: 50px;
          background-color: #333;
          color: white;
          box-sizing: border-box;
        }

        .form-container button {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: none;
          border-radius: 50px;
          background-color: #FF8C00;
          color: white;
          font-size: 15px;
          cursor: pointer;
          box-sizing: border-box;
          transition: background-color 0.3s, transform 0.3s;
        }

        .form-container button:hover {
          background-color: #FF7000;
          transform: scale(1.05);
        }

        .LoginImage {
          position: absolute; /* Position the image absolutely */
          top: 0;
          right: 0;
          width: 30vw; /* Full viewport width */
          height: 100vh; /* Full viewport height */
          object-fit: cover;
          z-index: 1; /* Ensure the image is above the overlay but below the content */
        }

        footer {
          text-align: center;
          margin-top: 60px;
          color: white;
          font-size: 12px;
          z-index: 2; /* Ensure footer is above the overlay */
        }

        .footer-links {
          margin-bottom: 5px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: rgb(7, 233, 25);
        }
      `}</style>
    </div>
  );
};

export default Login;
