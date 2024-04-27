import React from "react"
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; //jwtDecode for decoding the credentials received when a user logs in

export default function SignIn() {
    const navigate = useNavigate();
    const clientID = "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";
    var clientEmail = "";
    var clientName = "";
    console.log("Signing in...");

    const authenticateUser = (res) => {
        const decode = jwtDecode(res?.credential);
        console.log("Success! Current user: ", decode);
        clientName = decode.name;
        clientEmail = decode.email; //how you get one portion of it
        console.log("email is: ", clientEmail);
        console.log("Checking user in db...")
        fetch(
            "http://localhost:8080/authenticateUser?clientName=" +
            clientName + 
            "&clientEmail=" +
            clientEmail
        ).then((response) => {
            return response.json(); 
      }).then((data) => {
        console.log(data);
        navigate("/home");
      }).catch((error) => {
        console.log("Non-sjsu emails not accepted");
      });
    }

    const onFailure = (res) => {
        console.log("Fail! ", res);
    }

    return(
        <Box id="signinButton">
            <GoogleLogin
                clientID={clientID}
                buttonText="Login"
                onSuccess={authenticateUser}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </Box>
    )
}
