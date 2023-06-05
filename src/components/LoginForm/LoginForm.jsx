import { useState } from "react";
import './LoginForm.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button, FormGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

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

    const handleCheckBoxChange = (event) => {
        setRememberMe(event.target.checked);
    }

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
      
        const response = await axios.post('http://localhost:5000/auth/signin', {
            email: email,
            password: password,
            remember: rememberMe
        }, {
            withCredentials: true // Enable sending and receiving cookies
        });

            // Handle the response from the backend
        if (response.status === 200) {
            //navigates to dashboard
            navigate("/welcome");
            // File was successfully uploaded
            console.log(response.data);
        } else if (response.status === 401) {
            // File upload failed
            console.log(response.data);
        }
    };


    return (
        <div className="login-form">
            <div className="logo"></div>
            <h1>Welcome to OtterBoard!</h1>
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

                 
                {/* Password input */}
                
                <div className="input-container">
                    <TextField
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
                </div>
                
                <Box display="flex">
                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={rememberMe} onChange={handleCheckBoxChange} />} label="Remember me" />
                        </FormGroup>
                    </div>
                    <div className="forgot-password">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot your password?</a>
                    </div>
                </Box>
                
                {/* Login button */}
                <div className="login-button">
                    <Button 
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>
            </form>
            <div className="bottom">
                <a className="sign-up" href="/signup">Sign up</a>
            </div>
        </div>
    );
}

export default LoginForm;