package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.oop.Models.Car;
import com.example.oop.Models.User;
import com.example.oop.Models.UserCar;
import com.example.oop.Repositories.CarRepository;
import com.example.oop.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserCarController{
    @Autowired
    CarRepository carRepository;

    @Autowired
    UserRepository userRepository;


    @GetMapping("/getCarsByUserID")
    public List<Car> getCarsByUserID(@RequestParam String userID){
        List<Car> carList = new ArrayList<>(carRepository.findAllByUserID(userID));
        return carList;
    }

    @GetMapping("/getAllCars")
    public List<UserCar> getAllCars(){
        List<UserCar> userCarList = new ArrayList<>();
        carRepository.findAll().forEach( cars->{
            userRepository.findAllById(cars.getUserID()).forEach(user->{
                userCarList.add(
                    new UserCar(
                        cars.getUserID(),
                        user.getUserName(),
                        cars.getId(),
                        cars.getMake(),
                        cars.getModel(), 
                        cars.getYear(), 
                        cars.getIsSalvaged()
                    )
                );
            });
        });
        return userCarList;
    }
}