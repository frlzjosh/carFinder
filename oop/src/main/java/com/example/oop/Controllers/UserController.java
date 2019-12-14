package com.example.oop.Controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.oop.Models.User;
import com.example.oop.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{

    @Autowired
    UserRepository userRepository;


    @PostMapping("/createUser")
    public User getUserInfo(@RequestBody Map<String, String> body){
        User user = new User(body.get("userID"), body.get("userName"), body.get("firstName"), body.get("lastName"));
        return userRepository.save(user);
    }

    @GetMapping("/doesUserHaveAnAccount")
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