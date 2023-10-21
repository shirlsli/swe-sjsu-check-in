package org.swesjsu.checkin.services;

import lombok.extern.apachecommons.CommonsLog;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.DataIntegrityViolationException;
import org.swesjsu.checkin.db.User;
import org.swesjsu.checkin.db.UserRepository;

@CommonsLog
@Configuration
public class UserService {

    @Autowired
    UserRepository userRepository;

    // use service to store data in database, use controller when don't need to
    // store an user in database
    public Mono<User> addUserToDatabase(User user) {
        log.info("In User Service: " + user.getFullName());
        return userRepository.save(user)
                .onErrorResume(DataIntegrityViolationException.class, ex -> {
                    return Mono.error(new RuntimeException("User already exists."));
                });
    }
}
