package org.swesjsu.checkin.db;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

enum PermissionStatus {
    ADMIN,
    NATIONALSWE,
    SWESJSU
}

@Document("user")
public class User {

    @Id
    private String email;

    private String fullName;

    private int points;

    private PermissionStatus permission;

    // private List<Event> events = new ArrayList<>();

    // DO NOT DELETE: MongoDB Atlas requires an empty constructor!!!
    public User() {
        
    }

    public User(String fullName, String email) {
        this.fullName = fullName;
        this.email = email;
        this.points = 0;
        this.permission = PermissionStatus.SWESJSU;
    }

    public User(String fullName, String email, int points, PermissionStatus permission) {
        this.fullName = fullName;
        this.email = email;
        this.points = points;
        this.permission = permission;
    }

    public String getFullName() {
        return this.fullName;
    }

    public String getEmail() {
        return this.email;
    }

    public int getPoints() {
        return this.points;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setPoints(int points) {
        this.points = points;
    }


}
