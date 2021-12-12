import React, { useState, useEffect } from 'react';
import commonStyles from "../common.module.css";
import styles from "./Test2.module.css";
import TestInput from "../TestInput/TestInput";
const Test2 = ({goNextSection, user, makeRequest}) => {
    const quotes = [
        "To be or not to be, that is the question",
        "I have always wished that I had a computer in my pocket",
        "I'm not anti-social; I'm just not user friendly",
        "I'm not superstitious; I am just a little stitious",
    ]
    let index = 0;
    const keyStrokes = [];
    const [numIterations, setNumIterations] = useState(5);
    const [textBoxValue, setTextBoxValue] = useState("");
    const decrementNumIterations = () => {
        setNumIterations((prevNumIterations) => prevNumIterations - 1);
    };
    useEffect(() => {
        index = Math.floor(Math.random() * quotes.length);
    }, [])
    return (
        <div className={commonStyles.container}>
            <h1>Test2</h1>
            <div className={styles.instructionsSection}>
                <h3>Instructions</h3>
                <ul>
                    <li>Type out the prompt text in the text box.</li>
                    <li>Make sure you're seated comfortably.</li>
                    <li>Do not rush yourself and type at your normal pace.</li>
                </ul>
            </div>
            <div className={styles.testSection}>
                <div>
                    Number of times you have to enter the prompt:{" "}
                    {numIterations}
                </div>
                <div className={styles.prompt}>
                    Prompt: <strong>{quotes[index]}</strong>
                </div>
            </div>
            <form className={styles.formSection}
                onSubmit={(e) => {
                        e.preventDefault()
                        const form = document.body.querySelector(`form`);
                        if (form?.checkValidity()) {
                            setTextBoxValue("");
                            makeRequest("test2", user, keyStrokes);
                            if (numIterations > 0) decrementNumIterations();
                            else goNextSection();
                        } else {
                            form?.reportValidity();
                        }
                    }}>
                <TestInput
                    pattern={quotes[index]}
                    keyStrokes={keyStrokes}
                    textBoxValue={textBoxValue}
                    setTextBoxValue={setTextBoxValue}
                ></TestInput>
                <input
                    className={commonStyles.nextButton}
                    type="submit"
                    value="Next >"
                />
            </form>
        </div>
    );
}

export default Test2