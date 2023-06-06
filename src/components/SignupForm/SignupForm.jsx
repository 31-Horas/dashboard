import { React, useState } from "react";
import './SignupForm.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Paper from '@mui/material/Paper';

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
      
        const response = await axios.post('http://localhost:5000/auth/signup', { email: email, password: password }, { withCredentials: true });
      

        // Handle the response from the backend
        if (response.status === 202) {
          // Navigates to dashboard
          navigate("/");
          console.log(response.data);
        } 
        else if (response.status === 201) {
          navigate("/");
          console.log(response.data);
        }
        else {
          // Signup failed
          console.log(response.data);
        }
      };

    return (
        <div className="background-signup" >
        <Paper className="paper-signup" elevation={24} sx={{backgroundColor: "#52AD9C"}}>
            <div className="login-form">
                <Box className="logos">
                    <div className="logo-signup"></div>
                </Box>
                <Typography variant="h4" margin={10}>
                    Join the OTTERBOARD family!
                </Typography>
                <Typography variant="h5">
                    Sign up
                </Typography>
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
                    <div className="signup-button">
                        <Button 
                            className="signup-button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleSubmit}
                            sx={{":hover": {backgroundColor: "#9FFCDF"}}}
                        >
                            Sign-up
                        </Button>
                    </div>
                </form>
            </div>
        </Paper>
        </div>

       
    );

};

export default SignupForm;