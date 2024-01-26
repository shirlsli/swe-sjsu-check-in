package org.swesjsu.checkin.db;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document("event")
public class Event {
    LocalDateTime createdDate;
    @Id
    String name;
    LocalDateTime start;
    LocalDateTime end;
    String location;
    EventType type;
    String blurb;
    int points;

    public Event(String name, LocalDateTime start, LocalDateTime end, String location, EventType type, String blurb, int points) {
        createdDate = LocalDateTime.now();
        this.name = name;
        this.start = start;
        this.end = end;
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

    public LocalDateTime getStartDate() {
        return start;
    }

    public LocalDateTime getEndDate() {
        return end;
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

    public void setStartDate(LocalDateTime date) {
        this.start = date;
    }

    public void setEndDate(LocalDateTime date) {
        this.end = date;
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
