import React from "react"
import Box from '@mui/material/Box';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; //jwtDecode for decoding the credentials received when a user logs in

export default function signIn() {
    const clientID = "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";
    const clientEmail = "";
    console.log("Signing in...");
    const onSuccess = (res) => {
        const decode = jwtDecode(res?.credential);
        console.log("Success! Current user: ", decode);
        clientEmail = decode.email; //how you get one portion of it
    }

    const onFailure = (res) => {
        console.log("Fail! ", res);
    }

    async function checkUser() {
        fetch(
            "http://localhost:8080/addEvent?clientEmail=" +
        clientEmail
        ).then((response) => {
            console.log(response.json());
        });
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
                onClick={checkUser}
            />
        </Box>
    )
}
