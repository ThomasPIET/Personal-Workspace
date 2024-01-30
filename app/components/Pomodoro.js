import { useState, useEffect } from 'react';
import ToolCard from '../UI/card';

const Pomodoro = () => {
    const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timer]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    return (
        <ToolCard>
            <h2>Pomodoro Timer</h2>
            <p>Time remaining: {timer} seconds</p>
            {isRunning ? (
                <button onClick={stopTimer}>Stop</button>
            ) : (
                <button onClick={startTimer}>Start</button>
            )}
        </ToolCard>
    );
};

export default Pomodoro;