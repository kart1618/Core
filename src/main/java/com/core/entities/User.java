package com.core.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "usersprofiles")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String username;

    @NotNull
    private String email;

    public User() {

    }

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public User(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setUsername(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
