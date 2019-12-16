package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.oop.Models.UserCar;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserCarController{
    @Autowired
    CarRepository carRepository;

    @GetMapping("/getCars")
    public List<UserCar> getCars(@RequestParam String userID){
        final List<UserCar> userCarList = new ArrayList<>(carRepository.findAllByUserID(userID));
        return userCarList;
    }
}