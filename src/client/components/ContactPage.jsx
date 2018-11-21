import React, {Component} from 'react';
class ContactPage extends Component{
    render() {
        return (
            <div id="contact" className="padd-section wow fadeInUp">

                <div className="container">
                    <div className="section-title text-center">
                        <h2>Contact Me</h2>
                        {/*<p className="separator">put some stuff in here</p>*/}
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-3 col-md-4">

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/riley-griffin-a6a4b3b1/" className="linkedin">Linkedin</a>
                                <a href="https://github.com/rileyjgr" className="github">Github</a>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-8">
                            <p>Email: <a href="#">rigrffin241@gmail.com</a></p>
                            <p>Mobile: <a href="#">(908)-578-7632</a></p>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
export default ContactPage;
