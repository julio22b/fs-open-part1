import React, { useState } from 'react';
import './App.css';

function Statistics({ good, neutral, bad }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>;
    }

    const all = good + neutral + bad;
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Statistic text="good" stat={good} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Statistic text="neutral" stat={neutral} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Statistic text="bad" stat={bad} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Statistic text="all" stat={all} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Statistic text="average" stat={(all / 3).toFixed(1)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Statistic
                                text="positive"
                                stat={((good / all) * 100).toFixed(1)}
                                percent={'%'}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function Statistic({ text, stat, percent }) {
    return (
        <p>
            {text} {stat} {percent}
        </p>
    );
}

function Button({ text, clickEvent }) {
    return <button onClick={clickEvent}>{text}</button>;
}

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    /* const [stats, setStats] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        all: 0,
        average: 0,
        positive: 0
    }) */

    function addReview(setReview, review) {
        setReview(review + 1);
    }

    return (
        <>
            <div>
                <h1>give feedback</h1>
                <Button text={'good'} clickEvent={() => addReview(setGood, good)} />
                <Button text={'neutral'} clickEvent={() => addReview(setNeutral, neutral)} />
                <Button text={'bad'} clickEvent={() => addReview(setBad, bad)} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
}

export default App;
