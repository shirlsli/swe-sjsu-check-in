import logo from './logo.svg';
import './App.css';
import Event from './components/event.jsx';
import Admin from './components/admin.jsx';
import SideMenu from './components/side-menu.jsx';
import { useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import SignIn from "./components/sign-in.jsx";
//gotta find the env GOOGLE_CLIENT_ID eventually but for now it doesn't work so i'm using it straight up
const clientID = "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  })
  return (
    // <div className="App">
    //   <GoogleOAuthProvider clientId={clientID}> 
    //     <SignIn />
    //   </GoogleOAuthProvider>
    // </div>
    <div className="App">
      <SideMenu />
    </div>
  );
}

export default App;
