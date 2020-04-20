import React from 'react';
import './styles/NotFound.css';
import NotFoundIcon from '../images/platzi404.png';



function NotFound() {
    return (
    <div className="Not__found">
        <div className="row">
            <div className="col-6">
                <h1>404: Not Found</h1>
                <p>The request URL not was found on the server!</p>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={NotFoundIcon} alt=""/>
            </div>
        </div>
        
    </div>
    );   
}

export default NotFound;