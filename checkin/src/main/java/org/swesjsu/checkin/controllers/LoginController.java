package org.swesjsu.checkin.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.User;
import org.swesjsu.checkin.db.UserRepository;
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
public class LoginController {
    @Autowired
    UserService userService;

    @GetMapping("/checkUser")
    public void authenticateUser(@RequestParam(name = "clientEmail", defaultValue = "") String email) {
        Mono<User> user = checkIfValidUser(email);
        if(user != null) {
            System.out.println("user exists");
        } else {
            System.out.println("user does not exist")
        }
    }
}
