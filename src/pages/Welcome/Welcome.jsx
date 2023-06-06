import React from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import Topbar from '../../components/Topbar/Topbar'
import usePageRender from '../../components/usePageRender'

const Welcome = () => {
    usePageRender('/');
    function handleDrop(file) {
        console.log('File selected:', file);
    }

    return(
        <div className="welcome-screen">
          <Topbar></Topbar>
            <div className="background"></div>
            <div className="content">   
                <div className="logo"></div>
                <h1 className="title">Welcome to OTTERBOARD</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <DropzoneComponent onHandle={handleDrop}/>
            </div>
        </div>
    );
};

export default Welcome;