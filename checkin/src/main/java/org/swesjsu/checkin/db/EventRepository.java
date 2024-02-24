package org.swesjsu.checkin.db;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface EventRepository extends ReactiveMongoRepository<Event, String> {
    // save(S) or saveAll(Iterable<S>)
    // findById(ID)
    // findAll()
    // findAllById(Iterable<ID>)
    // existsById(ID)
    // count()
    // deleteById(ID)
    // delete(T)
    // deleteAll(Iterable<? extends T>)
    // deleteAll()
}
