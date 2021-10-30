import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import google from '../../images/google.svg'

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri)
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <Helmet>
                <title>Turista | Login</title>
            </Helmet>
            <div className="tour-details-section">
                <h2 className="tour-details-title">Please Login</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center my-5 py-5">
                <button className="btn-regular" onClick={handleGoogleSignIn}><img width="32px" src={google} alt="" />  Sign In Using Google</button>
            </div>
        </div>
    );
};

export default Login;