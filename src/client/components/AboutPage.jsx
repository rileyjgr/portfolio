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

                                <h2><span>eStartup</span>UI Design Mobile </h2>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat
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
