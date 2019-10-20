package com.example.oop.Controllers;

import java.util.List;

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
    public User getUserInfo(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String userName){
        User user = new User(firstName, lastName, userName);
        return userRepository.save(user);
    }

    @CrossOrigin
    @GetMapping("/doesUserHaveAnAccount")
    public User compareUsers(@RequestParam String userName){
        List<User> users = userRepository.findAll();
        User user = new User();
        for(int i = 0; i < users.size(); i++){
            if(users.get(i).getUserName().compareTo(userName) == 0){
                user =  new User(
                    users.get(i).getFirstName(),
                    users.get(i).getLastName(),
                    users.get(i).getUserName()
                );
            }else{
                user = null;
            }
        }
        return user;
    }  

}