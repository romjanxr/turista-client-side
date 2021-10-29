import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/dashboard';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="mt-5 text-center">
            <h2 className="mb-3">Please Login</h2>
            <button className="btn-regular" onClick={handleGoogleSignIn}>Sign In Using Google</button>
        </div>
    );
};

export default Login;