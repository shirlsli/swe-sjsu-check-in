//import logo from './logo.svg';
//import './App.css';
import Event from './components/event.jsx';
import Admin from './components/admin.jsx';
import SideMenu from './components/side-menu.jsx';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import SignIn from "./components/SignIn.js";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard.jsx';

//gotta find the env GOOGLE_CLIENT_ID eventually but for now it doesn't work so i'm using it straight up
function App() {
  return (
    <div className="App">
      <Dashboard />
      
    </div>
  );
}

export default App;
