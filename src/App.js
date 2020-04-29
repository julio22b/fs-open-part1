import React, { useState } from 'react';
import './App.css';

function App() {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    function random() {
        const number = Math.round(Math.random() * 5);
        setSelected(number);
    }

    function vote() {
        const copyVotes = [...votes];
        copyVotes[selected] += 1;
        setVotes([...copyVotes]);
    }

    return (
        <>
            <div>
                <h1>anecdotes</h1>
                <p>{anecdotes[selected]}</p>
                <p>has {votes[selected]} votes</p>
            </div>
            <button onClick={vote}>vote</button>
            <button onClick={random}>random anecdote</button>
            <MostVoted votes={votes} anecdotes={anecdotes} />
        </>
    );
}

function MostVoted({ votes, anecdotes }) {
    const highestVote = votes.indexOf(Math.max(...votes));
    if (highestVote === 0) {
        return (
            <div>
                <h1>Most voted anecdote</h1>
                <p>no anecdote has votes yet</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Most voted anecdote</h1>
            <p>{anecdotes[highestVote]}</p>
            <p>has {Math.max(...votes)}</p>
        </div>
    );
}

export default App;
