return (
    <div style={styles.container}>
        <div style={styles.iframeContainer}>
        <iframe allow="fullscreen; autoplay;" allowfullscreen width="795" height="690" frameborder="0" 
        src="https://www.educaplay.com/game/5497964-geodetic_surfaces.html"></iframe>
        </div>
        <div style={styles.quizContainer}>
            <h2>Fourier Waves Quiz</h2>
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