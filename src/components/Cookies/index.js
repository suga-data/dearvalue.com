import React from 'react';
import { useState } from 'react';

export default function CookiePopup(){
    const [acceptCookies, setAcceptCookies] = useState(false);
    const [rejectPressed, setRejectPressed] = useState(false);

    let cookieContainer = {
        // height: "100vh",
        // width: "100vw",
        zIndex: 10,
        position: "fixed",
                // width:"80vw", 
        // height:"auto", 
        backgroundColor:"white", 
        // opacity: 0.5,
        margin: "auto",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    }
    const cockieMessage = {
        borderStyle: "solid",
        borderWidth: "2px",
        padding: "40px",
        margin: "20px",
        backgroundColor:"white", 
        opacity:1,
        textAlign: "center",
        dropShadow: "16px 16px 10px black",
    }
    const cookieButton = {
        backgroundColor: "white",
        // padding: "10px",
        curser: "default",
        display: "inline-block",
        verticalAlign: "top",
        margin: "20px",
        fontSize: "20px"
    }

    function AcceptCookies(){
        console.log("hide cookies")
        setAcceptCookies(true)
    }
    function RejectCookies(){
        setRejectPressed(!rejectPressed ? true : false)
    }

    const hide = {
        display: "none",
    }

    return (
        <>
            <div className='cookie-container' style={!acceptCookies ? cookieContainer : hide}>
                <div className="cookie-message" style={cockieMessage}>
                    <p>
                        Please accept everything in order to proceed with your data.
                    </p>
                    
                    <button className='cookie-button' style={cookieButton} onClick={AcceptCookies}>Accept all</button>
                    <button className='cookie-button' style={cookieButton} onClick={RejectCookies}>Reject all</button>
                </div>
            </div>
            <div className='cookie-container' style={!rejectPressed || acceptCookies ? hide : cookieContainer}>
                <div style={cockieMessage} >
                    <p>
                        If you don't accept our terms we can not gather value. <br/>
                        Please help our extract more value from you data.
                    </p>

                    <button className='cookie-button' style={cookieButton} onClick={AcceptCookies}>Yes, I accept</button>
                    <button className='cookie-button' style={cookieButton} onClick={RejectCookies}>No, I don't accept</button>
                </div>
            </div>
        </>
    );
};

