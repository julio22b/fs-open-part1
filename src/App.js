import React from 'react';
import './App.css';

function Header(props) {
    return <h1>{props.course.name}</h1>;
}

function Content(props) {
    return (
        <>
            {props.course.parts.map((part) => (
                <Part part={part.name} exercises={part.exercises} />
            ))}
        </>
    );
}

function Part(props) {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    );
}

function Total(props) {
    return (
        <p>
            Number of exercises{' '}
            {props.course.parts.reduce((acc, curr) => {
                return (acc += curr.exercises);
            }, 0)}
        </p>
    );
}

function App() {
    const course = {
        name: 'half stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
}

export default App;
