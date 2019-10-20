package com.example.oop.Controllers;

import com.example.oop.Models.Car;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @Autowired
    CarRepository carRespository;

    @GetMapping("/getCarInfo")
    @ResponseBody
    public String getSomeString(
            // @RequestParam int id, 
            @RequestParam String make, 
            @RequestParam String model,
            @RequestParam String year, 
            @RequestParam String isSalvaged
        ) {
        
        Car car = new Car( make, model, year, isSalvaged);

        return car.toString();
    }
    
    @CrossOrigin
    @GetMapping("/createCar")
    public Car createCar(
        // @RequestParam int id, 
        @RequestParam String make, 
        @RequestParam String model,
        @RequestParam String year, 
        @RequestParam String isSalvaged
    ){
        return carRespository.save(new Car(make, model, year, isSalvaged));
    }
}   