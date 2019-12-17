package com.example.oop.Models;

public class UserCar {

    private String userID;
    private String userName;
    private int carID;
    private String model;
    private String make;
    private String year;
    private String isSalvaged;

    public UserCar(){
        super();
    }
    public UserCar(String userID){
        this.userID = userID;
    }
    
    public UserCar(String userID, int carID, String make, String model, String year, String isSalvaged) {
        this.userID = userID;
        this.carID = carID;
        this.make = make;
        this.model = model;
        this.year = year;
        this.isSalvaged = isSalvaged;
    }



    // public UserCar(String userID, String userName, int carID, String make, String model, int year, String isSalvaged) {
    //     this.userID = userID;
    //     this.userName = userName;
    //     this.carID = carID;
    //     this.make = make;
    //     this.model = model;
    //     this.year = year;
    //     this.isSalvaged = isSalvaged;
    // }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getCarID() {
        return carID;
    }

    public void setCarID(int carID) {
        this.carID = carID;
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

    public String getIsSalvaged() {
        return isSalvaged;
    }

    public void setIsSalvaged(String isSalvaged) {
        this.isSalvaged = isSalvaged;
    }


}