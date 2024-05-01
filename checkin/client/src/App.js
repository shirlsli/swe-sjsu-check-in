import logo from './logo.svg';
import './App.css';
import Event from './components/event.jsx';
import Admin from './components/admin.jsx';
import SideMenu from './components/side-menu.jsx';
import SignIn from "./components/sign-in.jsx";
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/dashboard',
    element: <SideMenu />
  }
]);

//gotta find the env GOOGLE_CLIENT_ID eventually but for now it doesn't work so i'm using it straight up
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    // <div className="App">
    //   <SideMenu />
    // </div>
  );
}

export default App;
