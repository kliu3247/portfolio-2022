import React from 'react';

import HomePage from './HomePage';

/*Backgrounds*/
//import backgroundMWhite from '../images/background-m-white.png'
// import backgroundLWhite from '../../images/background-m-white.svg'
// import backgroundSWhite from '../../images/background-m-white.svg'

import backgroundMBlack from '../images/background-m-black.svg'
// import backgroundLBlack from '../../images/background-m-white.svg'bp
// import backgroundSBlack from '../../images/background-m-white.svg'


const HomePageEngineering = () => (
    <>
        <HomePage
            mode = "dark"
            backGroundPic = {backgroundMBlack}
            backgroundColor = "black"
            link =  "/engineering-work"
            typeOfWork = "Engineering"
        />
    </>
);

export default HomePageEngineering;