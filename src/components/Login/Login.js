import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="text-center my-5">
            <button onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;