import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './Dropzone.css'

const DropzoneComponent = () => {
    const [file, setFile] = useState(null);
    const [processedData, setProcessedData] = useState(null);

    function handleDrop(acceptedFiles, rejectedFiles) {
        console.log('Archivos aceptados:', acceptedFiles);
        console.log('Archivos rechazados:', rejectedFiles);

        if (rejectedFiles.length > 0) {
            window.alert('Only CSV files are allowed.');
            <div className='dropzone.reject'></div>
        } else {
            setFile(acceptedFiles[0]);

            const formData = new FormData();
            formData.append('archivo_csv', acceptedFiles[0]);
            fetch('/api/procesar-csv', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setProcessedData(data);
                })
                .catch((error) => {
                    console.error(error);
                });

            <div className='dropzone.accept'></div>
        }
    }

    return (
        <Dropzone 
            className="cta-button"
            onDrop={handleDrop}
            accept={{
                '.xlsx, .xls': 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                '.csv': 'text/csv'}}
            onDropRejected={handleDrop}
        >
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {file ? (
                        <p>File name: {file.name}</p>
                    ) : (
                        <div className="cta-button">Drag and drop an CSV file here, or click to select an CSV file</div>
                    )}
                    {processedData && (
                        <div>
                            <p>Processed data:</p>
                            <pre>{JSON.stringify(processedData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            )}
        </Dropzone>
    );
}

export default DropzoneComponent;