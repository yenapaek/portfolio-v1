import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div className="homeCont">
                <div className="headerBlock">
                    <div className="homeMainText"><h2>Hi there!</h2></div>
                    <div className="homeMainText"><h2>I'm <strong>Yena Paek</strong>, a design-minded software engineer.</h2></div>
                    <div className="btnClear">Get in touch</div>
                </div>
                <div className="colBlock">
                    <div className="blockLabel">
                        <h2>About</h2>
                    </div>
                    <div>
                        <p>I'm currently an Engineer at Brave building things for the web.</p>
                    </div>
                </div>
                <div className="colBlock">
                    <div className="blockLabel"><h2>Skills</h2></div>
                    <div className="skillsList">
                        <div>
                            <h3>Languages</h3>
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Frameworks</h3>
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tools</h3>
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                                <li>JavaScript (ES6)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Design</h3>
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
                <div className="colBlock">
                    <div className="blockLabel"><h2>Experience</h2></div>
                    <div className="experienceList">
                        <div className="experienceRow">
                            <div>
                                <h4>Software Developer</h4>
                                <p>Raw Korean</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div className="experienceRow">
                            <div>
                                <h4>Brave</h4>
                                <p>Engineer</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div className="experienceRow">
                            <div>
                                <h4>Brave</h4>
                                <p>Engineer</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div className="experienceRow">
                            <div>
                                <h4>Brave</h4>
                                <p>Engineer</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div className="experienceRow">
                            <div>
                                <h4>Brave</h4>
                                <p>Engineer</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div className="experienceRow">
                            <div>
                                <h4>Brave</h4>
                                <p>Engineer</p>
                            </div>
                            <div>May 2018 - Present</div>
                        </div>
                        <div>View My Resume</div>
                    </div>
                </div>
                <div className="colBlock">
                    <div className="blockLabel">            
                        <h2>Projects</h2>
                    </div>
                    <div className="projectsList">
                        <div className="projectRow">
                            <div className="projectTitle">
                                <h4>Project Title</h4>
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
                        <div className="projectRow">
                            <div className="projectTitle">
                                <h4>Project Title</h4>
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
                        <div className="projectRow">
                            <div className="projectTitle">
                                <h4>Project Title</h4>
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
                        <div className="projectRow">
                            <div className="projectTitle">
                                <h4>Project Title</h4>
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
                <div className="footer">
                    <div>
                        <h4>Designed & Developed by
Yena Paek</h4>
                    </div>
                    <div className="footerLinks">
                        <ul>
                            <li>Email</li>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;