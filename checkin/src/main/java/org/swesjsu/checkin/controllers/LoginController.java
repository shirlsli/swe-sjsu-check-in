package org.swesjsu.checkin.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.swesjsu.checkin.db.User;
import org.swesjsu.checkin.services.UserService;


import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;


import org.springframework.beans.factory.annotation.Autowired;


@CommonsLog
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class LoginController {
    @Autowired
    UserService userService;
    
    @GetMapping("/authenticateUser")
    public void authenticateUser(@RequestParam(name = "fullName", defaultValue = "") String fullName,
            @RequestParam(name = "clientEmail", defaultValue = "") String email) {
        System.out.println(fullName);
        System.out.println(email);
        Mono<User> user = userService.checkIfValidUser(email);
        if(user == null) {
            System.out.println("user does not exist");
            User u = new User(fullName, email);
            userService.addUserToDatabase(u);
        }
        System.out.println("user exists");
        //return user;
   }
}




