import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";
import "./ListFiles.css"

const existingFiles = [
    'dummy file 1',
    'dummy file 2'
];

const getExistingFiles = async () => {
    //get the files from the bucket
    //get the name to show it to the user
    //get something that indicates which file the backend must analyze the data from
    //fill existingFiles array with the files from bucket
};

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
  
    useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);
  
    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };
  
    const handleCancel = () => {
        onClose();
    };
  
    const handleOk = () => {
        onClose(value);
    };
  
    const handleChange = (event) => {
        setValue(event.target.value);
    };
  
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Files</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="files"
                    name="files"
                    value={value}
                    onChange={handleChange}
                >
                    {existingFiles.map((file) => (
                    <FormControlLabel
                        value={file}
                        key={file}
                        control={<Radio />}
                        label={file}
                    />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Choose</Button>
            </DialogActions>
      </Dialog>
    );
  }
  
ConfirmationDialogRaw.propTypes = {    
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};
  
const ListFile = (props) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('no file selected');
  
    const handleClickListItem = () => {
        setOpen(true);
    };
  
    const handleClose = (newValue) => {
        setOpen(false);
  
        if (newValue) {
            setValue(newValue);
        }
        props.func(value);
    };

  
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="div" role="group">
                <Button 
                    className="files-button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{":hover": {backgroundColor: "#9FFCDF"}}}
                >
                    <ListItem
                        // divider
                        aria-haspopup="true"
                        aria-controls="files-menu"
                        aria-label="phone ringtone"
                        onClick={handleClickListItem}
                    >
                        <ListItemText secondary={value}>
                            <Typography variant="h6">
                                Previous files
                            </Typography>
                        </ListItemText>
                        {/* <ListItemText primary="Previous files" variant="h6" secondary={value} /> */}
                    </ListItem>
                </Button>
                <ConfirmationDialogRaw
                    id="files-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
            </List>
        </Box>
    );
  }

export default ListFile;