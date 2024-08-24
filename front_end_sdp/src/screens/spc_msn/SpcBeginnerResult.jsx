import React, { useState, useEffect } from 'react';
import Auth from '../../Auth';
import { Link } from 'react-router-dom';


const SpcBeginnerResult = () => {
    const [score, setScore] = useState(null);
    const [status, setStatus] = useState('');

    const gameType = 'beginner';
    const gameName = 'space_academy';

    useEffect(() => {
        const fetchScore = async () => {
            try {
                const result = await Auth.getScore(gameName, gameType);
                setScore(result.score);
                setStatus(result.output);
                console.log(score)
                console.log(status)
            } catch (error) {
                console.error('Error fetching score:', error);
            }
        };

        fetchScore();
    }, []);

    const handleProceedNextLevel = () => {
        // Logic for proceeding to the next level
        console.log('Proceeding to the next level...');

    };

    const handleRetry = () => {
        // Logic for retrying the current level
        console.log('Retrying the level...');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Space Academy - Beginner</h1>
            {score !== null ? (
                <>
                    <p>Your Score: {score}</p>
                    {status === 'pass' ? (
                        <Link to="/spc_intermediate"><button onClick={handleProceedNextLevel}>Proceed to Next Level</button></Link>
                    ) : (
                        <Link to="/spc_beginner"><button onClick={handleRetry}>Retry Level</button></Link>
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SpcBeginnerResult;
