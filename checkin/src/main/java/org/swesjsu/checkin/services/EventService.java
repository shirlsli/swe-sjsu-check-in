package org.swesjsu.checkin.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.swesjsu.checkin.db.Event;
import org.swesjsu.checkin.db.EventRepository;

import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;

@CommonsLog
@Configuration
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public Mono<Event> addEvent(Event event){
        return eventRepository.save(event)
                .onErrorResume(DataIntegrityViolationException.class, ex -> {
                    return Mono.error(new RuntimeException("Event already exists."));
                });
    }
}
