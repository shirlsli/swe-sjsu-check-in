import React from "react"
import Box from '@mui/material/Box';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; //jwtDecode for decoding the credentials received when a user logs in

export default function SignIn() {
    const clientID = "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";
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
        <Box id="signinButton">
            <GoogleLogin
                clientID={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </Box>
    )
}
