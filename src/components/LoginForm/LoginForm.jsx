import { useState } from "react";
import './LoginForm.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/welcome');
        // Handle form submission logic here
    };

    return (
        <div className="login-form">
            <div className="logo"></div>
            <h1>Welcome to OtterBoard!</h1>
            <form onSubmit={handleSubmit}>
                {/* Mail input */}
                <div className="input-container">
                    <TextField
                        className='input-container'
                        fullWidth
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
                </div>
                {/* Password input */}
                <div className="input-container">
                    <TextField
                        fullWidth
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
                </div>

                <div className="forgot-password">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot your password?</a>
                </div>
                
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
            <div className="google-button">
                <Button 
                    variant="outlined" 
                    color="primary"
                    size="medium"
                    startIcon={<GoogleIcon />}
                >
                    Sign in with Google
                </Button>
            </div>
            <div className="bottom">
                <a className="sign-up" href="https://www.chess.com/login">Sign up</a>
            </div>
        </div>
    );
}

export default LoginForm;

