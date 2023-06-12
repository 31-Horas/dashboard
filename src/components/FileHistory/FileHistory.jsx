import React from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { IconButton, colors } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Tooltip from "@mui/material/Tooltip";

let prevFiles = ["dummyfile1", "dummyfile2"];

const getExistingFiles = async () => {
    try {
        const response = await axios.get("http://otterboard.me:5000/bucket/get_data", { withCredentials: true } );
        const files = response.data;
        prevFiles = files;
    } catch(error) {
        console.error("Eror fetching existing files", error);
    }
}

function deleteFile(file){
    console.log("delete files no ha sido implementada en frontend", file);
    const idxFile = prevFiles.indexOf(file);
    delete prevFiles[idxFile];
    console.log(prevFiles);
}

const FileHistory = ({ openState, effect }) => {
    React.useEffect(() => {
        getExistingFiles();
    })

    const [open, setOpen] = useState(openState);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if(effect){
            effect(false);
        }
    };

    return (
        <Dialog 
            onClose={handleClose} 
            open={open}
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
        >
        <DialogTitle>Files</DialogTitle>
        <List sx={{ pt: 0 }}>
            {prevFiles.map((file) => (
            <ListItem disableGutters>
                <ListItemText>
                    <Typography variant="body" marginLeft={2}>
                        {file}
                    </Typography>
                </ListItemText>
                <Tooltip title="delete file">
                    <IconButton onClick={() => {deleteFile(file); handleClose()}} sx={{color: "red"}}>
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </ListItem>
            ))}
        </List>
        </Dialog>
    );
};

export default FileHistory;