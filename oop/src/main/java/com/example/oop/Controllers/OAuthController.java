package com.example.oop.Controllers;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OAuthController{
    
    @CrossOrigin(origins ="http://localhost:4200")
    @GetMapping("api/messages")
    public List<String> getMessages(Principal principal) {
        return Arrays.asList(principal.toString());
    }

}