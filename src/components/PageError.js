import React from 'react';
import './styles/PageError.css';
import  img500 from '../images/error_500.png';


function PageError (props) {
    return (
        <div className="PageError">
            <img style={{width:"100%", height: "80%"}} src={img500} alt=""/> 
        </div>
    );
}

export default PageError;