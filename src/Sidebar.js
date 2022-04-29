import React, { Component } from 'react';
import './Sidebar.css'
import logo from './headshot.png';
import resume from './ChristopherTrinhResume.pdf'

function remsToPixels(rems) { 
    return Math.round(rems * 16);
}

export default class Sidebar extends Component {

    render() {
        return(
            <div class="sidebar do-transition">
            <div class="sidebar-content">
              <div class="img-wrapper fixed-size">
                 <img src={logo} alt="Christopher Trinh" width={remsToPixels(10)} height={remsToPixels(10)} />
              </div>
              {/* <h1>
                <AnimatedName />
              </h1> */}
              <h1>Christopher Trinh</h1>
              <p class="subtitle role do-transition">Software Developer</p>
              <p class="subtitle email">
                <a href="mailto:ctrinh@bu.edu">ctrinh@bu.edu</a>
              </p>
              <p class="subtitle">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ctrinh98">
                  GitHub 
                </a>
                <span class="inline-separator">{'\u0020'}</span>
                <span class="inline-separator">{'\u00b7'}</span>
                <span class="inline-separator">{'\u0020'}</span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ctrinh98">
                LinkedIn
                </a>
                <span class="inline-separator">{'\u0020'}</span>
                <span class="inline-separator">{'\u00b7'}</span>
                <span class="inline-separator">{'\u0020'}</span>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume
                </a>
              </p>
            </div>
            <div class="content-wrapper">
                <div aria-hidden="true" class="separator">
                    <div class="line do-transition" />
                </div>
            </div>
          </div>
        )
      }

}
