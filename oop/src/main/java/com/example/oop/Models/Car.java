package com.example.oop.Models;

public class Car {
    String model;
    String make;
    String year;
    String isSalvaged;

    public Car(String model, String make, String year, String isSalvaged) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.isSalvaged = isSalvaged;
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

}