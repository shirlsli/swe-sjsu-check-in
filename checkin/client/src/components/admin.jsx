import React from "react";
import {
  Box,
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

export default function Admin() {
  const [eventName, setEventName] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  // const [eventLocation, setEventLocation] = React.useState("");
  const [eventBlurb, setEventBlurb] = React.useState("");
  const [eventPoints, setEventPoints] = React.useState("");
  const [eventRSVP, setEventRSVP] = React.useState("");
  const [eventType, setEventType] = React.useState("wow");
  
  async function addEvent() {
    fetch(
      "http://localhost:8080/addEvent?eventName=" +
      eventName +
      "&eventDate=" +
      eventDate +
      // "&eventLocation=" +
      // eventLocation.current.value +
      "&eventBlurb=" +
      eventBlurb +
      "&eventPoints=" +
      eventPoints +
      "&eventRSVP=" +
      eventRSVP +
      "&eventType=" +
      eventType
    )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the fetched data
      console.log(data);
    });
  }
  return (
    <Container>
      <Box
        id="wrapper"
        sx={{
          backgroundColor: "white",
          padding: 4, // Adjust the padding to make the box shorter
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Box
          className="container"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Event Name"
            name="name"
            required
            sx={{ marginBottom: 2 }}
            onChange={(e) => setEventName(e.target.value)}
          />

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="type-label">Choose an event type:</InputLabel>
            <Select labelId="type-label" id="type" name="types" value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <MenuItem value="wow">WOW</MenuItem>
              <MenuItem value="ewi">EWI</MenuItem>
              <MenuItem value="prodev">PRODEV</MenuItem>
              <MenuItem value="social">SOCIAL</MenuItem>
              <MenuItem value="company">COMPANY</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="date"
            id="date"
            name="date"
            onChange={(e) => setEventDate(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Event Description"
            name="desc"
            onChange={(e) => setEventBlurb(e.target.value)}
            required
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Points"
            type="number"
            id="points"
            name="points"
            onChange={(e) => setEventPoints(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Max RSVP"
            type="number"
            id="rsvp"
            name="rsvp"
            onChange={(e) => setEventRSVP(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />

          <InputLabel htmlFor="pic" sx={{ marginBottom: 1, marginLeft: 1 }}>
            {" "}
            {/* Adjust marginLeft */}
            Choose a picture for the event:
          </InputLabel>
          <input type="file" id="pic" name="picture" sx={{ marginBottom: 2 }} />

          <Button
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
            onClick={addEvent}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
