import React from 'react';
import '../../style/background.css';

const Background = (props) => (
    <>
    {/* backgroundColor options: white or black */}
        <img src = {props.backgroundImage} class = "backgrounding" id = {props.backgroundColor} class = {props.backgroundCSS}></img>
    </>
);

export default Background;