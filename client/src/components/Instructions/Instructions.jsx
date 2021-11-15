import React, { useState } from 'react';
import commonStyles from "../common.module.css";
import styles from "./Instructions.module.css";
const Instructions = ({goNextSection, user, makeRequest}) => {
    return (
        <div className={commonStyles.container}>
            <h1>Instructions</h1>
            <form className={styles.formSection} action="/" method="POST">
                <input className={commonStyles.nextButton} type="button" value="Next >" onClick={() => {
                    const form = document.body.querySelector(
                        `form`
                    );
                    if (form?.checkValidity()) {
                        // makeRequest('questionnaire', data);
                        goNextSection();
                    } else {
                        form?.reportValidity()
                    }
                }} />
            </form>
        </div>
    );
}

export default Instructions
