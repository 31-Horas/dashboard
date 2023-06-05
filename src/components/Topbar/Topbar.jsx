import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, IconButton, Toolbar, Typography, Box, Menu, Tooltip } from "@mui/material";
import { AdbOutlined } from "@mui/icons-material";
import { MenuItem } from "react-pro-sidebar";

const Topbar = () => {

    function LogOutFunction(){
        console.log("need to implement logout function");
    };

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: "flex", flexDirection:'space-between', flexGrow: 3 }}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        OTTERBOARD
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="logout">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleIcon/>
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
                                <Typography textAlign="center">logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Topbar;