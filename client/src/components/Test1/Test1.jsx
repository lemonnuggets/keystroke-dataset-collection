import React, { useState } from "react";
import commonStyles from "../common.module.css";
import styles from "./Test1.module.css";
import TestInput from "../TestInput/TestInput";
const Test1 = ({ goNextSection, user, makeRequest }) => {
    const keyStrokes = [];
    const [numIterations, setNumIterations] = useState(1);
    const [textBoxValue, setTextBoxValue] = useState("");
    const decrementNumIterations = () => {
        setNumIterations((prevNumIterations) => prevNumIterations - 1);
    };
    return (
        <div className={commonStyles.container}>
            <h1>Test1</h1>
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
                    Prompt: <strong>.tie5Roanl</strong>
                </div>
            </div>
            <form className={styles.formSection}
                onSubmit={(e) => {
                        e.preventDefault()
                        const form = document.body.querySelector(`form`);
                        if (form?.checkValidity()) {
                            setTextBoxValue("");
                            makeRequest("test1", user, keyStrokes);
                            if (numIterations > 0) decrementNumIterations();
                            else goNextSection();
                        } else {
                            form?.reportValidity();
                        }
                    }}>
                <TestInput
                    pattern="\.tie5Roanl"
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
};

export default Test1;
