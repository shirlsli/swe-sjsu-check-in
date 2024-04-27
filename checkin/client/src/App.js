//import logo from './logo.svg';
//import './App.css';
import Dashboard from "./components/dashboard.jsx";
import Profile from "./components/profile.jsx";
import Admin from "./components/admin.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
import SignIn from "./components/sign-in.jsx";
//gotta find the env GOOGLE_CLIENT_ID eventually but for now it doesn't work so i'm using it straight up
const clientID =
  "307866176371-26rvthknep9u5catqt0huccs3v4tn70c.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/create-event" element={<Admin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
    // <div className="App">
    //   <SideMenu />
    // </div>
  );
}

export default App;
