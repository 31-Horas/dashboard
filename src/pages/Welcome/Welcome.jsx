import React from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import usePageRender from '../../components/usePageRender'
import Topbar from '../../components/Topbar/Topbar';
import { Typography } from '@mui/material';

const Welcome = () => {

    usePageRender('/');

    function handleDrop(file) {
        console.log('File selected:', file);
    }

    return(
        <div className="welcome-screen">
          <Topbar/>
            <div className="background"></div>
            <div className="content">   
                <div className="logo-welcome"></div>
                <Typography variant="h1" className="title">Welcome to OTTERBOARD</Typography>
                <div className='description'>
                    <Typography variant='h6'>
                        Upload or choose a file to launch the dashboard.
                    </Typography>
                </div>
                <DropzoneComponent onHandle={handleDrop}/>
            </div>
        </div>
    );
};

export default Welcome;