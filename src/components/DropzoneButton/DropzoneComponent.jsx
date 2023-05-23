import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './Dropzone.css';


const DropzoneComponent = ({ onHandle }) => {
    const [file, setFile] = useState(null);
  
    async function handleDrop(acceptedFiles) {
      const droppedFile = acceptedFiles[0];
  
      try {
        const formData = new FormData();
        formData.append('file', droppedFile);
  
        // Send the file using Axios
        const response = await axios.post('http://localhost:5000/bucket/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Handle the response from the backend
        if (response.status === 200) {
          // File was successfully uploaded
          console.log('File uploaded successfully');
        } else {
          // File upload failed
          console.log('File upload failed');
        }
      } catch (error) {
        console.log('Error occurred during file upload', error);
      }
  
      setFile(droppedFile);
      onHandle(droppedFile);
    }
  
    return (
      <Dropzone 
          className="cta-button"
          onDrop={handleDrop}
          accept=".csv"
          onDropRejected={handleDrop}
      >
          {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {file ? (
                      <p>File name: {file.name}</p>
                  ) : (
                      <div className="cta-button">Drag and drop a CSV file here, or click to select a CSV file</div>
                  )}
              </div>
          )}
      </Dropzone>
    );
  };
  
  export default DropzoneComponent;