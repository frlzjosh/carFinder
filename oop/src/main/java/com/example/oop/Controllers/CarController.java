package com.example.oop.Controllers;

import com.example.oop.Models.Car;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @Autowired
    CarRepository carRespository;

    @GetMapping("/getCarInfo")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:4200")
    public String getSomeString(
            @RequestParam String userID, 
            @RequestParam String make, 
            @RequestParam String model,
            @RequestParam String year, 
            @RequestParam String isSalvaged
        ) {
        
        Car car = new Car(userID, make, model, year, isSalvaged);

        return car.toString();
    }
    
    @GetMapping("/createCar")
    @CrossOrigin(origins = "http://localhost:4200")
    public Car createCar(
        @RequestParam String userID, 
        @RequestParam String make, 
        @RequestParam String model,
        @RequestParam String year, 
        @RequestParam String isSalvaged
    ){
        return carRespository.save(new Car(userID, make, model, year, isSalvaged));
    }
}   