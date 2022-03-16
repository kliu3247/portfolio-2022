import React from 'react';

import ProjectTitle from "../../components/work/ProjectTitle";
import Background from '../../components/backgrounds/Background';

import "../../style/engineeringWork.css";

//background image
import background from "../../images/long-background-m-all-colors.svg";

//tags
import art from "../../images/engineering/engineering-tags/art.svg";
import javascript from "../../images/engineering/engineering-tags/javascript.svg";
import programming from "../../images/engineering/engineering-tags/programming.svg";


//takeupspace images
// import videoGame from "../../images/emojis/.png"; 
import takeUpSpace from "../../images/engineering/engineering-previews/takeUpSpace.png";

//Pepsico images
// import film from "../../images/emojis/.png";
import pepsico from "../../images/engineering/engineering-previews/pepsico.png";



const EngineeringWork = () => (
    // GENERAL FRAMEWORK
    // <ProjectTitle
    //     company = ""
    //    emoji = {}
    //     projectName = ""
    //     projectDescription = ""
    //     tag1 = {art}
    //     tag2 = {javascript}
    //     tag3 = {programming}
    //     tag4 = {...}
    //     tag5 = {...}
    //     tag6 = {...}
    //     projectImage = {...}
    //     link = "/"
    //     mode = "light"
    // />
    <>
    <div id="fix-centering">
        <div id = "all-work">
                <div className = "project left-margin">
                    <ProjectTitle
                        company = "Electrocrafting"
                        emoji = {""}
                        projectName = "Take Up Space"
                        projectDescription = "........."
                        tag1 = {art}
                        tag2 = {javascript}
                        tag3 = {programming}
                        projectImage = {takeUpSpace}
                        link = "/"
                        mode = "dark"
                        >
                    </ProjectTitle>
                </div>
                
                <div className = "project left-margin">
                    <ProjectTitle
                        company = "Pepsico"
                        emoji = {""}
                        projectName = "....."
                        projectDescription = "......"
                        // tag1 = {userResearch}
                        // tag2 = {uiux}
                        // tag3 = {productDesign}
                        projectImage = {pepsico}
                        link = "/"
                        mode = "dark">
                    </ProjectTitle>
                </div>

        </div>
    </div>
       
        
        <Background
            backgroundImage = {background}
            backgroundColor = "black"
            backgroundCSS = "backgrounding-work"
        />
    </>
);

export default EngineeringWork;
