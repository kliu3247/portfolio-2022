import React from 'react';

import ProjectTitle from "../../components/work/ProjectTitle";
import Background from '../../components/backgrounds/Background';

import "../../style/designWork.css";

//background image
import background from "../../images/long-background-m-all-colors.svg";

//tags
import userResearch from "../../images/design/design-tags/user-research.svg";
import uiux from "../../images/design/design-tags/uiux.svg";
import productDesign from "../../images/design/design-tags/productDesign.svg";
import userExperience from "../../images/design/design-tags/user-experience.svg";
import projectMentoring from "../../images/design/design-tags/project-mentoring.svg";
import physicalPrototyping from "../../images/design/design-tags/physical-prototyping.svg"; 

//Adobe images
import film from "../../images/emojis/film.png";
import adobePreview from "../../images/design/design-previews/adobe";

//Logitech images
import videoGame from "../../images/emojis/video-game.png"; 
import logitechPreview from "../../images/design/design-previews/logitech.png";


//Patagonia images
import mountain from "../../images/emojis/mountain.png"; 
import patagoniaPreview from "../../images/design/design-previews/patagonia.png";



const DesignWork = () => (
    // GENERAL FRAMEWORK
    // <ProjectTitle
    //     company = ""
    //    emoji = {}
    //     projectName = ""
    //     projectDescription = ""
    //     tag1 = {userResearch}
    //     tag2 = {uiux}
    //     tag3 = {productDesign}
    //     tag4 = {userExperience}
    //     tag5 = {projectMentoring}
    //     tag6 = {physicalPrototyping}
    //     projectImage = {physicalPrototyping}
    //     link = "/"
    //     mode = "light"
    // />
    <>
    <div id="fix-centering">
        <div id = "all-work">
                <div className = "project left-margin">
                    <ProjectTitle
                        company = "Adobe"
                        emoji = {film}
                        projectName = "Storytooling"
                        projectDescription = "Empowering student video creators to hone their storytelling abilities."
                        tag1 = {userResearch}
                        tag2 = {uiux}
                        tag3 = {productDesign}
                        tag4 = {userExperience}
                        tag5 = {projectMentoring}
                        projectImage = {adobePreview}
                        link = "/"
                        mode = "light"
                        >
                    </ProjectTitle>
                </div>
                
                <div className = "project left-margin">
                    <ProjectTitle
                        company = "Logitech G"
                        emoji = {videoGame}
                        projectName = "Project Embrace All Play"
                        projectDescription = "Reinventing play in the Metaverse."
                        tag1 = {userResearch}
                        tag2 = {uiux}
                        tag3 = {productDesign}
                        projectImage = {logitechPreview}
                        link = "https://www.behance.net/gallery/134311851/Logitech-G-Spring-2021"
                        mode = "light">
                    </ProjectTitle>
                </div>

                <div className = "project left-margin">
                    <ProjectTitle
                        company = "Patagonia"
                        emoji = {mountain}
                        projectName = "Reimaging Digital Spaces"
                        projectDescription = "Integrating cutting edge technology into Patagonia’s packaging."
                        tag1 = {userResearch}
                        tag2 = {uiux}
                        tag3 = {productDesign}
                        tag4 = {userExperience}
                        tag5 = {physicalPrototyping}
                        projectImage = {patagoniaPreview}
                        link = "https://www.behance.net/gallery/110328487/Patagonia-Fall-2020"
                        mode = "light">
                    </ProjectTitle>
            </div>
        </div>
    </div>
       
        
        <Background
            backgroundImage = {background}
            backgroundColor = "white"
            backgroundCSS = "backgrounding-work"
        />
    </>
);

export default DesignWork;
