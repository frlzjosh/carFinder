package com.example.oop.Controllers;

import java.util.Map;

import com.example.oop.Models.Car;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @Autowired
    CarRepository carRespository;

    @PostMapping("/createCar")
    public Car createCar( @RequestBody Map<String, String> body){
        return carRespository.save(
            new Car(
                body.get("userID"),
                body.get("make"), 
                body.get("model"), 
                body.get("year"), 
                body.get("isSalvaged")
            )
        );
    }

    
}   