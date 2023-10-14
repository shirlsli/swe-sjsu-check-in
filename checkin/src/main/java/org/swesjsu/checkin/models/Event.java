package org.swesjsu.checkin.models;

import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

enum eventType {
    WOW,
    EWI,
    PRODEV,
    SOCIAL,
    COMPANY
}

@Document("events")
public class Event {
    LocalDateTime createdDate;
    String name;
    LocalDateTime date;
    String location;
    eventType type;
    String blurb;
    int points;

    public Event(String name, LocalDateTime date, String location, eventType type, String blurb, int points) {
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

    public eventType getType() {
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

    public void setType(eventType type) {
        this.type = type;
    }

    public void setBlurb(String blurb){
        this.blurb = blurb;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
