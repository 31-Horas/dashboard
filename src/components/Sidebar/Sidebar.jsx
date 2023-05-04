import React, { useState } from "react";
import "./Sidebar.css";
import { IconButton, AppBar, Typography, Toolbar, Drawer } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { ProSidebar } from "react-pro-sidebar";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* <Drawer variant="permanent" open={"open"}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftOutlinedIcon/>
                    {theme.direction === 'rtl' ? <ChevronRightRounded /> : <ChevronLeftOutlinedIcon />}
                </IconButton>
            </Drawer> */}

            <div>
                <ProSidebar>
                    <h1>
                        Hola prosidebar
                    </h1>
                </ProSidebar>
            </div>
      </div>
    // <div className={`sidebar ${expanded ? "expanded" : ""}`}>
    //   <div className="sidebar-header">
    //     <IconButton></IconButton>
    //     <button onClick={handleExpand}>
    //       {expanded ? "Close" : "Expand"}
    //     </button>
    //   </div>
    //   <div className="sidebar-body">
    //     <ul>
    //       <li>
    //         <button>Button 1</button>
    //       </li>
    //       <li>
    //         <button>Button 2</button>
    //       </li>
    //       <li>
    //         <button>Button 3</button>
    //       </li>
    //       <li>
    //         <button>Button 4</button>
    //       </li>
    //       <li>
    //         <button>Button 5</button>
    //       </li>
    //       <li>
    //         <button>Button 6</button>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Sidebar;
