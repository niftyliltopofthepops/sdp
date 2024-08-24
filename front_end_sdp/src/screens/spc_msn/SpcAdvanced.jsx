import React, { useState } from 'react';
import Auth from '../../Auth';
import { useNavigate } from 'react-router-dom';

const SpcAdvanced = () => {
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
        const { 0: qn1, 1: qn2} = answers;
        const game_type = "advanced";
        const game_name = "space_academy";

        const result = await Auth.SpcAdvancedAns(qn1, qn2, game_type, game_name);

        if (result) {
            setSubmissionStatus('Your answers were submitted successfully!');
            navigate("/sc_entry");
        } else {
            setSubmissionStatus('Failed to submit your answers.');
        }
    };

    const questions = [
        {
            question: "What does the asteroid Psyche offer scientists a unique window into?",
            options: ["Building blocks of planet formation", "Trojan asteroids", "Comet composition", "Saturn's rings"],
            correctAnswer: "Building blocks of planet formation",
        },
        {
            question: "What is Lucy the first mission to visit?",
            options: ["Trojan asteroids", "Psyche asteroid", "Neptune's moons", "Mars rover"],
            correctAnswer: "Trojan asteroids",
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.iframeContainer}>
                <iframe
                    src="https://eyes.nasa.gov/apps/solar-system/#/sc_psyche"
                    allowFullScreen
                    style={styles.iframe}
                    title="NASA Solar System Exploration"
                ></iframe>
            </div>
            <div style={styles.quizContainer}>
                <h2>Asteroid Quiz</h2>
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

export default SpcAdvanced;
