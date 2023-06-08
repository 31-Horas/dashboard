import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { AppBar, IconButton, Toolbar, Typography, Box, Menu, Tooltip, Icon, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import axios from "axios";
import { LogoutOutlined } from "@mui/icons-material";

const Topbar = () => {
    const navigate = useNavigate();
    async function LogOutFunction() {
        try {
          const response = await axios.get('http://otterboard.me:5000/auth/logout', { withCredentials: true });
      
          if (response.status === 200) {
            navigate("/");
            console.log(response.data);
            return true;}
        } catch (error) {
          // Handle any errors that occur during the request
          console.error('Error checking login status:', error);
        }
      }

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: "flex", flexDirection:'space-between', flexGrow: 1 }}>
            <AppBar>
                <Toolbar >
                    <Avatar alt="OTTERBOARD" src="otter.jpg" sx={{marginLeft: 2, marginRight: 2}}/>
                    <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                        OTTERBOARD
                    </Typography>
                    <Box>
                        <Tooltip title="logout">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleOutlinedIcon/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={LogOutFunction}>
                                <IconButton>
                                <LogoutOutlined/>
                                <Typography textAlign="center" variant="button">logout</Typography>
                                </IconButton>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Topbar;