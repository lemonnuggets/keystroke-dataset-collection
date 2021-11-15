import React, { useState } from 'react';
import commonStyles from "../common.module.css";
import styles from "./Test2.module.css";
const Test2 = ({goNextSection, user, makeRequest}) => {
    return (
        <div className={commonStyles.container}>
            <h1>Test2</h1>
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

export default Test2