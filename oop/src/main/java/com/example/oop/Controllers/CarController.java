package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.example.oop.Models.Car;
import com.example.oop.Repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Transactional
public class CarController {

    @Autowired
    CarRepository carRepository;

    @RequestMapping(value="/createCar", method=RequestMethod.POST)
    public ResponseEntity<Car> createCar( @RequestBody Map<String, String> body) throws Exception{
        Car car = new Car(
            body.get("userID"),
            body.get("make"), 
            body.get("model"), 
            body.get("year"), 
            body.get("isSalvaged")
        );
        return new ResponseEntity<Car>(carRepository.save(car), HttpStatus.CREATED);
    }
    
    @DeleteMapping("/deleteCar")
    public List<Car> deleteCar(@RequestParam String carID, @RequestParam String userID){
        int _carID = Integer.parseInt(carID);
        return new ArrayList<>(
            carRepository.removeByIdAndUserID(
                _carID,
                userID
            )
        ); 
    }
}   