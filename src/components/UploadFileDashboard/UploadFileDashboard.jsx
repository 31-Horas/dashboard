import { Typography } from "@mui/material";
import React from "react";
import DropzoneComponent from "../DropzoneButton/DropzoneComponent";
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const UploadFileDashboard = ({openState, effect}) => {
    const [open, setOpen] = useState(openState);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (effect && typeof effect.func === "function") {
            effect.func(false);
        }
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Upload a new file
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {/* <Typography>
                            Upload a new file
                        </Typography> */}
                        <DropzoneComponent/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UploadFileDashboard;
