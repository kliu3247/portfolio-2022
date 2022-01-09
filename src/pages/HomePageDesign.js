import React from 'react';

import HomePage from './HomePage';

/*Backgrounds*/
import backgroundMWhite from '../images/background-m-white.png'
// import backgroundLWhite from '../../images/background-m-white.svg'
// import backgroundSWhite from '../../images/background-m-white.svg'

// import backgroundMBlack from '../../images/background-m-white.svg'
// import backgroundLBlack from '../../images/background-m-white.svg'
// import backgroundSBlack from '../../images/background-m-white.svg'


const HomePageDesign = () => (
    <>
        <HomePage
            mode = "light"
            backGroundPic = {backgroundMWhite}
            backgroundColor = "white"
            link = "/design-work"
            typeOfWork = "Design"
        />
    </>
);

export default HomePageDesign;