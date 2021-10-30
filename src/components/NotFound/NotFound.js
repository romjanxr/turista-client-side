import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();

    return (
        <div>
            <div className="tour-details-section">
                <h2 className="tour-details-title"><i>404 error</i></h2>
            </div>
            <div className="text-center mb-5 pb-5">
                <h1 className="error-title">404</h1>
                <h2 className="error-description">Ooops! That page doesn't exist!</h2>
                <p className="text-para">This file May Have Been Moved or Deleted. <br /> Be Sure to Check Your Spelling.</p>
                <button onClick={() => history.push('/home')} className="btn-booking">BACK TO HOME</button>
            </div>
        </div>
    );
};

export default NotFound;