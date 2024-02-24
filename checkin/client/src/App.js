import logo from './logo.svg';
import './App.css';
import Event from './components/event.jsx';
import Admin from './components/admin.jsx';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import SignIn from "./SignIn.js";
import { BrowserRouter } from 'react-router-dom';
//gotta find the env GOOGLE_CLIENT_ID eventually but for now it doesn't work so i'm using it straight up
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={"484410736875-f922lgoo84fpebj9h1taoaqli58senpe.apps.googleusercontent.com"}> 
        <SignIn></SignIn>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
