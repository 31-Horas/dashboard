import { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { ColorModeContext, tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                color: "#6870fa !important",
                },
            }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="10px"
                            >
                                <Typography variant="h5" color={colors.grey[100]}>
                                    DASHBOARD CONTROL
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                
                    {!isCollapsed && (
                        <Box display="flex" flexDirection="column">
                            {/* DOCUMENTS BUTTON */}
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton >
                                    <TopicOutlinedIcon/>
                                </IconButton>
                                <Typography>
                                    MANAGE FILES
                                </Typography>
                            </Box>

                            {/* EYE BUTTON */}
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton >
                                    <VisibilityOffOutlinedIcon/>
                                </IconButton>
                                <Typography>
                                    EYE BUTTON ESE
                                </Typography>
                            </Box>

                            {/* EYE BUTTON */}
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton >
                                    <DeleteOutlinedIcon/>
                                </IconButton>
                                <Typography>
                                    TRASH CAN
                                </Typography>
                            </Box>

                            {/* EDIT BUTTON */}
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton >
                                    <ModeOutlinedIcon/>
                                </IconButton>
                                <Typography>
                                    EDIT
                                </Typography>
                            </Box>

                            {/* THEME BUTTON */}
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === "dark" ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )}
                                </IconButton>
                                <Typography>
                                    THEME
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;