import * as React from 'react';
import PropTypes from 'prop-types';
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
import './PrevFiles.css'


let prevFiles = ["dummyfile1", "dummyfile2"];

const getExistingFiles = async () => {
    try {
        const response = await axios.get("http://localhost:5000/bucket/get_data", {withCredentials: true});
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

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    React.useEffect(() => {
        getExistingFiles();
    })

    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
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
                <ListItemButton onClick={() => handleListItemClick(file)} key={file}>
                <ListItemText primary={file} />
                </ListItemButton>
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
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("No file selected");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className='prev-files'>
        <List component="div" role="group">
            <Button     
                onClick={handleClickOpen}
                className="files-button"
                fullWidth
                variant="contained"
                color="primary"
                size="small"
                sx={{":hover": {backgroundColor: "#9FFCDF"}}}
            >
                <ListItem
                    aria-haspopup="true"
                    aria-controls="files-menu"
                    aria-label="files menu"
                    // onClick={handleClickListItem}
                >
                    <ListItemText secondary={selectedValue}>
                        <Typography variant="h6">
                            Previous files
                        </Typography>
                    </ListItemText>
                </ListItem>
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </List>
    </div>
  );
}