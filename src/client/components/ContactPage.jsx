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
                                <a href="https://www.linkedin.com/in/riley-griffin-a6a4b3b1/" className="linkedin"><i className="fa fa-linkedin"/></a>
                                <a href="https://github.com/rileyjgr" className="github"><i className="fa fa-github"/></a>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-8">
                            <div className="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"/>
                                <form action="" method="post" role="form" className="contactForm">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name"
                                               placeholder="Your Name" data-rule="minlen:4"
                                               data-msg="Please enter at least 4 chars"/>
                                        <div className="validation"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="Your Email" data-rule="email"
                                               data-msg="Please enter a valid email"/>
                                        <div className="validation"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject"
                                               placeholder="Subject" data-rule="minlen:4"
                                               data-msg="Please enter at least 8 chars of subject"/>
                                        <div className="validation"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required"
                                                  data-msg="Please write a brief description of why you are contacting me."
                                                  placeholder="Message"/>
                                        <div className="validation"/>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" id="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
export default ContactPage;
