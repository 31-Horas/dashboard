import React, { useEffect, useState } from "react";
import axios from 'axios'
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
import "./ListFiles.css";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
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
          {Array.isArray(value) ? (
            value.map((file) => (
              <FormControlLabel
                value={file}
                key={file}
                control={<Radio />}
                label={file}
              />
            ))
          ) : (
            <Typography>No files found</Typography>
          )}
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
  value: PropTypes.array.isRequired,
};

const ListFile = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  
  useEffect(() => {
    getExistingFiles();
  }, []);
  
  const getExistingFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bucket/get_data", { withCredentials: true });
      const files = response.data; // Assuming the response contains the file names
  
      setValue(files);
    } catch (error) {
      console.error("Error fetching existing files:", error);
    }
  };

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
            aria-haspopup="true"
            aria-controls="files-menu"
            aria-label="phone ringtone"
            onClick={handleClickListItem}
          >
            <ListItemText secondary={value.length > 0 ? value[0] : 'no file selected'}>
              <Typography variant="h6">
                Previous files
              </Typography>
            </ListItemText>
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