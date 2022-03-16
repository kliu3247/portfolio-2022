import React from 'react';
import {Link} from 'react-router-dom';


import "../../style/projectTitle.css";



const ProjecTitle = (props) => (
    <>
        <div id = "whole-project-display">
            <div id = "text-section-regular">
                <img src = {props.emoji} id = "emoji-regular"></img>
                
                
                <div id="text">
                <a href = {props.link} class = "links">
                    <h1 className = {"h1-font-settings company-regular-" + props.mode}>{props.company}</h1>
                    
                    <div className = "right-side-text">
                        <h2 className = {"h2-font-settings projectName-regular-" + props.mode}>{props.projectName}</h2>

                        <h3 className = {"h3-font-settings projectDescription-regular-" + props.mode}>{props.projectDescription}</h3>

                    </div>
                </a>
                    
                    <div id = "allTags">
                        <img src = {props.tag1} className = "tag-regular" id = "tag-1-regular"></img>
                        <img src = {props.tag2} className = "tag-regular" id ="tag-2-regular"></img>
                        <img src = {props.tag3} className = "tag-regular" id ="tag-3-regular"></img>
                        <img src = {props.tag4} className = "tag-regular" id ="tag-4-regular"></img>
                        <img src = {props.tag5} className = "tag-regular" id ="tag-5-regular"></img>
                        <img src = {props.tag6} className = "tag-regular" id ="tag-6-regular"></img>
                        <img src = {props.tag6} className = "tag-regular" id ="tag-7-regular"></img>
                    </div>
                </div>

            </div>

            <Link to = {props.link}>
                <img src = {props.projectImage} className = "projectImage-regular"></img>
            </Link>
           
        </div>
    </>
);

export default ProjecTitle;