package org.swesjsu.checkin.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.User;
import org.swesjsu.checkin.services.UserService;


import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;


@CommonsLog
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class LoginController {
    @Autowired
    UserService userService;
    
    // Creates JSON for non-sjsu emails trying to login
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body("Needs to be a sjsu.edu email");
    }
    
    @GetMapping("/authenticateUser")
    public Mono<User> authenticateUser(@RequestParam(name = "clientName", defaultValue = "") String fullName,
            @RequestParam(name = "clientEmail", defaultValue = "") String email) {
        log.info(fullName);
        log.info(email);
        try {
            Mono<User> userMono = userService.checkIfValidUser(email);
            return userMono;
        } catch (Exception e) {
            if (email.endsWith("@sjsu.edu")) {
                User u = new User(fullName, email);
                return userService.addUserToDatabase(u);
            } else {
                return Mono.error(new IllegalArgumentException("Needs to be a sjsu.edu email"));
            }
        }
   }
}




