package org.swejsu.checkin.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class User {

        private String fullName;
        private int points;
        
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