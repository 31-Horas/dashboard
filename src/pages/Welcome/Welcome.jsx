import React from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import usePageRender from '../../components/usePageRender'
import Topbar from '../../components/Topbar/Topbar';
import { Typography } from '@mui/material';
import ListFile from '../../components/ListFiles/ListFile';
import { useState } from 'react';
import Popup from '../../components/Popup/Popup';

const Welcome = () => {

    usePageRender('/');

    function handleDrop(file) {
        console.log('File selected:', file);
    }

    const getFileName = (fileFromChild) => {
        console.log(fileFromChild);
    }

    //popup 
    const [showPopup, setShowPopup] = useState(true);
    const title = "This website uses cookies"
    const popupText = "We use cookies to improve your browsing experience and to securely manage sessions and user accounts on our website. By continuing to use our site, you agree to the use of cookies. ";
    const agreeOption = "agree";
    console.log(showPopup);

    return(
        <>
            {showPopup && (
                <Popup openState={showPopup} title={title} text={popupText} agreeOption={agreeOption}>
                    {/* {setShowPopup(false)} */}
                </Popup>
            )}
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