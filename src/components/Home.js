import React from "react";
import { BsArrowUpCircle, BsArrowUpRight, BsMailbox, BsTrophy } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubAlt, FaRegHandPeace, FaRegLaughWink } from "react-icons/fa";
import yenaLogoLight from "../assets/yenaLogoLight.png";
import yenaLogoDark from "../assets/yenaLogoDark.png";
import resume from "../assets/resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showScroll: false,
            date: new Date(),
        }
    }

    toggleTheme = () => {
        this.props.onThemeChange();
    }

    scrollDown = () => {
        if(!this.state.showScroll && window.innerHeight > 300 && window.pageYOffset > 500){
            this.setState({showScroll: true});
        }

        if (this.state.showScroll && window.pageYOffset < 500){
            this.setState({showScroll: false});
        }
    };

    contentFadeIn = () => {
        const scrollElements = document.querySelectorAll(".contentBlock");

        let throttleTimer;

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
            (window.innerHeight || document.documentElement.clientHeight) / dividend);
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

        window.addEventListener("scroll", () => { 
            throttle(() => {
                handleScrollAnimation();
            }, 250);
        });
    };

    componentDidMount(){
        document.addEventListener("scroll", this.scrollDown, false);
        this.contentFadeIn();
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.scrollDown, false);
    }

    render(){
        return(
            <div className="homeCont home">
                <div className="header">
                    <img src={this.props.theme === 'light' ? yenaLogoLight : yenaLogoDark} alt="" />
                </div>
                <div className="menu">
                    <div><Link to="/#about">About</Link></div>
                    <div><Link to="/#experience">Work</Link></div>
                    <div><Link to="/#projects">Projects</Link></div>
                    <div className="btn btnClear"><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></div>
                    <div className="toggle" onClick={this.toggleTheme}><div className="notch"></div><div className="notchMoon"></div></div>
                </div>
                <div className="headerBlock">
                    <div className="homeMainText">Hi, I'm Yena!</div>
                    <div className="homeSubText">I'm a software engineer who prioritizes human-centered design and builds with efficiency and scalability in mind.</div>
                </div>
                <div id="about" className="contentBlock">
                    <div className="blockLabel"><div className="contentCount">000 /</div><div>About</div></div>
                    <div className="blockContent">
                        <p>Since my first Java class in high school, I've been fascinated by everything tech from product delivery methods <span className="comment">(agile evangelist here {<FaRegHandPeace />})</span> and ethics <span className="comment">(doubled as a CS + Philosophy major {<FaRegLaughWink />})</span> to interface and systems design.</p>
                        <p>As such, I’ve worn lots of hats from scrum master & UI designer to coding instructor, and I've really found my home building scalable, efficient applications. I mostly enjoy working on the backend, but I also love designing & being able to create fullstack apps. As a software engineer, I thrive on collaboration, strive to create beautiful products, and prioritize human-centered design.</p>
                        <p>I also <a href="https://bravecourse.com/" target="_blank" rel="noopener noreferrer">help girls and womxn from under-represented communities</a> get started with their careers in tech. There were a handful of BIPOC students in my program and even fewer womxn. It took a bit to figure out a roadmap & access resources to start my career, and I've had the privilege of supporting folks on their journey.</p>
                        <p>Outside of work, you’ll find me brewing a fresh pot of tea, climbing rocks, reading philosophy, and trying a new vegan recipe.</p>
                    </div>
                </div>
                <div id="skills" className="contentBlock">
                <div className="blockLabel"><div className="contentCount">001 /</div><div>Skills</div></div>
                    <div className="blockContent">
                        <div className="skills">
                            <div className="skill">
                                <div className="skillTitle">Languages</div>
                                <ul>
                                    <li>Java</li>
                                    <li>C</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SQL</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Libraries & Frameworks</div>
                                <ul>
                                    <li>React</li>          
                                    <li>Redux</li>
                                    <li>React Native</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Tools</div>
                                <ul>
                                    <li>Git</li>
                                    <li>Netlify</li>
                                    <li>Expo</li>
                                    <li>Wordpress</li>
                                    <li>Drupal</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Processes</div>
                                <ul>
                                    <li>Agile</li>
                                    <li>Scrum</li>
                                    <li>Design Thinking</li>
                                </ul>
                            </div>
                            <div className="skill">
                                <div className="skillTitle">Design</div>
                                <ul>
                                    <li>PhotoShop</li>
                                    <li>Illustrator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="experience" className="contentBlock">
                <div className="blockLabel"><div className="contentCount">010 /</div><div>Experience</div></div>
                    <div className="blockContent">
                        <div className="jobs">
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer</div>
                                    <p className="jobCompany"><a href="https://rawkorean.com/" target="_blank" rel="noopener noreferrer">Raw Korean</a></p>
                                </div>
                                <div className="jobDate">Oct 2021 - Jan 2022</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Software Developer Intern</div>
                                    <p className="jobCompany">Wcoding</p>
                                </div>
                                <div className="jobDate">Jul 2021 - Sept 2021</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Partner</div>
                                    <p className="jobCompany"><a href="https://bravecourse.com/" target="_blank" rel="noopener noreferrer">Brave Course</a></p>
                                </div>
                                <div className="jobDate">Aug 2020 - Present</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Operations Manager</div>
                                    <p className="jobCompany">Brave Initiatives</p>
                                </div>
                                <div className="jobDate">Jul 2019 - May 2020</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Marketing Project Manager</div>
                                    <p className="jobCompany">Olivet Nazarene University</p>
                                </div>
                                <div className="jobDate">Aug 2017 - Nov 2018</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Database Administrator Intern</div>
                                    <p className="jobCompany">Compassion International</p>
                                </div>
                                <div className="jobDate">May 2017 - Aug 2017</div>
                            </div>
                            <div className="job">
                                <div className="jobInfo">
                                    <div className="jobTitle">Web Developer</div>
                                    <p className="jobCompany">Olivet Nazarene University</p>
                                </div>
                                <div className="jobDate">Sept 2014 - May 2017</div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div id="projects" className="contentBlock">
                <div className="blockLabel"><div className="contentCount">011 /</div><div>Projects</div></div>
                    <div className="blockContent">
                        <div className="projects">
                            <div className="project">
                                <div className="projectInfo">
                                   <a href="https://github.com/yenapaek/sportsUp" target="_blank" rel="noopener noreferrer">
                                       <div className="projectTitle">SportsUp <BsArrowUpRight /></div>
                                    </a>
                                    <div className="projectDescription">
                                        <p>Meetup inspired website designed to connect people through sports activities.</p>
                                    </div>
                                </div>
                                <div className="projectTechList">
                                    <div>HTML</div>
                                    <div>CSS</div>
                                    <div>JavaScript</div>
                                    <div>MySQL</div>
                                    <div>PHP</div>
                                    <div>Oauth</div>
                                    <div>Kakao API</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="projectInfo">
                                    <a href="https://devpost.com/software/klose" target="_blank" rel="noopener noreferrer">
                                        <div className="projectTitle">Klose <BsArrowUpRight /></div>
                                    </a>
                                    <div className="projectDescription">
                                        <p>React Native web app designed to help people stay connected with loved ones.<br /><br /><strong><BsTrophy/> Won "Best Hack for Influencing Human Behavior @ Home" at Technica 2021 Hackathon</strong></p>    
                                    </div>
                                </div>
                                <div className="projectTechList">
                                    <div>React Native</div>
                                    <div>Expo</div>
                                    <div>MySQL</div>
                                    <div>PHP</div>
                                    <div>Netlify</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="projectInfo">
                                    <a href="https://papanana.life/" target="_blank" rel="noopener noreferrer">
                                        <div className="projectTitle">Papanana <BsArrowUpRight /></div>
                                    </a>
                                    <div className="projectDescription">
                                        <p>Custom Wordpress site designed to market lifestyle services for senior citizens.</p>
                                    </div>
                                </div>
                                <div className="projectTechList">
                                    <div>HTML</div>
                                    <div>CSS</div>
                                    <div>Bootstrap</div>
                                    <div>JavaScript</div>
                                    <div>PHP</div>
                                    <div>Wordpress</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div id="education" className="contentBlock">
                    <div className="blockLabel"><div className="contentCount">100 /</div><div>Education</div></div>
                    <div className="blockContent">
                        <div className="education">
                            <div className="degree">
                                <div className="degreeInfo">
                                    <div className="degreeSchool">Olivet Nazarene University</div>
                                    <p className="degreeTitle">B.A., Computer Science & Philosophy and Religion</p>
                                </div>
                                <div className="degreeDate">2013 - 2017</div>
                            </div>
                            <div className="degree">
                                <div className="degreeInfo">
                                    <div className="degreeSchool">Olivet Nazarene University</div>
                                    <p className="degreeTitle">M.A. in Religion<br/><span className="comment">Focus on Postcolonial Feminism & Continental Philosophy</span></p>
                                </div>
                                <div className="degreeDate">2017 - 2020</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerLabel">Handcrafted by me © twentytwentytwo</div>
                    <div className="footerLinks">
                        <a href="mailto:yenapaek@gmail.com"><BsMailbox /></a>
                        <a href="https://www.linkedin.com/in/yenapaek" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                        <a href="https://github.com/yenapaek" target="_blank" rel="noopener noreferrer"><FaGithubAlt/></a>
                    </div>
                </div>
                {this.state.showScroll ?
                    <div className="floating"><Link to="/#"><BsArrowUpCircle /></Link></div>
                    : null
                }
            </div>
        );
    }
}

export default Home;