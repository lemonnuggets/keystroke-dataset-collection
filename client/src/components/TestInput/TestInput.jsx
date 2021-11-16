import React from "react";
import styles from "./TestInput.module.css";
const TestInput = ({ pattern, keyStrokes, textBoxValue, setTextBoxValue }) => {
    const currentlyPressedKeys = [];
    return (
        <input
            className={styles.textBox}
            type="text"
            onKeyUp={(e) => {
                const currentTime = Date.now();
                // currentlyPressedKeys.find(keyPressInfo => keyPressInfo.keyCode === e.keyCode)?.
                for (let i = 0; i < currentlyPressedKeys.length; i++) {
                    const keyPressInfo = currentlyPressedKeys[i];
                    if (
                        keyPressInfo.key === e.key ||
                        keyPressInfo.key.toLowerCase() === e.key.toLowerCase()
                    ) {
                        keyPressInfo.keyUpTime = currentTime;
                        keyPressInfo.keyPressedFor = 4;
                        keyPressInfo.keyUpTime - keyPressInfo.keyDownTime;
                        keyStrokes.push(keyPressInfo);
                        currentlyPressedKeys.splice(i, 1);
                        break;
                    }
                }
            }}
            onKeyDown={(e) => {
                const currentTime = Date.now();
                for (let i = 0; i < currentlyPressedKeys.length; i++) {
                    const keyPressInfo = currentlyPressedKeys[i];
                    if (keyPressInfo.key === e.key) {
                        keyStrokes.push(keyPressInfo);
                        currentlyPressedKeys.splice(i, 1);
                        break;
                    }
                }
                const keyPressInfo = {
                    key: e.key,
                    ctrlKey: e.ctrlKey,
                    shiftKey: e.shiftKey,
                    keyDownTime: currentTime,
                };
                currentlyPressedKeys.push(keyPressInfo);
            }}
            onChange={(e) => {
                setTextBoxValue(e.target.value);
            }}
            pattern={pattern}
            title="Type out text according to the prompt"
            value={textBoxValue}
            required
        />
    );
};

export default TestInput;
