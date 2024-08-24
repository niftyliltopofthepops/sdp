import React, { useState } from 'react';
import Auth from '../../Auth';
import { useNavigate } from 'react-router-dom';

const SpcNTMDT = () => {
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
        const { 0: qn1, 1: qn2, 2: qn3} = answers;
        const game_type = "intermedate";
        const game_name = "space_academy";
        const result = await Auth.SpcIntermediateAns(qn1, qn2, qn3, game_type, game_name);

        if (result) {
            setSubmissionStatus('Your answers were submitted successfully!');
            navigate("/sc_entry");
        } else {
            setSubmissionStatus('Failed to submit your answers.');
        }
    };

    const questions = [
        {
            question: "How often is Halley's Comet visible from Earth?",
            options: ["Every 50–51 years", "Every 75–76 years", "Every 100–101 years", "Every 125–126 years"],
            correctAnswer: "Every 75–76 years",
        },
        {
            question: "What is the albedo of Halley's Comet?",
            options: ["0.03", "0.10", "0.20", "0.50"],
            correctAnswer: "0.03",
        },
        {
            question: "Which spacecraft did not participate in the study of Halley's Comet in 1986?",
            options: ["Suisei", "Vega 1", "Stardust", "Giotto"],
            correctAnswer: "Stardust",
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.iframeContainer}>
                <iframe
                    src="https://eyes.nasa.gov/apps/solar-system/#/1p_halley"
                    allowFullScreen
                    style={styles.iframe}
                    title="NASA Solar System Exploration"
                ></iframe>
            </div>
            <div style={styles.quizContainer}>
                <h2>Comet Quiz</h2>
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

export default SpcNTMDT;
