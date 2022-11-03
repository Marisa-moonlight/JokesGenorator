import React, { useState, useEffect } from 'react';

const Jokes = () => {
    const [ joke, setJoke ] = useState('');

    useEffect (() => {
        getJoke()
    }, []);

    const getJoke = () => {

        let url = "https://api.chucknorris.io/jokes/random";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // let dataJokes = data.jokes;
            // let randomNum = Math.floor(Math.random() * dataJokes.length);
            // let randomJoke = dataJokes[randomNum];

            setJoke(data);
        })
    }

    const handleClick = () => {
        getJoke();
    }

    return (
        <div id="joke-box">
            <div id='text'><p>{joke.value}</p></div>

            <button onClick={handleClick} id="new-joke">New joke</button>
        </div>
    )
}

export default Jokes;