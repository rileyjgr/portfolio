import React, {Component} from 'react';

class AboutPage extends Component{
    render() {
        return (
            <div id="about-us" className="about-us padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="about-content">
                                <h2><span>MERN Stack</span>MongoDb, Express, React, Node.js</h2>
                                <p>Seeking job opportunties in Full-Stack Web Development.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-5">
                                    <ul><b>Front-End Languages: </b>
                                        <li>Java Script</li>
                                        <li>React</li>
                                        <li>Bootstrap / Materialize</li>
                                    </ul>
                                    <ul><b>Databases:</b>
                                        <li>MongoDb / LowDb</li>
                                        <li>SQL / SQL Lite</li>
                                    </ul>
                                    <ul><b>Education:</b>
                                        <li>Columbia University Full Stack Coding Boot Camp: June 2018 - December 2018</li>
                                        <li>Marist College - Computer Science: September 2014 - June 2016</li>
                                    </ul>
                                    <ul><b>Work Experience:</b>
                                        <li>Molod Spitz & DeSantis - IT Specialist and Billing Coordinator: May 2017 - May 2018</li>
                                        <li>Turner Construction Company - Payroll Assistant: December 2017 - May 2017</li>
                                        <li>Turner Construction Company - Accounting Intern: June 2016 - December 2017</li>
                                    </ul>
                                    <ul><b>Favorite Technologies:</b>
                                        <li>DialogFlow</li>
                                        <li>Google Apis</li>
                                        <li>React Native / Expo</li>
                                    </ul>
                                    <ul><b>Social Media Links</b>
                                        <li><a href="https://www.facebook.com/riley.griffin.37">Facebook</a></li>
                                        <li><a href="https://www.linkedin.com/in/riley-griffin-a6a4b3b1/">Linkedin</a></li>
                                        <li><a href="https://github.com/rileyjgr">Github</a></li>
                                    </ul>
                            </div>
                        </div>

                    </div>
                </div>

        )

    }
}
export default AboutPage;
