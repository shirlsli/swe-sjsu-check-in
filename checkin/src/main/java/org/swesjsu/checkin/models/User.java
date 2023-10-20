package org.swesjsu.checkin.models;

import org.springframework.data.mongodb.core.mapping.Document;

enum PermissionStatus {
    ADMIN,
    NATIONALSJSU,
    SWESJSU
}

@Document("users")
public class User {
    private String fullName;
    private int points;

    //private List<Event> events = new ArrayList<>();

    public User(String fullName, int points) {
        this.fullName = fullName;
        this.points = points;
    }

    public String getFullName() {
        return fullName;
    }

    public int getPoints() {
        return points;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setPoints(int points) {
        this.points = points;
    }


}