package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.oop.Models.Car;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @GetMapping("/getCarInfo")
    public List<Car> getSomeString(@RequestParam String model, @RequestParam String make,
            @RequestParam String year, @RequestParam String isSalvaged) {
        List<Car> car = new ArrayList<Car>();
        Car carObj = new Car(model, make, year, isSalvaged);
        car.add(carObj);
        return car;
    }
}