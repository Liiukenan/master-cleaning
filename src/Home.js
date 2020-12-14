import React, { Component } from 'react'
import Header from "./components/header"
import Main from "./components/main"
import Clear from "./components/clear"
import Footer from "./components/footer"
import './home.styl'
import { Link, Element} from 'react-scroll'
class Home extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="home">
                    <Element name="firstInsideContainer">
                        <Header />
                    </Element>
                    <Main />
                    <Clear />
                    <Footer />
                    <Link to="firstInsideContainer" spy={true}
                    smooth={true}
                    duration= {500}>
                        <button className="top">
                            <img src={require("./assets/images/btn_up.png")} alt=""/>
                        </button>
                    </Link>
            </div>
        );
    }
}
export default Home;