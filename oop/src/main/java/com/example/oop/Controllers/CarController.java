package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.example.oop.Models.Car;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @Autowired
    CarRepository carRepository;

    @PostMapping("/createCar")
    public Car createCar( @RequestBody Map<String, String> body){
        return carRepository.save(
            new Car(
                body.get("userID"),
                body.get("make"), 
                body.get("model"), 
                body.get("year"), 
                body.get("isSalvaged")
            )
        );
    }
    
    @DeleteMapping("/deleteCar")
    public List<Car> deleteCar(@RequestParam Map<String, String> param){
        int id = Integer.parseInt(param.get("carID"));
        return new ArrayList<>(
            carRepository.removeByIdAndUserID(
                id,
                param.get("userID")
            )
        ); 
    }
}   