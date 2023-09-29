package org.swejsu.checkin.db;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.swejsu.checkin.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    
    @Query("{name:'?0'}")
    User findUserByName(String name);

}