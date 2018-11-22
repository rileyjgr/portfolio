import React, {Component} from 'react';
class ContactPage extends Component{
    render() {
        return (
            <div id="contact" className="padd-section wow fadeInUp">

                <div className="container">
                    <div className="section-title text-center">
                        <h2>Contact Me</h2>
                        <p>Please send an email before calling.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <p>Email: <a href="#">rigriffin241@gmail.com</a></p>
                            <p>Mobile: <a href="#">(908)-578-7632</a></p>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
export default ContactPage;
