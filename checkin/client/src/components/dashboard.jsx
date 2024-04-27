import React, { useState } from "react";
import SideMenu from "./side-menu";
import Event from "./event";
import { Button } from "@mui/material";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  async function getAllEvents() {
    fetch("http://localhost:8080/getAllEvents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allEvents = data;
        console.log(allEvents);
        setEvents(allEvents);
        console.log(events); // This will log the previous state value of 'events'
      });
  }

  React.useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <SideMenu />
      {events.map((event) => (
        <Event
          blurb={event.blurb}
          createdDate={event.createdDate}
          endDate={event.endDate}
          location={event.location}
          name={event.name}
          points={event.points}
          startDate={event.startDate}
          type={event.type}
        />
      ))}
    </div>
  );
}
