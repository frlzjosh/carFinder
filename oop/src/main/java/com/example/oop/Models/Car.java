package com.example.oop.Models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="car")
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="car_id")
    int id;
    
    @Column(name="user_id")
    String userID;

    @Column(name="model")
    String model;

    @Column(name="make")
    String make;

    @Column(name="year")
    String year;
    
    @Column(name="is_salvaged")
    String isSalvaged;

    private String userName;

    public Car(){
        super();
    }

    public Car(String userID, String make, String model, String year, String isSalvaged) {
        this.userID = userID;
        this.make = make;
        this.model = model;
        this.year = year;
        this.isSalvaged = isSalvaged;
    }
    
    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getIsSalvaged() {
        return isSalvaged;
    }

    public void setIsSalvaged(String isSalvaged) {
        this.isSalvaged = isSalvaged;
    }



    @Override
    public String toString() {
        return "Car={" +
            "id=" + id +
            ", make='" + make + '\'' +
            ", model='" + model + '\'' +
            ", year='" + year + '\'' +
            ", isSalvaged='" + isSalvaged + '\'' +
        '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    

}