import './App.css';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; //jwtDecode for decoding the credentials received when a user logs in

const clientID = "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";

function SignIn() {
    console.log("Signing in...");
    const onSuccess = (res) => {
        const decode = jwtDecode(res?.credential);
        console.log("Success! Current user: ", decode);
        console.log("email: " + decode.email); //how you get one portion of it
    }

    const onFailure = (res) => {
        console.log("Fail! ", res);
    }

    return(
        <div id="signinButton">
            <GoogleLogin
                clientID={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                // clientID={clientID}
                // buttonText="Login"
                // onSuccess={onSuccess}
                // onFailure={onFailure}
                // cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
            />
        </div>
    );
}


export default SignIn;
// function SignIn() {
//     // This function will be called upon a successful login<div className="App">
//     const handleSuccess = (credentialResponse) => {
//         // If you are using the authorization code flow, you will receive a code to be exchanged for an access token
//         const authorizationCode = credentialResponse.code;
        
//         // Send the authorization code to your backend server
//         /*
//         fetch( "http://localhost:8080/authenticateUser?email=" + email).then((response) => {
//             // check if email is valid
//         });
//         */
      
//         fetch('/api/auth/google', { //swe fetch meeting notes
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ code: authorizationCode }),
//         })
//         .then(response => response.json()) 
//         .then(data => {
//             // Handle the response from your backend server
//             console.log('Login successful, backend response:', data);
//         })
//         .catch(error => {
//             // Handle errors in communicating with your backend server
//             console.error('Error exchanging authorization code:', error);
//         });
//     };
//     //above code from https://www.dhiwise.com/post/react-google-oauth-the-key-to-secure-and-quick-logins
//     return (
//     <div>
//         <GoogleLogin
//         onSuccess={credentialResponse => {
//             console.log(handleSuccess);
//         }}
//         onError={() => {
//             console.log('Login Failed');
//         }}
//         //can do further customizations if needed
//         />
//     </div>
//     );
// }

// export default SignIn;
