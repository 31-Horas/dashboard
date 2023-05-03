import React from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';

const Welcome = () => {
    function handleDrop(file) {
        console.log('File selected:', file);
    }

    return(
        <div className="welcome-screen">
            <div className="background"></div>
            <div className="content">   
                <div className="logo"></div>
                <h1 className="title">Welcome to OTTERBOARD</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <DropzoneComponent onHandle={handleDrop}/>
            </div>
        </div>
        // <div className="split-screen">
        //     <div className="left">
        //         {/* Content for the left half of the screen */}
        //     </div>
        //     <div className="right">
        //         <img className='image' src='https://cdn.discordapp.com/attachments/1074703087278755850/1102815137565515786/800px-Sea_Otter_28Enhydra_lutris29_282516979052429_crop.png'/>
        //     </div>
        // </div>
    );
};

export default Welcome;
