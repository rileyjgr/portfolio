import React, {Component} from 'react';

class AboutPage extends Component{
    render() {
        return (
            <div id="about-us" className="about-us padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-5 col-lg-3">
                            <img src="img/about-img.png" alt="About"/>
                        </div>

                        <div className="col-md-7 col-lg-5">
                            <div className="about-content">

                                <h2><span>MERN Stack</span>MongoDb, Express, React, Node.js</h2>
                                <p>Seeking job opportunties in Full-Stack Web Development.
                                </p>

                                <ul className="list-unstyled">
                                    <li><i className="fa fa-angle-right"/>Creative Design</li>
                                    <li><i className="fa fa-angle-right"/>Retina Ready</li>
                                    <li><i className="fa fa-angle-right"/>Easy to Use</li>
                                    <li><i className="fa fa-angle-right"/>Unlimited Features</li>
                                    <li><i className="fa fa-angle-right"/>Unlimited Features</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )

    }
}
export default AboutPage;
