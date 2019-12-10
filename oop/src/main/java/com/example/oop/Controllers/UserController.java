package com.example.oop.Controllers;

import java.util.List;
import java.util.Optional;

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


    @GetMapping("/createUser")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserInfo(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String userName){
        User user = new User(userName, firstName, lastName);
        return userRepository.save(user);
    }

    @GetMapping("/doesUserHaveAnAccount")
    @CrossOrigin(origins = "http://localhost:4200")
    public User compareUsers(@RequestParam String userName){
        List<User> users = userRepository.findAll();
        User user = new User();
        for(int i = 0; i < users.size(); i++){
            if(users.get(i).getUserName().compareTo(userName) == 0){
                Optional<User> u = userRepository.findByUserName(users.get(i).getUserName());
                String id = u.map(usr-> usr.getId()).orElse(null);
                return new User(id, users.get(i).getUserName(), users.get(i).getFirstName(), users.get(i).getLastName());
            }else{
                user = null;
            }
        }
        return user;
    }  

}