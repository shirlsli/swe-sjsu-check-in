package org.swesjsu.checkin.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.Event;
import org.swesjsu.checkin.services.EventService;
import org.swesjsu.checkin.db.EventType;
import reactor.core.publisher.Mono;

import lombok.extern.apachecommons.CommonsLog;

@CommonsLog
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class EventController {

    @Autowired
    EventService eventService;

    @GetMapping("/addEvent")
    public Mono<Event> addEvent(@RequestParam(name = "eventName", defaultValue = "") String name,
            @RequestParam(name = "eventStartDateTime", defaultValue = "") String start,
            @RequestParam(name = "eventEndDateTime", defaultValue = "") String end,
            @RequestParam(name = "eventLocation", defaultValue = "") String location,
            @RequestParam(name = "eventBlurb", defaultValue = "") String blurb,
            @RequestParam(name = "eventPoints", defaultValue = "") String points,
            @RequestParam(name = "eventRSVP", defaultValue = "") String rsvp,
            @RequestParam(name = "eventType", defaultValue = "") String type) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy h:mm a");
        LocalDateTime dtStart = LocalDateTime.parse(start, formatter);
        LocalDateTime dtEnd = LocalDateTime.parse(end, formatter);
        Event event = new Event(name, dtStart, dtEnd, location, EventType.valueOf(type.toUpperCase()), blurb,
                Integer.parseInt(points));
        return eventService.addEvent(event);
    }
}
