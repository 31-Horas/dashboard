import React from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import usePageRender from '../../components/usePageRender'
import Topbar from '../../components/Topbar/Topbar';
import { Typography } from '@mui/material';
import ListFile from '../../components/ListFiles/ListFile';

const Welcome = () => {

    usePageRender('/');

    function handleDrop(file) {
        console.log('File selected:', file);
    }

    const getFileName = (fileFromChild) => {
        console.log(fileFromChild);
    }

    return(
        <>
            <Topbar/>
        
            <div className='complete-screen'>
                <div className='left-screen'>
                    <div className="content">   
                        <img className='logo-welcome' src='https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' alt='ibm logo'/>
                        <Typography variant="h1" className="title">Welcome to OTTERBOARD</Typography>
                        <div className='description'>
                            <Typography variant='h6'>
                                Upload or choose a file to launch the dashboard.
                            </Typography>
                        </div>
                        <ListFile func={getFileName}/>
                        <DropzoneComponent onHandle={handleDrop}/>
                    </div>
                </div>

                <div className='right-scren'>
                    <div className="background"></div>
                </div>
            </div>
        </>
    );
};

export default Welcome;