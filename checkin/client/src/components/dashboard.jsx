import React from "react"
import SideMenu from "./side-menu"
import Event from "./event"
import { Button } from "@mui/material";

export default function Dashboard() {

    async function getAllEvents() {
        fetch(
          "http://localhost:8080/getAllEvents"
        ).then((response) => {
            //check if response is empty. If so, thrn we know there are no upcming events
          console.log(response.json());
        });
      }
      
      React.useEffect(() => { 
        getAllEvents();
      });

    return (<div>
        <SideMenu/>  
        {/* <Event/> */}
    </div>)

    
}

