package org.swesjsu.checkin.db;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

enum EventType {
    WOW,
    EWI,
    PRODEV,
    SOCIAL,
    COMPANY
}

@Document("event")
public class Event {
    LocalDateTime createdDate;
    @Id
    String name;
    LocalDateTime date;
    String location;
    EventType type;
    String blurb;
    int points;

    public Event(String name) {
        createdDate = LocalDateTime.now();
        this.name = name;
        date = createdDate;
        location = "here";
        type = EventType.WOW;
        blurb = "h";
        points = 0;
    }

    public Event(String name, LocalDateTime date, String location, EventType type, String blurb, int points) {
        createdDate = LocalDateTime.now();
        this.name = name;
        this.date = date;
        this.location = location;
        this.type = type;
        this.blurb = blurb;
        this.points = points;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public String getName() {
        return name;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getLocation() {
        return location;
    }

    public EventType getType() {
        return type;
    }

    public String getBlurb(){
        return blurb;
    }

    public int getPoints() {
        return points;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setType(EventType type) {
        this.type = type;
    }

    public void setBlurb(String blurb){
        this.blurb = blurb;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
