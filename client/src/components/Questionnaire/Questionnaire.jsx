import React, { useState } from "react";
import commonStyles from "../common.module.css";
import styles from "./Questionnaire.module.css";
const Questionnaire = ({ goNextSection, user, makeRequest }) => {
    const mcq = [
        {
            questionID: "gender",
            label: "Gender?",
            options: ["Male", "Female", "Other"],
        },
        {
            questionID: "touchTyping",
            label: "Do you look at the keyboard while typing?",
            options: ["Yes", "No"],
        },
        {
            questionID: "hoursWithComputer",
            label: "How many hours do you use your computer/day?",
            options: [
                "less than 1 hour",
                "1 - 2 hours",
                "2 - 3 hours",
                "3 - 4 hours",
                "4 - 5 hours",
                "5 - 6 hours",
                "6 - 7 hours",
                "7 - 8 hours",
                "more than 8 hours",
            ],
        },
        {
            questionID: "hoursWithSmartphone",
            label: "How many hours do you use your phone/day?",
            options: [
                "less than 1 hour",
                "1 - 2 hours",
                "2 - 3 hours",
                "3 - 4 hours",
                "4 - 5 hours",
                "5 - 6 hours",
                "6 - 7 hours",
                "7 - 8 hours",
                "more than 8 hours",
            ],
        },
        {
            questionID: "gaming",
            label: "Do you regularly play video games? (at least 1 day/week)",
            options: [
                "No",
                "Yes, on my smartphone",
                "Yes, on my computer",
                "Yes, on both smartphone and computer",
            ],
        },
    ];
    const freeQuestions = [
        {
            questionID: "age",
            label: "Age",
            type: "number",
            min: 0,
            max: 100,
        },
        {
            questionID: "height",
            label: "Height (in cm)",
            type: "number",
            min: 100,
            max: 250,
        },
        {
            questionID: "weight",
            label: "Weight (in kg)",
            type: "number",
            min: 30,
            max: 250,
        },
        {
            questionID: "sports",
            label: "Name any physical sports you play frequently (use ',' to separate sports & use '-' in case no sports)",
            type: "text",
        },
    ];
    return (
        <div className={commonStyles.container}>
            <h1>Questionnaire</h1>
            <form className={styles.formSection} action="/" method="POST">
                <ol className={styles.questionsSection}>
                    {mcq.map((question) => (
                        <li className={styles.questionSection} key={question.questionID}>
                            <label htmlFor={question.questionID}>
                                {question.label}
                            </label>
                            <select name={question.questionID}>
                                {question.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </li>
                    ))}
                    {freeQuestions.map((question) => (
                        <li className={styles.questionSection} key={question.questionID}>
                            <label htmlFor={question.questionID}>
                                {question.label}
                            </label>
                            <input type={question.type} min={question.min} max={question.max} name={question.questionID} required/>
                        </li>
                    ))}
                </ol>
                <input className={commonStyles.nextButton} type="button" value="Next >" onClick={() => {
                    const form = document.body.querySelector(
                        `form`
                    );
                    if (form?.checkValidity()) {
                        const data = {
                            ...mcq.reduce((acc, question) => {
                                console.log(question.questionID, document.querySelector(`[name=${question.questionID}]`)?.value);
                                return {
                                    ...acc,
                                    [question.questionID]: document.querySelector(`[name=${question.questionID}]`)?.value,
                                }
                            }, {}),
                            ...freeQuestions.reduce((acc, question) => {
                                console.log(question.questionID, document.querySelector(`[name=${question.questionID}]`)?.value);
                                return {
                                    ...acc,
                                    [question.questionID]: document.querySelector(`[name=${question.questionID}]`)?.value,
                                }
                            }, {}),
                        };
                        console.log(data);
                        makeRequest('questionnaire', user, data);
                        goNextSection();
                    } else {
                        form?.reportValidity()
                    }
                }} />
            </form>
        </div>
    );
};

export default Questionnaire;
