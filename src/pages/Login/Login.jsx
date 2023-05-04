import React from 'react';
import './Login.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import Animation from '../../components/Animation/Animation';
import OtterAnimation from '../../components/OtterAnimation/OtterAnimation';

const Login = () => {
    return (
        <div className='split-screen'>
            <div className='left'>
                {/* <Animation/> */}
                <OtterAnimation/>
            </div>
            <div className='right'>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;
