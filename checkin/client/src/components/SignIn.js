//import logo from './logo.svg';
// import './App.css';
import Event from './event.jsx';
import Admin from './admin.jsx';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

function SignIn() {
    // This function will be called upon a successful login
    const handleSuccess = (credentialResponse) => {
        // If you are using the authorization code flow, you will receive a code to be exchanged for an access token
        const authorizationCode = credentialResponse.code;
        
        // Send the authorization code to your backend server
        fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: authorizationCode }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from your backend server
            console.log('Login successful, backend response:', data);
        })

        .catch(error => {
            // Handle errors in communicating with your backend server
            console.error('Error exchanging authorization code:', error);
        });
    };
    //above code from https://www.dhiwise.com/post/react-google-oauth-the-key-to-secure-and-quick-logins
    return (
    <div>
        <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        //can do further customizations if needed
        />
    </div>
    );
}

export default SignIn;

