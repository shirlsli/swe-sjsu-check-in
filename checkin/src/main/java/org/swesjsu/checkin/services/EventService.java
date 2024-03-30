package org.swesjsu.checkin.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.DataIntegrityViolationException;
import org.swesjsu.checkin.db.Event;
import org.swesjsu.checkin.db.EventRepository;

import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;

@CommonsLog
@Configuration
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public Mono<Event> addEvent(Event event) {
        return eventRepository.save(event)
                .onErrorResume(DataIntegrityViolationException.class, ex -> {
                    return Mono.error(new RuntimeException("Event already exists."));
                });
    }

    public Mono<List<Event>> getAllEvents() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        return eventRepository.findAll()
                // .filter(event -> event.getCreatedDate().isAfter(currentDateTime))
                .collectList();
    }
    // make method for retrieving all of the upcoming events from the database
    // filter the events by their start date/time
    // LocalDateTime.now() -> get the current date/time
    // check if the event's start date/time is "greater than" the current date/time
    // no parameter, methodname getAllEvent
}
