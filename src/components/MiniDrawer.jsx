import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from './Grid/Grid.jsx';
import { Avatar, Tooltip, Menu, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LogoutOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import UploadFileDashboard from './UploadFileDashboard/UploadFileDashboard.jsx';
import FileHistory from './FileHistory/FileHistory.jsx'
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DropzoneComponent from './DropzoneButton/DropzoneComponent.jsx';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


//FILE HISTORY FUNCTIONALITY
let prevFiles = ["dummyfile1", "dummyfile2"];

const getExistingFiles = async () => {
  try {
      const response = await axios.get("http://localhost:5000/bucket/get_data", { withCredentials: true });
      const files = response.data; // Store the entire file objects (name and ID)
      prevFiles = files;
  } catch (error) {
      console.error("Error fetching existing files", error);
  }
}

function deleteFile(file) {
  try {
      const response = axios.delete(`http://localhost:5000/bucket/delete/${file[1]}`, { withCredentials: true });
      const result = response.data; // Assuming the response contains the deletion result
      console.log(result); // Optional: Log the deletion result
      // Perform any necessary actions after successful deletion
  } catch (error) {
      console.error("Error deleting file:", error);
      // Handle the error appropriately
  }
};


const MiniDrawer = () => {

  //File history functionality
  React.useEffect(() => {
    getExistingFiles();
  })

  const [openFileHistory, setOpenFileHistory] = useState(false);

  const handleClickOpenFileHistory = () => {
    setOpenFileHistory(true);
  };

  const handleCloseFileHistory = () => {
    setOpenFileHistory(false);
  };

  //Upload file functionality
  const [openUploadFile, setOpenUploadFile] = useState(false);

  const handleClickOpenUploadFile = () => {
    setOpenUploadFile(true);
  };

  const handleCloseUploadFile = () => {
    setOpenUploadFile(false);
  };

  // const [uploadFile, setUploadFile] = React.useState(false);

  // const setUploadFileInChild = (value) => {
  //   setUploadFile(value);
  //   console.log(uploadFile);
  // }

  // const [fileHistory, setFileHistory] = React.useState(false);

  // const setFileHistoryInChild = (value) => {
  //   setFileHistory(value);
  //   console.log(fileHistory);
  // }

  //need it for logout
  const navigate = useNavigate();
  async function LogOutFunction() {
    try {
      const response = await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
        
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

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>

      {/* FILE HISTORY POPUP JSX */}
      <Dialog 
        onClose={handleCloseFileHistory} 
        open={openFileHistory}
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
      >
        <DialogTitle>Files</DialogTitle>
        <List sx={{ pt: 0 }}>
          {prevFiles.map((file) => (
            <ListItem disableGutters>
              <ListItemText>
                <Typography variant="body" marginLeft={2}>
                  {file[0]}
                </Typography>
              </ListItemText>
              <Tooltip title="delete file">
                <IconButton onClick={() => {deleteFile(file); handleCloseFileHistory()}} sx={{color: "red"}}>
                  <DeleteOutlineOutlinedIcon/>
                </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Dialog>

      {/* UPLOAD FILE JSX */}
      <Dialog
        open={openUploadFile}
        onClose={handleCloseUploadFile}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Upload a new file
        </DialogTitle>
        <DialogContent>
          <DropzoneComponent/>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleCloseUploadFile} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <CssBaseline />
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
            <MenuIcon />
          </IconButton>
          <Avatar alt="OTTERBOARD" src="otter.jpg" sx={{marginLeft: 0, marginRight: 2}}/>
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* dashboard */}
          <ListItem disablePadding sx={{display: 'block'}}>
            <ListItemButton 
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SpaceDashboardOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }}/>
            </ListItemButton>
          </ListItem>
          {/* file history */}
          <ListItem disablePadding sx={{display: 'block'}}>
            <ListItemButton 
              onClick={handleClickOpenFileHistory}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FolderOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='File History' sx={{ opacity: open ? 1 : 0 }}/>
            </ListItemButton>
          </ListItem>
          {/* upload new file */}
          <ListItem disablePadding sx={{display: 'block'}}>
            <ListItemButton 
              onClick={handleClickOpenUploadFile}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FileUploadOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Upload new file' sx={{ opacity: open ? 1 : 0 }}/>
            </ListItemButton>
          </ListItem>
          {/* Profile */}
          {/* <ListItem disablePadding sx={{display: 'block'}}>
            <ListItemButton 
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountCircleOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }}/>
            </ListItemButton>
          </ListItem> */}
          
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {/*GRID LAYOUT*/}
        <Grid />
      </Box>
    </Box>
  );
}

export default MiniDrawer;