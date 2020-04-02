import React from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.png';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="img Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="font-weight-light font__size">Badge</span>
                        <span className="font-weight-bold font__size">Anime</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;