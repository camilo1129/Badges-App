import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/logo__page.png';
import Navbar from '../components/Navbar.js';
import Badge from '../components/Badge.js';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid img__anime" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Richard"
                                lastName="Kaufman"
                                nameAnime="PlatziConf"
                                powerFight="1280/1300"
                                specialTrait="Human"
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;