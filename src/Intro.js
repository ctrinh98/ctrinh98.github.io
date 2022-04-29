import React, { Component } from 'react';
import './Intro.css'
import mobile from "./mobile.gif"
import game from "./game.gif"
import web from "./web.gif"
import work from "./work.gif"

function Intro() {


    return(
        <div>
            <div class="content-wrapper intro">
                <h2 data-test="main-heading">
                    Hey, it<span class="apostrophe">{'\u0027'}</span>s me, Christopher
                </h2>
                <p>
                    I am a software engineer. My passions lie in productivity tools, web development, and media creation, and I'm always on the lookout for cool new technologies. Driven by the encouragement of my friends and peers, I hope to keep making cool ideas that help and inspire people to be their best selves.
                </p>
            </div>
            <div class="content-wrapper about">
                <h2>
                    About
                </h2>
                <p>
                    I'm inspired the most by those that try their best to work hard without forgetting how to have fun. I keep this in mind in all of my endeavors {'\u2013'} currently, I'm working on completing my Master's degree in Computer Science at Boston University this spring of 2022.
                </p>
                <p>
                    My favorite pastime is chatting with people and learning what makes them tick. Get to know me and you'll find that I can't stop myself from trying new things, snacking on bubble tea, and producing all kinds of content.
                </p>
            </div>
            <div class="content-wrapper skills">
                <h2>
                    Skills
                </h2>
                <p>
                    I specialize in software and web development, and produce media content in my free time. I'm most proficient in the <span class="blue">Python</span>, <span class="blue">JavaScript</span>, <span class="blue">Node.js</span>, and <span class="blue">React</span> programming languages and frameworks. 
                </p>
                <p>
                    However, I'm familiar with even more programming langauges and tools than the ones mentioned here, such as <span class="orange">Java</span> and <span class="orange">Android Studio</span>, or even <span class="orange">SQL/SQLite</span> and related database frameworks like <span class="orange">MongoDB</span> or <span class="orange">Firebase</span> {'\u2013'} more than anything, I love learning new things and am never afraid of taking on a new project and learning a new tech stack or two in the process. 
                </p>
                <p>
                    I enjoy the process of creating visuals and designing UI/UX interactions, and this bleeds into almost anything I work on. In the past, I used to develop small video games as a hobby, but I've recently transitioned into using <span class="yellow">Adobe Premiere</span> and <span class="yellow">Adobe Photoshop</span>, along with occasional use of the rest of the Adobe creative suite, to create media content in my spare time such as travel vlogs or livestream assets for my friends. I also like to practice my creative writing skills by creating stories based on popular media franchises.
                </p>
            </div>
            <div class="content-wrapper experience">
                <h2>
                    Experience
                </h2>
                <div class="posts">
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={work}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        Project Lead {'\u2013'} BU Spark!
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Python</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Beautiful Soup</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Natural Language Processing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                Led a team of four on a data analysis project involving 6000+ news articles from local ABC news stations to determine the presence of any bias in crime related news coverage. I interfaced with the client often to check in on our project deliverables and consistently made sure the team was on track to solve the client asks, and I redrew expectations when a few of their asks were unable to be met.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    
                                </div>
                                <div class="date-string do-transition">
                                    January 2022 - May 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={work}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        Software Developer Intern {'\u2013'} Pixel Machinery
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Python</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">JavaScript</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">React</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Django</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">TeamViewer</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Zendesk</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                Developed Python scripts to assist in the automation of client onboarding, while also assisting in upkeeping the newly launched company database portal that uses the Django framework. In between projects, I solved Zendesk helpdesk tickets and communicated with the client's employees over TeamViewer screenshare to help resolve software issues.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    
                                </div>
                                <div class="date-string do-transition">
                                    June 2020 - April 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={mobile}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        I'M WELL
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">JavaScript</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Ionic 4</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Node.js</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Adobe Photoshop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A mobile app that I worked on at the Software & Application Innovation Lab (SAIL) at Boston University. I co-developed the app with a partner and was in charge of designing the UI and UX to bring it up to modern standards. One of the first major team proejcts I partook in where I was given full creative freedom on visual design, and remains one of the most engaging experiences to date.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    
                                </div>
                                <div class="date-string do-transition">
                                    May 2019 - May 2020
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={game}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        Dactylo
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">C#</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Unity</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">HTC Vive</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">VR Gloves</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A joint research project between the University of Alabama and Boston University. As part of the project, I designed and developed a educational VR game with Unity where users can use VR gloves to learn and perform sign language. The project was handed over to the University of Alabama in November of the same year.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    
                                </div>
                                <div class="date-string do-transition">
                                    January 2019 - November 2019
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={web}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        CodeStyle
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">JavaScript</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">React</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Python</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Flask</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Heroku</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A web application I co-designed and developed that takes a user's Python code and gives the user tips on how to make it more readable. This project was completed under the BU Spark! Innovation Program in a team of two with the goal of teaching budding coders what it means to have good coding style.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/updog/codestyle">GitHub</a>
                                </div>
                                <div class="date-string do-transition">
                                    September 2018 - December 2018
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={mobile}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        BUS Mobile
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Dart</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Flutter</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">iOS</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Android</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A mobile app that tracks the Boston University shuttle bus. Comapred to the official bus tracking app that BU offered, this app focused on a different approach; instead of tracking the bus on a map, the app estimates the shuttle's arrival time for each bus stop.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ctrinh98/bu-shuttle-mobile">GitHub</a>
                                </div>
                                <div class="date-string do-transition">
                                    June 2018 - July 2018
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={web}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        Personal Website
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">JavaScript</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">React</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">HTML</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">CSS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A web application written in React designed to give a clean, quick, yet informative introduction to my professional life. Currently, this is the fourth redesign of my website, and the first one written entirely in React; past iterations were made with just HTML and CSS. The goal with this particular iteration was a tighter visual identity and condensing the amount of information on screen at once.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ctrinh98/ctrinh98.github.io">GitHub</a>
                                </div>
                                <div class="date-string do-transition">
                                    December 2017 - present
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="post-wrapper do-transition">
                        <div class="post do-transition">
                            <div class="post-heading">
                                <div class="picture-frame">
                                    <img src={game}></img>
                                </div>
                                <div class="heading-and-tags">
                                    <h3>
                                        Project Pursuit
                                    </h3>
                                    <div class="tags">
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">GameMaker Studio</span>
                                        </div>
                                        <div class="tag do-transition">
                                            <span class="logo-wrapper"></span>
                                            <span class="tag-string">Adobe Photoshop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="post-text">
                                A small platformer game created in GameMaker Studio using assets and designs from the Cave Story freeware game. I coded all the game logic myself over a period of about two years.
                            </p>
                            <div class="footer">
                                <div class="external-links do-transition">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ctrinh98/project-pursuit">GitHub</a>
                                </div>
                                <div class="date-string do-transition">
                                    May 2017 - August 2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Intro;
