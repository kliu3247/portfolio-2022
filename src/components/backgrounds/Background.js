import React from 'react';
import '../../style/background.css';

const Background = (props) => (
    <>
        <img src = {props.backgroundImage} class = "backgrounding" id = {props.backgroundColor}></img>
    </>
);

export default Background;