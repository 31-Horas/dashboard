import { React, useState } from "react";
import './SignupForm.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignupForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // Validate email and password
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 characters, one letter, and one number

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false); // Reset email error state on change
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

        if (!passwordRegex.test(password)) {
            setPasswordError(true);
        } else{
            setPasswordError(false); // Reset password error state on change
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailRegex.test(email)) {
            setEmailError(true);
            return; // Stop form submission if email is invalid
        }
 
        if (!passwordRegex.test(password)) {
            setPasswordError(true);
            return; // Stop form submission if password is invalid
        }
        const response = await axios.post('http://localhost:5000/auth/signup', { email: email, password: password });
        // Handle the response from the backend
        if (response.status === 201) {
            //navigates to dashboard
            navigate("/")
            // File was successfully uploaded
            console.log('Signup successful');
          } 
          if (response.status === 201){
            navigate("/")
            console.log('Email already exists');
          }
          else {
            // File upload failed
            console.log('Signup failed');
          }
    };

    return (
        <div className="login-form">
            <div className="logo"></div>
            <h1>Join the to OtterBoard family!</h1>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                {/* mail input/error */}
                <div className="input-container">
                    {emailError && (
                        <TextField
                            className='input-container'
                            fullWidth
                            autoFocus
                            error
                            helperText="not a valid email."
                            variant='outlined'
                            type='text'
                            label='Email'
                            size="small"
                            value={email}
                            onChange={handleEmailChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MailOutlinedIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    {!emailError && (
                        <TextField
                            className='input-container'
                            fullWidth
                            autoFocus
                            variant='outlined'
                            type='text'
                            label='Email'
                            size="small"
                            value={email}
                            onChange={handleEmailChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MailOutlinedIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </div>

                 
                {/* Password input/error */}
                
                <div className="input-container">
                    {passwordError && (
                        <TextField
                            fullWidth
                            autoFocus
                            error
                            helperText="Not a valid password. Must be at least 8 characters. Contain 1 number and an uppercase letter"
                            variant='outlined'
                            type={showPassword ? 'text' : 'password'}
                            label='Password'
                            size="small"
                            value={password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    {!passwordError && (
                        <TextField
                            autoFocus
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            label='Password'
                            size="small"
                            value={password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </div>
                
                {/* Sign up button */}
                <div className="login-button">
                    <Button 
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleSubmit}
                    >
                        Sign-up
                    </Button>
                </div>
            </form>
        </div>
    );

};

export default SignupForm;