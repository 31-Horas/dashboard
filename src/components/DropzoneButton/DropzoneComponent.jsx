import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './Dropzone.css';
import { useNavigate, useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

const DropzoneComponent = ({ onHandle }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  async function handleDrop(acceptedFiles) {
    const droppedFile = acceptedFiles[0];

    try {
      const formData = new FormData();
      formData.append('file', droppedFile);
      formData.append('filename', droppedFile.name);

      // Check if the file has a CSV or XLSX extension
      if (
        !droppedFile.name.toLowerCase().endsWith('.csv') &&
        !droppedFile.name.toLowerCase().endsWith('.xlsx')
      ) {
        console.log('Only CSV and XLSX files are allowed!');
        return;
      }

      // Send the file using Axios
      const response = await axios.post(
        'http://otterboard.me:5000/bucket/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true, // Enable sending and receiving cookies
        }
      );

      // Handle the response from the backend
      if (response.status === 200) {
        setResponse(response.data.message);
        setShowMessage(false);
        console.log(response.data.message);
        navigate(`/dashboard?id=${response.data.id}`)
      }
    } catch (error) {
      console.log('Error occurred during file upload', error);
    }

    setFile(droppedFile);
    onHandle(droppedFile);
  }

  useEffect(() => {
    let timeoutId;
    if (!showMessage) {
      timeoutId = setTimeout(() => {
        setShowMessage(true);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMessage]);

  return (
    <Dropzone
      className="cta-button"
      onDrop={handleDrop}
      accept=".csv, .xlsx" // Accept both CSV and XLSX files
      onDropRejected={handleDrop}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="cta-button">
            {file && response ? (
              <Typography variant="h6">{response.data}</Typography>
            ) : (
              showMessage && (
                <Typography variant="h6">
                  Drag and drop a CSV or XLSX file here, or click to select a file
                </Typography>
              )
            )}
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default DropzoneComponent;
