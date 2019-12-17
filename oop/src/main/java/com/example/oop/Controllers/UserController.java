package com.example.oop.Controllers;

import java.util.Map;

import javax.validation.Valid;

import com.example.oop.Models.User;
import com.example.oop.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/createUser")
    public ResponseEntity<User> postUserInfo(@Valid @RequestBody Map<String, String> body) {
        User user = new User(body.get("userID"), body.get("userName"), body.get("firstName"), body.get("lastName"));
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }

}