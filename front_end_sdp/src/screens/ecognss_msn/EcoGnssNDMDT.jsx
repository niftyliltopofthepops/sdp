return (
    <div style={styles.container}>
        <div style={styles.iframeContainer}>
        <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/2783/latest"
        frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" 
        allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts 
        allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
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