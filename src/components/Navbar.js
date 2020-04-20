import React from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="img Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="font-weight-light font__size">Badge</span>
                        <span className="font-weight-bold font__size">Anime</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;