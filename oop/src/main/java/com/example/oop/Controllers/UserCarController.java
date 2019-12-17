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


    @GetMapping("/getCarsV1")
    public List<Car> getCarsV1(@RequestParam String userID){
        List<Car> carList = new ArrayList<>(carRepository.findAllByUserID(userID));
        return carList;
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

    @GetMapping("/getAllCarsV1")
    public List<Car> getAllCarsV1(){
        List<Car> carList = new ArrayList<>(carRepository.findAll());
        return carList;
    }
    @GetMapping("/getAllCarsV2")
    public List<UserCar> getAllCarsV2(){
        List<UserCar> userCarList = new ArrayList<>();
        carRepository.findAll().forEach( cars->{
            userCarList.add(
                new UserCar(
                    cars.getUserID(),
                    cars.getId(), 
                    cars.getMake(), 
                    cars.getModel(), 
                    cars.getYear(), 
                    cars.getIsSalvaged()
                )
            );
        });
        return userCarList;
    }
    @GetMapping("/getAllCarsV3")
    public List<UserCar> getAllCarsV3(){
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

    @GetMapping("/getAllCarsV4")
    public List<UserCar> getAllCarsV4(){
        List<UserCar> userCarList = new ArrayList<>();
        carRepository.findAll().forEach( cars->{
            userCarList.add(
                new UserCar(
                    cars.getUserID(),
                    cars.getId(), 
                    cars.getMake(), 
                    cars.getModel(), 
                    cars.getYear(), 
                    cars.getIsSalvaged()
                )
            );
        });
        return userCarList;
    }
}