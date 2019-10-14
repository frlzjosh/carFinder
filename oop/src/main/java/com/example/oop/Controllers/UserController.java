package com.example.oop.Controllers;


import com.example.oop.Models.User;
import com.example.oop.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{

    @Autowired
    UserRepository userRepository;


    @CrossOrigin
    @GetMapping("/createUser")
    public String getUserInfo(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String userName){
        User user = new User(firstName, lastName, userName);
        userRepository.save(user);
        return user.toString();
    }

    @GetMapping("/test")
    public String get(){
        return"sup";
    }

}