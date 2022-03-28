import React from 'react';
import { BsArrowUpCircle, BsArrowRight, BsMailbox } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import yenaLogoDualLight from '../assets/yenaLogoDualLight.png';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showScroll: false,
        }
    }

    scrollDown = () => {
        if(!this.state.showScroll && window.innerHeight > 300 && window.pageYOffset > 500){
            this.setState({showScroll: true});
        }

        if (this.state.showScroll && window.pageYOffset < 500){
            this.setState({showScroll: false});
        }
    }

    contentFadeIn = () => {
        const scrollElements = document.querySelectorAll(".contentBlock");

        var throttleTimer;

        const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
        }

        const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
        };

        const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
        };

        const displayScrollElement = (element) => {
        element.classList.add("scrolled");
        };

        const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
        };

        const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
            displayScrollElement(el);
            } else if (elementOutofView(el)) {
            hideScrollElement(el)
            }
        })
        }
        var timer=0;
        var count=0;
        var scroll = 0;

        window.addEventListener("scroll", () => { 
        throttle(() => {
            handleScrollAnimation();
        }, 250);
        });
    }

    componentDidMount(){
        document.addEventListener("scroll", this.scrollDown, false);
        this.contentFadeIn();
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.scrollDown, false);
      }

    render(){
        return(
            <div className="homeCont">
                <div className="header">
                    <img src={yenaLogoDualLight} alt="" />
                </div>
                <div className="menu">
                    <div><a href="">About</a></div>
                    <div><a href="">Work</a></div>
                    <div><a href="">Projects</a></div>
                    <div className="btn btnClear"><a href="">Resume</a></div>
                </div>
                <div className="headerBlock fadeIn">
                    <div className="homeMainText">Hi there!</div>
                    <div className="homeMainText">I'm Yena!</div>
                </div>
                <div className="contentBlock">
                    <div className="blockLabel">About</div>
                    <div className="blockContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="contentBlock">
                    <div className="blockLabel">Skills</div>
                    <div className="blockContent">
                        <div className="skills">
                            <div className="skill">
                                <div className="skillTitle">Languages</div>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Frameworks</div>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Tools</div>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Design</div>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>JavaScript (ES6)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contentBlock">
                    <div className="blockLabel">Experience</div>
                    <div className="blockContent">
                        <div className="jobs">
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>
                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>

                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>

                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>

                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>

                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <div className="jobCompany"><a>Raw Korean</a></div>

                                </div>
                                <div className="jobDate">May 2018 - Present</div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="contentBlock">
                    <div className="blockLabel">Projects</div>
                    <div className="blockContent">
                        <div className="projects">
                            <div className="project">
                                <div className="projectInfo">
                                    <div className="projectTitle">Project Title <a href="" target="_blank"><BsArrowRight /></a></div>
                                    <p>React Native project created during a Hackathon.</p>
                                </div>
                                <div className="projectTechList">
                                    <div>JavaScript</div>
                                    <div>React</div>
                                    <div>React Router</div>
                                    <div>Axios</div>
                                    <div>YouTube API</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="projectInfo">
                                   <div className="projectTitle">Project Title <a href="" target="_blank"><BsArrowRight /></a></div>
                                    <p>React Native project created during a Hackathon.</p>
                                </div>
                                <div className="projectTechList">
                                    <div>JavaScript</div>
                                    <div>React</div>
                                    <div>React Router</div>
                                    <div>Axios</div>
                                    <div>YouTube API</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="projectInfo">
                                   <div className="projectTitle">Project Title <a href="" target="_blank"><BsArrowRight /></a></div>
                                    <p>React Native project created during a Hackathon.</p>
                                </div>
                                <div className="projectTechList">
                                    <div>JavaScript</div>
                                    <div>React</div>
                                    <div>React Router</div>
                                    <div>Axios</div>
                                    <div>YouTube API</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="projectInfo">
                                   <div className="projectTitle">Project Title <a href="" target="_blank"><BsArrowRight /></a></div>
                                    <p>React Native project created during a Hackathon.</p>
                                </div>
                                <div className="projectTechList">
                                    <div>JavaScript</div>
                                    <div>React</div>
                                    <div>React Router</div>
                                    <div>Axios</div>
                                    <div>YouTube API</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="footer">
                    <div className="footerLabel">Handcrafted by me © twentytwentytwo</div>
                    <div className="footerLinks">
                        <a href="mailto:yenapaek@gmail.com"><BsMailbox /></a>
                        <a href="https://www.linkedin.com/in/yenapaek" target="_blank"><AiOutlineLinkedin /></a>
                        <a href="https://github.com/yenapaek" target="_blank"><FaGithubAlt/></a>
                    </div>
                </div>
                {this.state.showScroll ?
                    <div className="floating"><BsArrowUpCircle /></div>
                    : null
                }
            </div>
        );
    }
}

export default Home;