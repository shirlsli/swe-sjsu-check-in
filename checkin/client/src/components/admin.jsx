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
          />

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="type-label">Choose an event type:</InputLabel>
            <Select labelId="type-label" id="type" name="types">
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
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Location"
            name="Location"
            required
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Event Description"
            name="desc"
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
            required
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Max RSVP"
            type="number"
            id="rsvp"
            name="rsvp"
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
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
