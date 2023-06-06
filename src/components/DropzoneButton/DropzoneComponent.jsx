import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './Dropzone.css';
import { useNavigate } from 'react-router-dom';


const DropzoneComponent = ({ onHandle }) => {
    const navigate = useNavigate(); 

    const [file, setFile] = useState(null);
  
    async function handleDrop(acceptedFiles) {
      const droppedFile = acceptedFiles[0];
  
      try {
        const formData = new FormData();
        formData.append('file', droppedFile);
        formData.append('filename', droppedFile.name);
  
        // Send the file using Axios
        const response = await axios.post('http://localhost:5000/bucket/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true // Enable sending and receiving cookies
        });
  
        // Handle the response from the backend
        if (response.status === 200) {
          //navigates to dashboard
          navigate("/dashboard")
          // File was successfully uploaded
          console.log(response.data);
        } else {
          // File upload failed
          console.log(response.data);
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