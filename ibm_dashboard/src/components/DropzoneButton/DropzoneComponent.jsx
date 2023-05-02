import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './Dropzone.css'

const DropzoneComponent = ({ onDrop }) => {
    onDrop = { handleDrop }
    const [file, setFile] = useState(null);

    function handleDrop(acceptedFiles, rejectedFiles) {
        if (rejectedFiles.length > 0) {
            window.alert('Only Excel files are allowed.');
            <div className='dropzone.reject'></div>
        } else {
            setFile(acceptedFiles[0]);
            onDrop(acceptedFiles[0]);
            <div className='dropzone.accept'></div>
        }
    }

    return (
        <Dropzone 
            className="cta-button"
            onDrop={handleDrop}
            accept={{ '.xlsx, .xls': 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }}
            onDropRejected={handleDrop}
        >
            {({ getRootProps, getInputProps }) => (
                <div className="cta-button" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {file ? (
                        <p>File name: {file.name}</p>
                    ) : (
                        <p>Drag and drop an Excel file here, or click to select an Excel file</p>
                    )}
                </div>
            )}
        </Dropzone>
    );
}

export default DropzoneComponent;
