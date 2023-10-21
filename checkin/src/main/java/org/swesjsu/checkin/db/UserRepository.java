package org.swesjsu.checkin.db;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String> {
    
    @Query("{fullName : ?0}")
    Mono<User> findUserByFullName(String fullName);
}