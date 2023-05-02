import React, { useState, useEffect } from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import { Container } from '@mui/material';

const Welcome = () => {
    function handleDrop(file) {
        console.log('File selected:', file);
    }

    return(
        <div className="split-screen">
            <div className="left">
                {/* Content for the left half of the screen */}
            </div>
            <div className="right">
                <img src='https://cdn.discordapp.com/attachments/1074703087278755850/1102815137565515786/800px-Sea_Otter_28Enhydra_lutris29_282516979052429_crop.png'/>
            </div>
        </div>
        // <div>
        //     <div className='container'>
        //         <h1>
        //             Welcome
        //         </h1>
        //     </div>
        //     <div>
        //         <img src='https://cdn.discordapp.com/attachments/1074703087278755850/1102815137565515786/800px-Sea_Otter_28Enhydra_lutris29_282516979052429_crop.png'/>
        //     </div>
        // </div>
    );
};

export default Welcome;
