import React, { useState } from "react";
import commonStyles from "../common.module.css";
import styles from "./Login.module.css";
const Login = ({ goNextSection, setUser, makeRequest }) => {
    const authenticate = (username, password) => {
        return true;
    };
    const [authenticationError, setAuthenticationError] = useState(false);
    return (
        <div className={commonStyles.container}>
            <h1>Login</h1>
            <div className={styles.instructionsSection}>
                <h3>Instructions</h3>
                <ul>
                    <li>
                        Entering a pre-existing username and password will
                        automatically sign you into your account.
                    </li>
                    <li>
                        Entering a new username and password will create a new
                        account.
                    </li>
                </ul>
            </div>
            {authenticationError && (
                <div className={styles.error}>
                    Username already exists but invalid password
                </div>
            )}
            <form className={styles.loginSection} action="/" method="POST">
                <div className={styles.formSection}>
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                    />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                    />
                </div>
                <input
                    type="button"
                    value="Login"
                    onClick={() => {
                        const loginForm = document.body.querySelector(
                            `.${styles.loginSection}`
                        );
                        if (loginForm.checkValidity()) {
                            const formData = new FormData(loginForm);
                            const username = formData.get("username");
                            const password = formData.get("password");
                            if (authenticate(username, password)) {
                                setUser(username);
                                makeRequest('login', { username, password });
                                goNextSection();
                            } else {
                                setAuthenticationError(true);
                            }
                        } else {
                            loginForm.reportValidity();
                        }
                    }}
                />
            </form>
        </div>
    );
};

export default Login;
