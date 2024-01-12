package org.swesjsu.checkin.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.Event;
import org.swesjsu.checkin.db.User;
import org.swesjsu.checkin.db.UserRepository;
import org.swesjsu.checkin.services.EventService;
import org.swesjsu.checkin.services.UserService;

import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;

import org.swesjsu.checkin.services.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

@CommonsLog
@RestController
@RequestMapping("/")
public class AuthController {

    @Autowired
    UserService userService;
    @Autowired
    EventService eventService;

    @GetMapping
    public Mono<Object> authenticateUser(OAuth2AuthenticationToken token) {
        // just get a certain attribute (email), check if in database
        // make a User object with the JSON info
        Map<String, Object> attributes = token.getPrincipal().getAttributes();
        String fullName = (String) attributes.get("name");
        String email = (String) attributes.get("email");
        User dummyUser = new User(fullName, email);
        userService.checkIfValidUser(dummyUser).subscribe(user -> {
            if (user != null) {
                log.info("user is valid");
            }
        });

        // dummy
        Event event = new Event("name");
        eventService.addEvent(event).subscribe(event1 -> {
            log.info("Event saved: " + event.getName());
        },
                error -> {
                    log.error("Error while saving event: " + error.getMessage());
                });

        return userService.addUserToDatabase(dummyUser).map(user -> {
            log.info("Success? " + user.getFullName() + ", " + user.getEmail());
            return token.getPrincipal().getAttributes();
        });

    }

    // https://www.baeldung.com/spring-security-5-oauth2-login
    // https://spring.io/guides/tutorials/spring-boot-oauth2/ "How to Add a Local
    // User Database" section

    //
}
