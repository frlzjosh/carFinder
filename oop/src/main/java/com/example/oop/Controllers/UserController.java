package com.example.oop.Controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.example.oop.Models.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{
    
    @CrossOrigin
    @GetMapping("/createUser")
    public List<User> getUserInfo(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String userName){
        User user = new User(firstName, lastName, userName);
        List<User> userList = new ArrayList<>();
        userList.add(user);
        return userList;
    }

}