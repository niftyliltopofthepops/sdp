import React, { useState } from 'react';
import Auth from '../../Auth';
import { useNavigate } from 'react-router-dom';

const SpcBeginner = () => {
    const [answers, setAnswers] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');
    const navigate = useNavigate();

    const handleAnswerChange = (questionNumber, answer) => {
        setAnswers({
            ...answers,
            [questionNumber]: answer,
        });
    };

    const handleSubmit = async () => {
        const { 0: qn1, 1: qn2, 2: qn3, 3: qn4, 4: qn5 } = answers;
        const game_type = "beginner";
        const game_name = "space_academy";
        const result = await Auth.SpcBeginnerAns(qn1, qn2, qn3, qn4, qn5, game_type, game_name);
        try{
            
            if (result) {
                setSubmissionStatus('Your answers were submitted successfully!');
                navigate("/spc_beginner_result");
            } else {
                setSubmissionStatus('Failed to submit your answers. Please try again.');
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Saving Error:", error);
            alert("An error occurred while saving.");
          }
    };

    const questions = [
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: "Mars",
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Saturn",
        },
        {
            question: "Which moon is the largest in the Solar System?",
            options: ["Europa", "Titan", "Ganymede", "Callisto"],
            correctAnswer: "Ganymede",
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correctAnswer: "Mercury",
        },
        {
            question: "Which planet has a day longer than its year?",
            options: ["Earth", "Venus", "Mercury", "Neptune"],
            correctAnswer: "Venus",
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.iframeContainer}>
                <iframe
                    src="https://eyes.nasa.gov/apps/solar-system/#/venus"
                    allowFullScreen
                    style={styles.iframe}
                    title="NASA Solar System Exploration"
                ></iframe>
            </div>
            <div style={styles.quizContainer}>
                <h2>Solar System Quiz</h2>
                {questions.map((q, index) => (
                    <div key={index} style={styles.questionBlock}>
                        <h3>{`${index + 1}. ${q.question}`}</h3>
                        {q.options.map((option, i) => (
                            <label key={i} style={styles.option}>
                                <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(index, option)}
                                    checked={answers[index] === option}
                                    style={styles.radio}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button onClick={handleSubmit} style={styles.submitButton}>Submit Answers</button>
                {submissionStatus && <p style={styles.submissionStatus}>{submissionStatus}</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "'Orbitron', sans-serif",
        backgroundColor: '#121212',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
    },
    iframeContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    iframe: {
        width: '80%',
        height: '400px',
        border: 'none',
    },
    quizContainer: {
        marginTop: '20px',
    },
    questionBlock: {
        marginBottom: '20px',
    },
    option: {
        display: 'block',
        marginBottom: '5px',
    },
    radio: {
        marginRight: '10px',
    },
    submitButton: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: 'orange',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    submissionStatus: {
        marginTop: '10px',
        color: 'lightgreen',
    },
};

export default SpcBeginner;

