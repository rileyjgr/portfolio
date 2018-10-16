import React, { Component } from 'react';
class HomePage extends Component {
    render() {
        return (
            <div id="hero" classs="wow fadeIn">>
                    <div className="hero-container">
                        <h1>Welcome to eStartup</h1>
                        <h2>Elegant Bootstrap Template for Startups, Apps &amp; more...</h2>
                        <img src="img/hero-img.png" alt="Hero Imgs" />
                            <a href="#get-started" className="btn-get-started scrollto">Get Started</a>
                            <div className="btns">
                                <a href="#"><i className="fa fa-apple fa-3x"/> App Store</a>
                                <a href="#"><i className="fa fa-play fa-3x"/> Google Play</a>
                                <a href="#"><i className="fa fa-windows fa-3x"/> windows</a>
                            </div>
                    </div>
            </div>
        )
    }
}
export default HomePage;
