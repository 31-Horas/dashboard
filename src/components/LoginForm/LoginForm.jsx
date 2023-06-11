import { useState } from "react";
import './LoginForm.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button, FormGroup, Box, Typography } from "@mui/material";
import { useAsyncError, useNavigate } from "react-router-dom";
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Popup from "../Popup/Popup";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    // POPUP FUNCTIONALITY
    const title = "Incorrect credentials";
    const popupText = "Email and / or password incorrect.";
    const agreeOption = "okay";
    const disagreeOption = "close"

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckBoxChange = (event) => {
        setRememberMe(event.target.checked);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
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
                setOpen(true);
            }
        } catch (error) {
            console.error("Connection error", error);
        }
    };


    return (
        <div className="login-form">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {popupText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>{disagreeOption}</Button> */}
                    <Button onClick={handleClose} autoFocus>
                        {agreeOption}
                    </Button>
                </DialogActions>
            </Dialog>

            <div className="logo-login"></div>
            <Typography variant="h4">
                Welcome to OtterBoard!
            </Typography>
            <form onSubmit={handleSubmit}>
                {/* mail input/error */}
                <div className="input-container">
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
                
                <Box className="belowFields">
                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={rememberMe} onChange={handleCheckBoxChange} />} label="Remember me" />
                        </FormGroup>
                    </div>
                    <div className="forgot-password">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <Typography variant="h8">
                                Forgot your password?
                            </Typography>
                        </a>
                    </div>
                </Box>
                
                {/* Login button */}
                <div className="login-button">
                    <Button 
                        className="login-button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                        sx={{":hover": {backgroundColor: "#9FFCDF"}}}
                    >
                        Login
                    </Button>
                </div>
            </form>
            <div className="bottom">
                <a className="sign-up" href="/signup">
                    <Typography variant="h6" mb={1}>
                        Sign-up
                    </Typography>
                </a>
            </div>
        </div>
    );
}

export default LoginForm;