import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
class Projects extends Component {
    render() {
        return (
            <div>
                <section id="features" className="padd-section text-center wow fadeInUp"
                         style={{visibility: 'visible', animationName: 'fadeInUp'}}>

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Projects / Things I have worked on.</h2>
                        </div>
                    </div>

                    <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-lg-3">
                            <div className="feature-block">
                                    <h4>Animator</h4>
                                    <p>Text-to-speech Gifs social media</p>
                                    <i className="fab fa-github"><Link to="https://github.com/rileyjgr/animator"/></i>
                                    <i className="fas fa-ghost"><Link to="http://intelman.herokuapp.com"/></i>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="feature-block">
                                <h4>Is it fake news?</h4>
                                <p>Web App to determine whether a news article is fake or real news (In Development)</p>
                                <i className="fab fa-github"><Link to="https://github.com/rileyjgr/is-it-fake-news"/></i>
                                <i className="fas fa-ghost"><Link to="https://is-it-fake-news.herokuapp.com/"/></i>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="feature-block">
                                <h4>Synergy</h4>
                                <p>Movie, book, and music recommendations</p>
                                <p><i className="fab fa-github"><Link to="https://github.com/rileyjgr/animator"/></i></p>
                                <p><i className="fas fa-ghost"><Link to="http://intelman.herokuapp.com"/></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
export default Projects;
