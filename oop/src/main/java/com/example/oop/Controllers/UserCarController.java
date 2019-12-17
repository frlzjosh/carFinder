package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.oop.Models.Car;
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

    @GetMapping("/getCarsV1")
    public List<Car> getCarsV1(@RequestParam String userID){
            final List<Car> userCarList = new ArrayList<>(carRepository.findAllByUserID(userID));
            return userCarList;
    }

    @GetMapping("/getCarsV2")
    public List<UserCar> getCarsV2(@RequestParam String userID){
        List<Car> carList = new ArrayList<>(carRepository.findAllByUserID(userID));
        List<UserCar> userCarList = new ArrayList<>();
        for(int i = 0; i < carList.size(); i++){
            userCarList.add(
                new UserCar(
                    userID,
                    carList.get(i).getId(), 
                    carList.get(i).getMake(),
                    carList.get(i).getModel(),
                    carList.get(i).getYear(),
                    carList.get(i).getIsSalvaged()
                )
            );
        }
        return userCarList;
    }

    @GetMapping("/getAllCars")
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }
}