import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="welcome-text">
                <h2>Welcome!</h2>
                <p>Please enter your login details to continue.</p>
            </div>
            <form className="login-form">
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                </div>
                <button className="login-btn">Login</button>
                <button className="login-google-btn">Login with Google</button>
            </form>
        </div>
    );
};

export default LoginForm;
