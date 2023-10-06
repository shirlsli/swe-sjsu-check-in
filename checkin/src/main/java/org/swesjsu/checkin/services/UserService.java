package org.swesjsu.checkin.services;

import lombok.extern.apachecommons.CommonsLog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.swesjsu.checkin.db.UserRepository;
import org.swesjsu.checkin.models.User;

@CommonsLog
@Configuration
public class UserService {

    @Autowired
    UserRepository userRepository;

    // use service to store data in database, use controller when don't need to store data in database
}
