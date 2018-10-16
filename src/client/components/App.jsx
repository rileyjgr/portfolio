import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import NavBar from './HeaderComponent/NavBar';
import AboutPage from "./AboutPage";
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="about" exact path="/about" component={AboutPage}/>
                    <Route name="contact" exact path="/contact" component={ContactPage}/>
                </div>
            </Router>
        )
    }
}
export default App;
