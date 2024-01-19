package org.swesjsu.checkin.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.Event;
import org.swesjsu.checkin.db.EventType;

import lombok.extern.apachecommons.CommonsLog;

@CommonsLog
@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
class EventController {
    @GetMapping("/addEvent")
    public String addEvent(@RequestParam(name = "eventName", defaultValue = "") String name,
    @RequestParam(name = "eventDate", defaultValue = "") String date,
    @RequestParam(name = "eventBlurb", defaultValue = "") String blurb,
    @RequestParam(name = "eventPoints", defaultValue = "") String points,
    @RequestParam(name = "eventRSVP", defaultValue = "") String rsvp,
    @RequestParam(name = "eventType", defaultValue = "") String type) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime dt = LocalDateTime.parse(date, formatter);
        Event event = new Event(name, dt, "", EventType.valueOf(type), blurb, Integer.parseInt(points));
        return "success";
    }
}
