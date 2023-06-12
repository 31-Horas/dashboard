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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Tooltip from "@mui/material/Tooltip";
import './PrevFiles.css';
import { useNavigate } from 'react-router-dom';


let prevFiles = ["dummyfile1", "dummyfile2"];

const getExistingFiles = async () => {
    try {
        const response = await axios.get("http://otterboard.me:5000/bucket/get_data", { withCredentials: true });
        const files = response.data; // Store the entire file objects (name and ID)
        prevFiles = files;
    } catch (error) {
        console.error("Error fetching existing files", error);
    }
}

async function deleteFile(file) {
    try {
      const response = await axios.delete(
        `http://otterboard.me:5000/bucket/delete/${file[1]}`,
        { withCredentials: true }
      );
      const result = response.data; // Assuming the response contains the deletion result
      console.log(`File ${file[0]} deleted successfully`); // Optional: Log the deletion result
      // Update the prevFiles array by removing the deleted file
      prevFiles = prevFiles.filter((prevFile) => prevFile[1] !== file[1]);
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error("Error deleting file:", error);
      // Handle the error appropriately
    }
  }

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const navigate = useNavigate();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
      };      

      const handleListItemClick = async (file) => {
        try {
          navigate(`/dashboard${file[1]}`)
        } catch (error) {
          console.error();
          // Handle the error appropriately
        }
      };      

    useEffect(() => {
        getExistingFiles();
    }, []);

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
            <ListItem disableGutters key={file}>
                <ListItemButton onClick={() => handleListItemClick(file)}>
                <ListItemText primary={file[0]} />
                </ListItemButton>
                <Tooltip title="delete file">
                    <IconButton onClick={() => { deleteFile(file); handleClose() }} sx={{ color: "red" }}>
                        <DeleteOutlineOutlinedIcon />
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
  selectedValue: PropTypes.array.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (file) => {
    setOpen(false);
    setSelectedValue(file);
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
                sx={{ ":hover": { backgroundColor: "#9FFCDF" } }}
            >
                <ListItem
                    aria-haspopup="true"
                    aria-controls="files-menu"
                    aria-label="files menu"
                    // onClick={handleClickListItem}
                >
                    <ListItemText secondary={selectedValue[0]}>
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
