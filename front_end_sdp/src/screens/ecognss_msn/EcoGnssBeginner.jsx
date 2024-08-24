import React, { useState } from 'react';
import Auth from '../../Auth';
import { useNavigate } from 'react-router-dom';

const EcoGnssBeginner  = () => {
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
        const game_type = "beginner";
        const game_name = "ecogenesis";
        const result = await Auth.EcoGenBegAns(qn1, qn2, qn3, game_type, game_name);
        try{
            
            if (result) {
                setSubmissionStatus('Your answers were submitted successfully!');
                navigate("/qntm_entry");
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
            question: "Which one stays on top of the water?",
            options: ["wood", "aluminium", "ice", "styrofoam"],
            correctAnswer: "styrofoam",
        },
        {
            question: "Which one is submerging?",
            options: ["wood", "aluminium", "ice", "styrofoam"],
            correctAnswer: "ice",
        },
        {
            question: "Which one goes to the bottom?",
            options: ["wood", "aluminium", "ice", "styrofoam"],
            correctAnswer: "aluminium",
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.iframeContainer}>
                <iframe
                    src="https://phet.colorado.edu/sims/html/density/latest/density_all.html"
                    allowFullScreen
                    style={styles.iframe}
                    title="Density"
                ></iframe>
            </div>
            <div style={styles.quizContainer}>
                <h2>Blackbody Spectrum Quiz</h2>
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
        height: '600px',
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

export default EcoGnssBeginner ;
