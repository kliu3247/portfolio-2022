import React from 'react';
import {Link} from 'react-router-dom';

import '../style/background.css';
import'../style/homePage.css';

import Background from '../components/backgrounds/Background';

/*Emojis*/
import wave from '../images/emojis/wave.png'
import art from '../images/emojis/art.png'
import books from '../images/emojis/books.png'
import laptop from '../images/emojis/laptop.png'
import tool from '../images/emojis/tool.png'

const HomePageDesign = (props) => (
    <>
        <div id="align-stuff" class = {props.mode}>
        
            <div id="helloImKelly">
                <img id = "wave" src ={wave} />
                <div class = "title1-m" id ="title1-sizing-m"> <span>Hello, </span> <span>I'm Kelly</span></div>
            </div>
            

            <div class= "heading-m">
                I’m a human-centered designer and engineering student at UC Berkeley. 
                My philosophy is to 
                <span id = "bold"> innovate for impact.</span>
            </div>

            <div id="whatImUpTo">
                <div class = "title2-m" id="bold">What I’m up to</div>
                
                <div class="list" id = "firstItem">
                    <img class = "little-emoji" id = "art" src ={art} />
                    <div class= "list1-m">Project manager @ <a class = {"list-link-" + props.mode} href="https://www.berkeleyinnovation.org/">Berkeley Innovation</a></div>
                </div>
                
                <div class="list" id = "firstItem">
                    <img class = "little-emoji" id = "laptop" src ={laptop} />
                    <div class= "list1-m">Incoming intern @ <a class = {"list-link-" + props.mode} href="https://www.uber.com/">Uber</a></div>
                </div>

                <div class="list">
                    <img class = "little-emoji"id = "books" src ={books} />
                    <div class= "list1-m"><span>Electrical Engineering &amp; Computer Science </span> <span>@ <a class = {"list-link-" + props.mode} href="https://eecs.berkeley.edu/">UC Berkeley </a></span></div>
                </div>
                
                <div class="list">
                    <img class = "little-emoji" id = "tool" src ={tool} />
                    <div class= "list1-m">Building this site from scratch</div>
                </div>
            </div>
            
            <Link to = {props.link}>
                <button class = {"view-work-" + props.mode}>View {props.typeOfWork} Work</button>
            </Link>
           
        </div>
        {/* <Sidebar/> */}
        <Background
            backgroundImage = {props.backGroundPic}
            backgroundColor = {props.backgroundColor}
            backgroundCSS = "backgrounding"
        />

    </>
);

export default HomePageDesign;