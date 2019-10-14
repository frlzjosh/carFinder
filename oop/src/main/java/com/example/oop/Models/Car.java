package com.example.oop.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Car {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="car_id")
    int id;

    String model;
    String make;
    String year;
    String isSalvaged;

    public Car(){
        super();
    }

    public Car( String make, String model, String year, String isSalvaged) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.isSalvaged = isSalvaged;
    }
    // public Car(int id, String make, String model, String year, String isSalvaged) {
    //     this.id = id;
    //     this.model = model;
    //     this.make = make;
    //     this.year = year;
    //     this.isSalvaged = isSalvaged;
    // }

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

}