import React from 'react';
import animeLogo from '../images/logo.png';
import './styles/Badge.css';

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={animeLogo} alt="logo BadgeAnime"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar" alt="Avatar"/>
        <h1> {this.props.firstName} <br />  {this.props.lastName} </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Dragon Ball Z</h3>
                    <div>
                        <p>Power fight: {this.props.powerFight}</p>
                        <p>Special Trait: {this.props.specialTrait}</p>
                    </div>
                </div>

                <div className="Badge__footer">
                    #badgeAnime
                </div>
            </div>
        );
    }
}

export default Badge;