import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import myImage from './assets/picture.jpeg';

function App () {

    const [ state ] = useState({
        name: 'Sumapriya',
        description: "My name is Sumapriya Mandapati, I am doing my Masters of Science in Computer Science department. I am interested in data science, web development and learning new technologies to enhance my knowledge. I have worked in TCS for 2 years as a Systems Engineer. I love cooking new vegetarian cuisines and listening to music.",
        githubLink: "https://github.com/sumapriyamandapati/assignment1.git"
    })

    useEffect(() => {

    }, [])

    function openUrl() {
        window.open(state.githubLink)
    }

    return (
        <div className={"app"}>
            <h1 className={"my-name"}> {state.name} </h1>
            <div className={"my-image"}>
                <img alt={"my image"} src={myImage} width={200} height={200}/>
            </div>
            <div className={"description"} >
                <p>{state.description || ""}</p>
            </div>
            <div className={"repo-link"}>
                <button onClick={() => openUrl()}>View my Github repo </button>
            </div>
        </div>
    )
}

export default hot(module)(App);
